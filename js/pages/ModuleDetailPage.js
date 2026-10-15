/**
 * Dedicated Module Detail Page (/modules/:id)
 * 
 * Provides:
 * 1. Module Title and Period Count (e.g. Module 1 — Introduction (9 periods))
 * 2. Official CHO Syllabus Topics (from Data_Science_CHO_Syllabus.docx)
 * 3. Dedicated Study Material Section with accurate file labels:
 *    - Word documents (.docx) clearly labelled as Word documents
 *    - PDF documents (.pdf) clearly labelled as PDFs
 * 4. View / Open Study Material Action:
 *    - Opens actual PDF in browser viewer or new tab
 *    - Provides built-in lecture notes reader for DOCX files
 * 5. Download Study Material Action with original file download
 * 6. Working back navigation, breadcrumbs, and previous/next module switcher
 */

import { modulesData, courseSummary } from '../data/modulesData.js';

export function renderModuleDetailPage(module) {
  const isDocx = module.studyMaterial.format === 'docx';
  const prevModule = modulesData.find(m => m.moduleNumber === module.moduleNumber - 1);
  const nextModule = modulesData.find(m => m.moduleNumber === module.moduleNumber + 1);

  // Topics numbered list
  const syllabusTopicsHtml = module.syllabusTopics.map((topic, index) => `
    <li class="module-syllabus-topic-item" style="padding: 10px 14px; background: var(--color-surface); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-sm); display: flex; align-items: baseline; gap: 10px;">
      <span style="font-weight: 700; color: var(--color-brand-blue); font-size: 0.8125rem; min-width: 24px;">${String(index + 1).padStart(2, '0')}.</span>
      <span style="font-size: 0.875rem; color: var(--color-text-main); line-height: 1.45;">${topic}</span>
    </li>
  `).join('');

  // Key Topics Covered
  const keyHighlightsHtml = module.studyMaterial.keyTopicsCovered.map(item => `
    <li style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 8px; font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.5;">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-blue)" stroke-width="2.5" style="flex-shrink:0; margin-top: 3px;">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${item}</span>
    </li>
  `).join('');

  // Study Material Viewer Block
  let viewerHtml = '';
  if (isDocx) {
    viewerHtml = `
      <div class="card docx-reader-card" id="docx-viewer-box" style="margin-top: var(--space-6); padding: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <div>
            <span class="badge badge-academic" style="margin-bottom: 4px;">Word Document (.docx) Notes Reader</span>
            <h4 style="margin: 0; font-size: 1.1rem; color: var(--color-primary);">${module.studyMaterial.fileName}</h4>
          </div>
          <span style="font-size: 0.8125rem; color: var(--color-text-muted);">Original Microsoft Word Source Document</span>
        </div>

        <div class="docx-reader-content" style="background: var(--color-surface-subtle); padding: 20px; border-radius: var(--radius-md); max-height: 480px; overflow-y: auto; border: 1px solid var(--color-border-subtle);">
          <div style="margin-bottom: 16px; padding: 12px 16px; background: var(--color-brand-blue-light); border-left: 4px solid var(--color-brand-blue); border-radius: 4px;">
            <strong style="color: var(--color-brand-blue); font-size: 0.875rem;">Document Overview:</strong>
            <p style="margin: 4px 0 0 0; font-size: 0.8125rem; color: var(--color-text-secondary);">
              This material is formatted as a native Microsoft Word Document (<strong>${module.studyMaterial.fileName}</strong>). Below are the core study chapters from the document. You can download the complete original .docx file below to edit or study offline.
            </p>
          </div>

          <h4 style="color: var(--color-primary); font-size: 1rem; margin-top: 14px; margin-bottom: 8px;">Curriculum Outline & Notes:</h4>
          <ul style="list-style: none; padding-left: 0;">
            ${keyHighlightsHtml}
          </ul>
        </div>
      </div>
    `;
  } else {
    viewerHtml = `
      <div class="card pdf-viewer-card" id="pdf-viewer-box" style="margin-top: var(--space-6); padding: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
          <div>
            <span class="badge badge-primary" style="margin-bottom: 4px;">PDF Document (.pdf) Viewer</span>
            <h4 style="margin: 0; font-size: 1.1rem; color: var(--color-primary);">${module.studyMaterial.fileName}</h4>
          </div>
          <a href="${module.studyMaterial.filePath}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <span>Open in Full Tab</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>

        <div style="border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--color-border-subtle); background: #525659; min-height: 520px;">
          <iframe 
            src="${module.studyMaterial.filePath}#toolbar=1&navpanes=1" 
            title="${module.studyMaterial.title}"
            style="width: 100%; height: 580px; border: none;"
          >
            <p style="padding: 20px; color: #fff;">
              Your browser does not support embedded PDFs. 
              <a href="${module.studyMaterial.filePath}" target="_blank" style="color: #38bdf8; text-decoration: underline;">Click here to download or open the PDF in a new tab</a>.
            </p>
          </iframe>
        </div>
      </div>
    `;
  }

  return `
    <div class="module-detail-page-container" style="max-width: 1100px; margin: 0 auto; padding-bottom: var(--space-12);">
      
      <!-- 1. Breadcrumbs Navigation -->
      <nav class="breadcrumbs" aria-label="Breadcrumb navigation" style="display: flex; align-items: center; gap: 8px; margin-bottom: var(--space-6); font-size: 0.8125rem; color: var(--color-text-muted); flex-wrap: wrap;">
        <a href="/" data-nav-link data-path="/" style="color: var(--color-brand-blue); text-decoration: none;">Home</a>
        <span class="crumb-separator">/</span>
        <a href="/modules" data-nav-link data-path="/modules" style="color: var(--color-brand-blue); text-decoration: none;">Modules</a>
        <span class="crumb-separator">/</span>
        <span class="current-crumb" style="color: var(--color-primary); font-weight: 600;">${module.title}</span>
      </nav>

      <!-- 2. Header & Quick Back Navigation -->
      <header class="card" style="padding: 28px; margin-bottom: var(--space-6); background: var(--color-surface); border: 1px solid var(--color-border-subtle);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 16px;">
          <div>
            <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-bottom: 8px;">
              <span class="badge badge-academic">MODULE ${module.moduleNumber}</span>
              <span class="badge badge-primary" style="font-weight: 700;">${module.periodsDisplay}</span>
              <span class="badge badge-academic">Curriculum: ${courseSummary.courseCode}</span>
            </div>
            <h1 style="font-size: 1.85rem; font-weight: 800; color: var(--color-primary); margin: 0 0 6px 0; line-height: 1.25;">
              ${module.title}
            </h1>
            <p style="margin: 0; font-size: 0.9375rem; color: var(--color-text-secondary);">
              Mohan Babu University (MBU) • Department of Data Science • ${module.periods} periods out of ${courseSummary.totalPeriods} total course periods
            </p>
          </div>

          <a href="/modules" data-nav-link data-path="/modules" class="btn btn-outline" style="display: inline-flex; align-items: center; gap: 6px;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
            <span>Back to All Modules</span>
          </a>
        </div>

        <!-- Progress Indicator across 45 Periods -->
        <div style="margin-top: 18px; padding-top: 16px; border-top: 1px solid var(--color-border-subtle); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.8125rem; color: var(--color-text-secondary);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span><strong>Instructional Periods:</strong> ${module.periods} Periods Allocated</span>
          </div>
          <div style="font-size: 0.8125rem; color: var(--color-text-muted);">
            Course Total: <strong>45 Periods</strong> (100% Curriculum Scope)
          </div>
        </div>
      </header>

      <!-- 3. Official CHO Syllabus Section -->
      <section class="card" aria-labelledby="cho-syllabus-heading" style="padding: 24px; margin-bottom: var(--space-6); background: var(--color-surface); border: 1px solid var(--color-border-subtle);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 32px; height: 32px; border-radius: 8px; background: var(--color-brand-blue-light); display: flex; align-items: center; justify-content: center; color: var(--color-brand-blue);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            </div>
            <div>
              <span style="font-size: 0.6875rem; font-weight: 800; color: var(--color-brand-blue); text-transform: uppercase; letter-spacing: 0.06em;">Official CHO Reference Document</span>
              <h2 id="cho-syllabus-heading" style="font-size: 1.2rem; font-weight: 700; color: var(--color-primary); margin: 0;">
                Official Course Handout (CHO) Syllabus
              </h2>
            </div>
          </div>
          <span class="badge badge-academic">${courseSummary.choReferenceDoc}</span>
        </div>

        <div style="background: var(--color-surface-subtle); padding: 16px 20px; border-radius: var(--radius-md); border-left: 4px solid var(--color-brand-blue); margin-bottom: 20px;">
          <span style="font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; color: var(--color-text-muted); display: block; margin-bottom: 4px;">Official Syllabus Text:</span>
          <p style="margin: 0; font-size: 0.9375rem; line-height: 1.6; color: var(--color-text-main);">
            ${module.choSyllabus}
          </p>
        </div>

        <div>
          <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-muted); display: block; margin-bottom: 10px;">
            Breakdown of ${module.syllabusTopics.length} Syllabus Topics:
          </span>
          <ul style="list-style: none; padding-left: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 10px; margin: 0;">
            ${syllabusTopicsHtml}
          </ul>
        </div>
      </section>

      <!-- 4. Study Material Section -->
      <section class="card" aria-labelledby="study-material-heading" style="padding: 24px; margin-bottom: var(--space-6); background: var(--color-surface); border: 1px solid var(--color-border-subtle);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 18px; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 16px;">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <span class="badge ${isDocx ? 'badge-academic' : 'badge-primary'}">${module.studyMaterial.fileType}</span>
              <span style="font-size: 0.8125rem; color: var(--color-text-muted);">Size: ${module.studyMaterial.fileSize}</span>
            </div>
            <h2 id="study-material-heading" style="font-size: 1.25rem; font-weight: 700; color: var(--color-primary); margin: 0 0 4px 0;">
              ${module.studyMaterial.title}
            </h2>
            <div style="font-size: 0.8125rem; font-family: var(--font-mono, monospace); color: var(--color-brand-blue);">
              File: ${module.studyMaterial.fileName}
            </div>
          </div>

          <!-- Action Buttons: View/Open & Download -->
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            ${isDocx ? `
              <button type="button" class="btn btn-primary" id="jump-to-viewer-btn" style="display: inline-flex; align-items: center; gap: 6px;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <span>View Document Notes</span>
              </button>
            ` : `
              <a href="${module.studyMaterial.filePath}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 6px;" aria-label="Open ${module.studyMaterial.fileName} in new browser tab">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                <span>Open PDF in Tab</span>
              </a>
            `}

            <a href="${module.studyMaterial.filePath}" download="${module.studyMaterial.fileName}" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 6px;" aria-label="Download original file ${module.studyMaterial.fileName}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span>Download ${module.studyMaterial.format.toUpperCase()} (${module.studyMaterial.fileSize})</span>
            </a>
          </div>
        </div>

        <p style="font-size: 0.9375rem; color: var(--color-text-secondary); line-height: 1.6; margin: 0 0 16px 0;">
          ${module.studyMaterial.description}
        </p>

        <div>
          <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-muted); display: block; margin-bottom: 8px;">
            Key Curriculum Takeaways & Topics:
          </span>
          <ul style="list-style: none; padding-left: 0; margin: 0;">
            ${keyHighlightsHtml}
          </ul>
        </div>

        <!-- Render Viewer (Embedded PDF or DOCX reader) -->
        ${viewerHtml}
      </section>

      <!-- 5. Bottom Navigation Bar (Previous / Next / Back) -->
      <footer style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-top: var(--space-8); padding-top: var(--space-4); border-top: 1px solid var(--color-border-subtle);">
        <div>
          ${prevModule ? `
            <a href="/modules/${prevModule.id}" data-nav-link data-path="/modules/${prevModule.id}" class="btn btn-outline btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
              <span>Previous: Module ${prevModule.moduleNumber}</span>
            </a>
          ` : `
            <span style="font-size: 0.8125rem; color: var(--color-text-muted);">First Module</span>
          `}
        </div>

        <a href="/modules" data-nav-link data-path="/modules" class="btn btn-secondary btn-sm">
          <span>All 5 Modules</span>
        </a>

        <div>
          ${nextModule ? `
            <a href="/modules/${nextModule.id}" data-nav-link data-path="/modules/${nextModule.id}" class="btn btn-outline btn-sm">
              <span>Next: Module ${nextModule.moduleNumber}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
          ` : `
            <span style="font-size: 0.8125rem; color: var(--color-text-muted);">Course Complete (45 Periods)</span>
          `}
        </div>
      </footer>

    </div>
  `;
}

export function initModuleDetailPageEvents(module) {
  // Jump to document viewer button for docx
  const jumpBtn = document.getElementById('jump-to-viewer-btn');
  if (jumpBtn) {
    jumpBtn.addEventListener('click', () => {
      const viewerBox = document.getElementById('docx-viewer-box');
      if (viewerBox) {
        viewerBox.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
