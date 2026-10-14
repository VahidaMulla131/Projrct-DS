/**
 * Browser-Based Python Execution Service (WebAssembly / Pyodide)
 * 
 * Controlled, client-side Python execution environment:
 * - Executes entirely inside browser WebAssembly sandbox
 * - Never executes commands on the host OS
 * - Loads pandas, numpy, matplotlib, seaborn
 * - Intercepts matplotlib/seaborn plots and outputs PNG graphics
 * - Captures stdout and stderr
 * - Lazy-loaded only on demand
 */

let pyodideInstance = null;
let pyodideLoadingPromise = null;
let packagesLoaded = false;

export async function getPyodideInstance(onStatusUpdate = () => {}) {
  if (pyodideInstance && packagesLoaded) {
    return pyodideInstance;
  }

  if (pyodideLoadingPromise) {
    return pyodideLoadingPromise;
  }

  pyodideLoadingPromise = (async () => {
    onStatusUpdate("Loading Python WebAssembly runtime...");

    // Dynamically inject Pyodide script if not already present
    if (!window.loadPyodide) {
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js";
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load Pyodide WebAssembly script from CDN. Please verify internet connectivity."));
        document.head.appendChild(script);
      });
    }

    onStatusUpdate("Initializing Python environment...");
    pyodideInstance = await window.loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/"
    });

    onStatusUpdate("Loading scientific packages (numpy, pandas, matplotlib)...");
    try {
      await pyodideInstance.loadPackage(["numpy", "pandas", "matplotlib"]);
    } catch (pkgErr) {
      console.warn("Standard package load warning:", pkgErr);
    }

    // Load seaborn (via direct package or micropip)
    try {
      onStatusUpdate("Loading seaborn package...");
      await pyodideInstance.loadPackage("seaborn");
    } catch (sbErr) {
      try {
        await pyodideInstance.loadPackage("micropip");
        await pyodideInstance.runPythonAsync(`
import micropip
await micropip.install("seaborn")
`);
      } catch (mpErr) {
        console.warn("Seaborn installation notice:", mpErr);
      }
    }

    // Load scikit-learn (needed for Experiments 9 & 10)
    try {
      onStatusUpdate("Loading scikit-learn package...");
      await pyodideInstance.loadPackage("scikit-learn");
    } catch (skErr) {
      console.warn("scikit-learn load notice:", skErr);
    }

    // Load wordcloud (needed for Experiment 8b)
    try {
      onStatusUpdate("Loading wordcloud package...");
      await pyodideInstance.loadPackage("wordcloud");
    } catch (wcErr) {
      console.warn("wordcloud load notice:", wcErr);
    }

    // Load beautifulsoup4 (needed for Experiment 8a)
    try {
      onStatusUpdate("Loading beautifulsoup4 package...");
      await pyodideInstance.loadPackage("beautifulsoup4");
    } catch (bsErr) {
      console.warn("beautifulsoup4 load notice:", bsErr);
    }

    packagesLoaded = true;
    onStatusUpdate("Python scientific runtime ready.");
    return pyodideInstance;
  })();

  return pyodideLoadingPromise;
}

/**
 * Runs Python code in the safe browser sandbox.
 * Returns { success: boolean, output: string, plots: string[], error?: string }
 */
export async function runPythonCode(code, onStatusUpdate = () => {}) {
  if (!code || !code.trim()) {
    return {
      success: false,
      output: "",
      plots: [],
      error: "Validation Error: Code cannot be empty. Please enter Python code to execute."
    };
  }

  try {
    const pyodide = await getPyodideInstance(onStatusUpdate);
    onStatusUpdate("Preparing execution sandbox...");

    // Dynamically load any extra packages if referenced
    if (pyodide.loadPackagesFromImports) {
      try {
        await pyodide.loadPackagesFromImports(code);
      } catch (impErr) {
        console.warn("Import detector notice:", impErr);
      }
    }

    onStatusUpdate("Executing Python program...");

    // Setup stdout/stderr redirection and matplotlib plot capture
    await pyodide.runPythonAsync(`
import sys
import io
import base64

__stdout_capture__ = io.StringIO()
__stderr_capture__ = io.StringIO()
sys.stdout = __stdout_capture__
sys.stderr = __stderr_capture__

__captured_plots__ = []

try:
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt

    def __custom_show__(*args, **kwargs):
        for fignum in plt.get_fignums():
            fig = plt.figure(fignum)
            buf = io.BytesIO()
            fig.savefig(buf, format='png', bbox_inches='tight', dpi=100)
            buf.seek(0)
            __captured_plots__.append(base64.b64encode(buf.read()).decode('utf-8'))
        plt.close('all')

    plt.show = __custom_show__
except Exception:
    pass
`);

    // Run user code
    let execError = null;
    try {
      await pyodide.runPythonAsync(code);
    } catch (err) {
      execError = err;
    }

    // Flush any remaining active figures (e.g. if code didn't call plt.show())
    await pyodide.runPythonAsync(`
try:
    import matplotlib.pyplot as plt
    for fignum in plt.get_fignums():
        fig = plt.figure(fignum)
        buf = io.BytesIO()
        fig.savefig(buf, format='png', bbox_inches='tight', dpi=100)
        buf.seek(0)
        __captured_plots__.append(base64.b64encode(buf.read()).decode('utf-8'))
    plt.close('all')
except Exception:
    pass
`);

    // Retrieve stdout, stderr, and captured plots
    const stdout = await pyodide.runPythonAsync("__stdout_capture__.getvalue()");
    const stderr = await pyodide.runPythonAsync("__stderr_capture__.getvalue()");
    let plots = [];
    try {
      const plotsPy = await pyodide.runPythonAsync("__captured_plots__");
      plots = plotsPy.toJs ? plotsPy.toJs() : [];
    } catch (plotErr) {
      console.warn("Plot capture extraction notice:", plotErr);
    }

    // Reset std streams
    await pyodide.runPythonAsync(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`);

    if (execError) {
      const errorMsg = execError.message || String(execError);
      return {
        success: false,
        output: stdout,
        plots: plots || [],
        error: errorMsg
      };
    }

    const combinedOutput = (stdout + (stderr ? "\n" + stderr : "")).trim();
    return {
      success: true,
      output: combinedOutput || "(Program executed successfully with no console text output)",
      plots: plots || [],
      error: null
    };
  } catch (err) {
    return {
      success: false,
      output: "",
      plots: [],
      error: `Execution Error: ${err.message || String(err)}`
    };
  }
}
