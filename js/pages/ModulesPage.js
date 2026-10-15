/**
 * Modules Page (/modules)
 * 
 * Displays:
 * - 5 Modules with Official Titles and Period Counts:
 *   1. Module 1 — Introduction (9 periods)
 *   2. Module 2 — Data Extraction (9 periods)
 *   3. Module 3 — Data Visualization (8 periods)
 *   4. Module 4 — Statistical Thinking (11 periods)
 *   5. Module 5 — Time Series Analysis and Predictive Modeling (8 periods)
 * - Total: 45 Periods
 * - Official CHO Syllabus from Data_Science_CHO_Syllabus.docx
 * - Connected Study Materials (DOCX and PDF files)
 * - Navigation to dedicated detail pages and consolidated syllabus modal
 */

import { modulesData, courseSummary } from '../data/modulesData.js';
import { renderModuleCard } from '../components/ModuleCard.js';
import { openModal } from '../components/Modal.js';
import { router } from '../router.js';

export function renderModulesPage() {
  const cardsHtml = modulesData.map(mod => renderModuleCard(mod)).join('');

  return `
    <div class="modules-page-wrapper">
      <!-- Page Header -->
      <header class="section-header-row">
        <div class="section-title-wrap">
          <div class="header-pre-badge">
            <span class="badge badge-academic">OFFICIAL SYLLABUS • ${courseSummary.totalPeriods} PERIODS TOTAL</span>
          </div>
          <h1 class="section-page-title">COURSE MODULES</h1>
          <p class="section-subtitle">Data Science Subject Course Handout (CHO), Lecture Units & Verified Study Materials • Mohan Babu University</p>
        </div>
        <div class="section-actions">
          <a href="${courseSummary.choReferencePath}" download="${courseSummary.choReferenceDoc}" class="btn btn-secondary" aria-label="Download official CHO Syllabus">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>OFFICIAL CHO (DOCX)</span>
          </a>
          <button type="button" class="btn btn-primary" id="view-more-modules-btn" aria-label="View all modules consolidated">
            <span>VIEW COMPLETE SYLLABUS</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </header>

      <!-- Course Curriculum Overview Banner -->
      <div class="card course-curriculum-overview-banner" style="margin-bottom: var(--space-6); padding: 18px 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <div style="width: 44px; height: 44px; border-radius: 10px; background-color: var(--color-brand-blue-light); border: 1px solid var(--color-brand-blue-border); display: flex; align-items: center; justify-content: center; color: var(--color-brand-blue); flex-shrink: 0;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <div>
            <div style="font-weight: 700; font-size: 1rem; color: var(--color-primary); margin-bottom: 2px;">
              Data Science Academic Curriculum (Course Code: ${courseSummary.courseCode})
            </div>
            <div style="font-size: 0.8125rem; color: var(--color-text-secondary);">
              Mohan Babu University (MBU) • Total Instructional Duration: <strong>${courseSummary.totalPeriods} Lecture Periods</strong> across 5 Modules
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <div class="module-mini-pill" style="font-size: 0.8125rem; padding: 6px 12px;">
            <strong>Module 1:</strong>&nbsp;9 periods
          </div>
          <div class="module-mini-pill" style="font-size: 0.8125rem; padding: 6px 12px;">
            <strong>Module 2:</strong>&nbsp;9 periods
          </div>
          <div class="module-mini-pill" style="font-size: 0.8125rem; padding: 6px 12px;">
            <strong>Module 3:</strong>&nbsp;8 periods
          </div>
          <div class="module-mini-pill" style="font-size: 0.8125rem; padding: 6px 12px;">
            <strong>Module 4:</strong>&nbsp;11 periods
          </div>
          <div class="module-mini-pill" style="font-size: 0.8125rem; padding: 6px 12px;">
            <strong>Module 5:</strong>&nbsp;8 periods
          </div>
          <div class="badge badge-primary" style="font-weight: 700; padding: 6px 12px;">
            Total: 45 Periods
          </div>
        </div>
      </div>

      <!-- Modules Academic Grid (1 to 5) -->
      <div class="modules-grid" id="modules-list-grid">
        ${cardsHtml}
      </div>
    </div>
  `;
}

export function initModulesPageEvents() {
  // Quick View syllabus modal buttons
  const quickButtons = document.querySelectorAll('.quick-view-module-btn');
  quickButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const moduleId = btn.getAttribute('data-module-id');
      const module = modulesData.find(m => m.id === moduleId);
      if (module) {
        showModuleQuickModal(module);
      }
    });
  });

  // VIEW COMPLETE SYLLABUS Button
  const viewMoreBtn = document.getElementById('view-more-modules-btn');
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
      showAllModulesConsolidatedModal();
    });
  }
}

/**
 * Displays quick syllabus modal for an individual module
 */
