/**
 * Reusable Code Editor & Execution Console Component
 * 
 * Features:
 * - Line numbers gutter synced with editable code
 * - Tab key indentation handling (4 spaces)
 * - RUN button with animated loading state
 * - RESET button restoring original experiment code
 * - CLEAR OUTPUT button
 * - Output console displaying text output and generated Matplotlib/Seaborn visualizations
 * - Clear execution error reporting
 */

import { runPythonCode } from '../services/pythonRunner.js';

export function renderCodeEditor(experiment) {
  const initialCode = experiment.code || experiment.defaultCode || "";
  const linesCount = initialCode.split("\n").length;
  const lineNumbersHtml = Array.from({ length: linesCount }, (_, i) => `<span>${i + 1}</span>`).join("");

  return `
    <div class="code-editor-workbench" id="editor-workbench-${experiment.id}">
      <!-- Editor Header Toolbar -->
      <div class="editor-toolbar">
        <div class="editor-file-info">
          <span class="editor-file-badge">Python 3</span>
          <span class="editor-file-name">experiment_${experiment.experimentNumber}.py</span>
        </div>

        <div class="editor-actions-group">
          <button type="button" class="btn btn-secondary btn-sm" id="btn-reset-code" title="Reset code to original experiment default">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path>
            </svg>
            <span>RESET</span>
          </button>

          <button type="button" class="btn btn-primary btn-sm" id="btn-run-code" title="Execute Python code in browser sandbox">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span id="run-btn-label">RUN</span>
          </button>
        </div>
      </div>

      <!-- Editor Code Canvas (Line numbers + editable textarea) -->
      <div class="editor-canvas">
        <div class="editor-line-numbers" id="editor-lines" aria-hidden="true">
          ${lineNumbersHtml}
        </div>
        <textarea 
          class="editor-textarea" 
          id="editor-code-input" 
          spellcheck="false" 
          autocomplete="off" 
          autocorrect="off" 
          autocapitalize="off"
          aria-label="Python Code Editor"
        >${initialCode}</textarea>
      </div>

      <!-- Output Console Area -->
      <div class="output-console-box">
        <div class="output-console-header">
          <div class="output-header-left">
            <span class="output-console-title">OUTPUT CONSOLE</span>
            <span class="output-status-indicator" id="output-status">Ready</span>
          </div>
          <button type="button" class="btn-console-clear" id="btn-clear-output" title="Clear console output">
            Clear
          </button>
        </div>
        <div class="output-console-body" id="console-output" role="region" aria-live="polite">
          <span class="output-placeholder-text">Click [RUN] to execute the Python program in the browser WebAssembly environment.</span>
        </div>
      </div>
    </div>
  `;
}

export function initCodeEditorEvents(experiment) {
  const textarea = document.getElementById("editor-code-input");
  const lineNumbers = document.getElementById("editor-lines");
  const runBtn = document.getElementById("btn-run-code");
  const runBtnLabel = document.getElementById("run-btn-label");
  const resetBtn = document.getElementById("btn-reset-code");
  const clearBtn = document.getElementById("btn-clear-output");
  const consoleOutput = document.getElementById("console-output");
  const statusIndicator = document.getElementById("output-status");

  if (!textarea || !lineNumbers) return;

  // Update line numbers
  function updateLineNumbers() {
    const linesCount = textarea.value.split("\n").length;
    lineNumbers.innerHTML = Array.from({ length: linesCount }, (_, i) => `<span>${i + 1}</span>`).join("");
    // Also save in state so navigating away and back preserves edits
    experiment.code = textarea.value;
  }

  // Synced scroll
  textarea.addEventListener("scroll", () => {
    lineNumbers.scrollTop = textarea.scrollTop;
  });

  textarea.addEventListener("input", updateLineNumbers);

  // Tab key indentation support (inserts 4 spaces)
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      textarea.value = textarea.value.substring(0, start) + "    " + textarea.value.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 4;
      updateLineNumbers();
    }
  });

  // RUN Button Click
  if (runBtn) {
    runBtn.addEventListener("click", async () => {
      const code = textarea.value;

      // Validation
      if (!code.trim()) {
        statusIndicator.textContent = "Validation Error";
        statusIndicator.className = "output-status-indicator error";
        consoleOutput.innerHTML = `<span class="output-error-text">Execution Error: Program code cannot be empty. Please enter Python code to run.</span>`;
        return;
      }

      // Loading state
      runBtn.disabled = true;
      runBtn.classList.add("loading");
      runBtnLabel.textContent = "Running...";
      statusIndicator.textContent = "Executing...";
      statusIndicator.className = "output-status-indicator running";
      consoleOutput.innerHTML = `<div class="output-loading-text"><span class="spinner-dot"></span> <span id="status-text-live">Executing in WebAssembly Python sandbox...</span></div>`;

      const statusTextLive = document.getElementById("status-text-live");

      // Execute code
      const result = await runPythonCode(code, (status) => {
        statusIndicator.textContent = status;
        if (statusTextLive) {
          statusTextLive.textContent = status;
        }
      });

      // Restore button
      runBtn.disabled = false;
      runBtn.classList.remove("loading");
      runBtnLabel.textContent = "RUN";

      // Display result
      if (result.success) {
        statusIndicator.textContent = "Success";
        statusIndicator.className = "output-status-indicator success";

        let html = "";
        if (result.output) {
          html += `<pre class="output-success-text">${escapeHtml(result.output)}</pre>`;
        }

        // Render generated visualizations if present
        if (result.plots && result.plots.length > 0) {
          html += `<div class="output-plots-container">`;
          html += `<div class="output-plots-header">`;
          html += `<span class="plots-badge">${result.plots.length} Visualization Figure${result.plots.length > 1 ? 's' : ''} Generated</span>`;
          html += `</div>`;
          html += `<div class="output-plots-grid">`;
          result.plots.forEach((b64, idx) => {
            html += `
              <div class="output-plot-card">
                <div class="output-plot-caption">Figure ${idx + 1}</div>
                <img src="data:image/png;base64,${b64}" alt="Generated Figure ${idx + 1}" class="output-plot-image" />
              </div>
            `;
          });
          html += `</div></div>`;
        }

        consoleOutput.innerHTML = html;
      } else {
        statusIndicator.textContent = "Execution Error";
        statusIndicator.className = "output-status-indicator error";

        let outHtml = "";
        if (result.output) {
          outHtml += `<pre class="output-stdout-text">${escapeHtml(result.output)}</pre>\n`;
        }
        outHtml += `<div class="output-error-block">
          <div class="output-error-header"><strong>Execution Error:</strong></div>
          <pre class="output-error-text">${escapeHtml(result.error)}</pre>
        </div>`;
        consoleOutput.innerHTML = outHtml;
      }
    });
  }

  // RESET Button Click
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      textarea.value = experiment.defaultCode;
      experiment.code = experiment.defaultCode;
      updateLineNumbers();
      statusIndicator.textContent = "Reset to Default";
      statusIndicator.className = "output-status-indicator";
      consoleOutput.innerHTML = `<span class="output-placeholder-text">Code has been reset to original experiment specifications.</span>`;
    });
  }

  // CLEAR OUTPUT Button Click
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      consoleOutput.innerHTML = `<span class="output-placeholder-text">Console output cleared.</span>`;
      statusIndicator.textContent = "Ready";
      statusIndicator.className = "output-status-indicator";
    });
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
