/**
 * Reusable Modern Academic Module Card Component
 * 
 * Displays an individual module container with:
 * - Module Number badge (MODULE 1, MODULE 2, etc.)
 * - Official period count badge (9 periods, 8 periods, 11 periods)
 * - Module Title (e.g. Module 1 — Introduction)
 * - Official CHO Syllabus snippet
 * - Study Material chip (Word Document or PDF Document)
 * - Primary VIEW MODULE & STUDY MATERIAL action button
 * - Direct DOWNLOAD STUDY MATERIAL action button
 */

export function renderModuleCard(module) {
  const isDocx = module.studyMaterial.format === 'docx';
  const badgeClass = isDocx ? 'badge-academic' : 'badge-primary';
  const fileIcon = isDocx ? `
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  ` : `
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="12" y1="18" x2="12" y2="12"></line>
      <line x1="9" y1="15" x2="15" y2="15"></line>
    </svg>
  `;

  return `
    <article class="card module-card" id="${module.id}" aria-label="${module.title}">
      <div class="module-card-top-row">
        <span class="module-number-badge">MODULE ${module.moduleNumber}</span>
        <span class="badge ${badgeClass}">${module.periodsDisplay}</span>
      </div>

      <div class="module-card-body">
        <h3 class="module-title-text">${module.title}</h3>
        <p class="module-desc-snippet">${module.choSyllabus}</p>

        <div class="module-pills-row">
          <span class="module-mini-pill" title="Official Course Handout">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            <span>CHO Syllabus</span>
          </span>
          <span class="module-mini-pill" title="${module.syllabusTopics.length} syllabus topics">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
            <span>${module.syllabusTopics.length} Topics</span>
          </span>
          <span class="module-mini-pill" title="${module.studyMaterial.fileType}">
            ${fileIcon}
            <span>${module.studyMaterial.fileType} (${module.studyMaterial.fileSize})</span>
          </span>
        </div>
      </div>

      <div class="module-card-footer" style="display: flex; gap: 8px; flex-wrap: wrap;">
        <a href="/modules/${module.id}" data-nav-link data-path="/modules/${module.id}" class="btn btn-primary btn-sm" style="flex: 1; min-width: 140px; justify-content: center;" aria-label="Open detail page for ${module.title}">
          <span>VIEW DETAIL</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </a>

        <a href="${module.studyMaterial.filePath}" download="${module.studyMaterial.fileName}" class="btn btn-outline btn-sm" style="display: inline-flex; align-items: center; gap: 4px;" title="Download ${module.studyMaterial.fileName}" aria-label="Download study material for Module ${module.moduleNumber}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          <span>Download</span>
        </a>

        <button type="button" class="btn btn-secondary btn-sm quick-view-module-btn" data-module-id="${module.id}" aria-label="Quick syllabus modal for ${module.title}">
          <span>Quick View</span>
        </button>
      </div>
    </article>
  `;
}
