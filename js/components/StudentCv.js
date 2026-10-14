/**
 * Reusable Student CV Component
 * 
 * Displays the real uploaded student CV (public/assets/cv.pdf) in a professional viewer:
 * - Direct "Open CV" external viewing button
 * - "Download CV" action button
 * - Embedded PDF viewer with clean fallback
 * - Strictly preserves the uploaded document without converting or rewriting contents.
 */

import { studentData } from '../data/studentData.js';

export function renderStudentCv(data = studentData.cv) {
  return `
    <article class="cv-document-wrapper" role="region" aria-label="Student Curriculum Vitae">
      <!-- CV Top Action Bar -->
      <div class="cv-action-bar">
        <div class="cv-title-info">
          <h2 class="cv-document-title">${data.title}</h2>
          <span class="cv-file-meta">PDF Document • Mohan Babu University</span>
        </div>

        <div class="cv-buttons-group">
          <a href="${data.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" id="open-cv-btn" title="Open CV in a new browser tab" aria-label="Open CV in new tab">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>Open CV</span>
          </a>

          <a href="${data.pdfUrl}" download="Mulla_Vahida_CV.pdf" class="btn btn-outline btn-sm" id="download-cv-btn" title="Download CV PDF" aria-label="Download CV PDF">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Download</span>
          </a>
        </div>
      </div>

      <!-- Embedded Professional PDF Viewer -->
      <div class="cv-viewer-container">
        <iframe 
          src="${data.pdfUrl}#toolbar=1&navpanes=0&scrollbar=1" 
          class="cv-pdf-frame" 
          title="Student Curriculum Vitae - ${studentData.name}"
          loading="lazy">
          <p>
            Your browser does not support inline PDF viewing. 
            <a href="${data.pdfUrl}" target="_blank" rel="noopener noreferrer">Click here to open the CV directly</a>.
          </p>
        </iframe>
      </div>
    </article>
  `;
}