function showModuleQuickModal(module) {
  const isDocx = module.studyMaterial.format === 'docx';
  const topicsListHtml = module.syllabusTopics.map((t, idx) => `
    <li class="modal-topic-item">
      <span class="topic-index">${idx + 1}.</span>
      <span class="topic-title">${t}</span>
    </li>
  `).join('');

  const bodyHtml = `
    <div class="modal-detail-wrapper">
      <div class="modal-detail-header">
        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
          <span class="badge badge-primary">Module ${module.moduleNumber}</span>
          <span class="badge badge-academic">${module.periodsDisplay}</span>
        </div>
        <h3 class="modal-detail-title" style="margin-top: 6px;">${module.title}</h3>
      </div>

      <div class="card modal-syllabus-card">
        <span class="modal-block-label">OFFICIAL CHO SYLLABUS:</span>
        <p class="modal-syllabus-text">${module.choSyllabus}</p>
      </div>

      <div class="modal-block">
        <span class="modal-block-label">SYLLABUS TOPICS COVERED (${module.syllabusTopics.length} TOPICS):</span>
        <ul class="modal-topics-list">
          ${topicsListHtml}
        </ul>
      </div>

      <div class="modal-block">
        <span class="modal-block-label">ATTACHED STUDY MATERIAL:</span>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--color-surface-subtle); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-sm); flex-wrap: wrap; gap: 8px;">
          <div>
            <div style="font-weight: 600; font-size: 0.875rem; color: var(--color-primary);">${module.studyMaterial.fileName}</div>
            <span class="badge ${isDocx ? 'badge-academic' : 'badge-primary'}" style="margin-top: 4px;">${module.studyMaterial.fileType} (${module.studyMaterial.fileSize})</span>
          </div>

          <div style="display: flex; gap: 8px;">
            <a href="/modules/${module.id}" data-nav-link data-path="/modules/${module.id}" class="btn btn-primary btn-sm modal-close-trigger-link">
              <span>Open Detail Page</span>
            </a>
            <a href="${module.studyMaterial.filePath}" download="${module.studyMaterial.fileName}" class="btn btn-outline btn-sm">
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  openModal({
    title: `${module.title} (${module.periodsDisplay})`,
    bodyHtml
  });

  // Attach router intercept to links inside modal
  const link = document.querySelector('.modal-close-trigger-link');
  if (link) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const path = link.getAttribute('data-path');
      const closeBtn = document.getElementById('modal-close-btn');
      if (closeBtn) closeBtn.click();
      router.navigate(path);
    });
  }
}

/**
 * Displays all 5 modules together with their CHO syllabus text (VIEW COMPLETE SYLLABUS action)
 */
function showAllModulesConsolidatedModal() {
  const allModulesHtml = modulesData.map(mod => `
    <div class="all-modules-row" style="margin-bottom: 14px; padding: 18px; border-radius: var(--radius-md); background: var(--color-surface); border: 1px solid var(--color-border-subtle);">
      <div class="all-modules-row-header" style="margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px;">
        <strong class="all-modules-row-title" style="font-size: 1.05rem; color: var(--color-primary);">
          ${mod.title}
        </strong>
        <span class="badge badge-academic" style="font-weight: 700;">${mod.periodsDisplay}</span>
      </div>

      <p class="all-modules-row-desc" style="font-size: 0.875rem; line-height: 1.55; color: var(--color-text-secondary); margin-bottom: 12px;">
        ${mod.choSyllabus}
      </p>

      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; border-top: 1px solid var(--color-border-subtle); padding-top: 10px;">
        <span style="font-size: 0.75rem; color: var(--color-text-muted);">
          Study File: <strong>${mod.studyMaterial.fileName}</strong> (${mod.studyMaterial.fileType})
        </span>

        <div style="display: flex; gap: 6px;">
          <a href="/modules/${mod.id}" data-nav-link data-path="/modules/${mod.id}" class="btn btn-outline btn-sm modal-nav-link">
            <span>View Detail Page</span>
          </a>
          <a href="${mod.studyMaterial.filePath}" download="${mod.studyMaterial.fileName}" class="btn btn-secondary btn-sm">
            <span>Download</span>
          </a>
        </div>
      </div>
    </div>
  `).join('');

  openModal({
    title: 'Complete Course Syllabus & Handout (CHO) Directory • 45 Periods Total',
    bodyHtml: `
      <div class="modal-consolidated-wrapper">
        <div class="card" style="padding: 14px 18px; margin-bottom: var(--space-4); background-color: var(--color-brand-blue-light); border: 1px solid var(--color-brand-blue-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <div>
            <div style="font-weight: 700; color: var(--color-brand-blue); font-size: 0.9375rem;">Mohan Babu University • Department of Data Science</div>
            <div style="font-size: 0.8125rem; color: var(--color-text-secondary);">Course Handout Reference: <strong>${courseSummary.choReferenceDoc}</strong> • 5 Modules • 45 Total Periods</div>
          </div>
          <div style="display: flex; gap: 8px;">
            <a href="${courseSummary.choReferencePath}" download="${courseSummary.choReferenceDoc}" class="btn btn-secondary btn-sm">
              <span>Download CHO (.docx)</span>
            </a>
            <span class="badge badge-primary" style="font-weight: 700; display: inline-flex; align-items: center;">Total: 45 Periods</span>
          </div>
        </div>

        <div class="all-modules-scroll-list" style="max-height: 480px; overflow-y: auto;">
          ${allModulesHtml}
        </div>
      </div>
    `
  });

  // Attach router intercept for links in modal
  document.querySelectorAll('.modal-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const path = link.getAttribute('data-path');
      const closeBtn = document.getElementById('modal-close-btn');
      if (closeBtn) closeBtn.click();
      router.navigate(path);
    });
  });
}
