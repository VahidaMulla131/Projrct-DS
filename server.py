"""
Custom Lightweight Python Development Server for Single-Page Application (SPA)
Serves static files and rewrites client-side routes to index.html for smooth SPA history routing.
"""

import http.server
import socketserver
import os
import sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

KNOWN_SPA_ROUTES = ["/modules", "/experiments", "/tools", "/about", "/resources", "/projects"]

class SPARequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Strip query string and fragments
        path = self.path.split("?")[0].split("#")[0]
        
        # Handle nested or root asset requests like /experiments/public/assets/... or /assets/...
        if "public/assets/" in path:
            asset_subpath = path.split("public/assets/")[1]
            self.path = "/public/assets/" + asset_subpath
            return super().do_GET()
        elif "assets/" in path:
            asset_subpath = path.split("assets/")[1]
            self.path = "/public/assets/" + asset_subpath
            return super().do_GET()
        elif "public/study-materials/" in path:
            asset_subpath = path.split("public/study-materials/")[1]
            self.path = "/public/study-materials/" + asset_subpath
            return super().do_GET()
        elif "study-materials/" in path:
            asset_subpath = path.split("study-materials/")[1]
            self.path = "/public/study-materials/" + asset_subpath
            return super().do_GET()
        
        # Check if the requested path corresponds to an existing file
        requested_file = os.path.join(DIRECTORY, path.lstrip("/"))
        
        # If it's a known client-side route, starts with /experiments or /modules, or doesn't exist and has no extension, serve index.html
        if (path in KNOWN_SPA_ROUTES or 
            path.startswith("/experiments") or 
            path.startswith("/modules") or 
            (not os.path.exists(requested_file) and "." not in os.path.basename(path))):
            self.path = "/index.html"
            
        return super().do_GET()

    def end_headers(self):
        # Add caching headers for local development
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

class ThreadingServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    daemon_threads = True
    allow_reuse_address = True

def run_server():
    with ThreadingServer(("", PORT), SPARequestHandler) as httpd:
        print(f"Data Science Digital Library Server running at http://localhost:{PORT}")
        sys.stdout.flush()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server...")

if __name__ == "__main__":
    run_server()
