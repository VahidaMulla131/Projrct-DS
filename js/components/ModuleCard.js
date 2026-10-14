/**
 * Reusable Modern Academic Module Card Component
 * 
 * Displays an individual module container with:
 * - Module Number badge (MODULE 1, MODULE 2, etc.)
 * - Visual status indicator
 * - Module Title
 * - Short available syllabus/CHO description
 * - Topics & PDF resources count chips
 * - Primary VIEW button opening the module details
 */

export function renderModuleCard(module) {
  return `
    <article class="card module-card" id="${module.id}" aria-label="Module ${module.moduleNumber}">
      <div class="module-card-top-row">
        <span class="module-number-badge">MODULE ${module.moduleNumber}</span>
        <span class="badge badge-academic">${module.status}</span>
      </div>

      <div class="module-card-body">
        <h3 class="module-title-text">${module.title}</h3>
        <p class="module-desc-snippet">${module.choSyllabus}</p>

        <div class="module-pills-row">
          <span class="module-mini-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            <span>CHO Handout</span>
          </span>
          <span class="module-mini-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
            <span>${module.topics.length} Topics</span>
          </span>
          <span class="module-mini-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            <span>PDF Study Material</span>
          </span>
        </div>
      </div>

      <div class="module-card-footer">
        <button type="button" class="btn btn-outline btn-sm view-module-btn" data-module-id="${module.id}" aria-label="View Module ${module.moduleNumber} details">
          <span>VIEW SYLLABUS</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </article>
  `;
}
