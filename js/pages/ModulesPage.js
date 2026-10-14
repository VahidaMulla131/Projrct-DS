/**
 * Modules Page Foundation (/modules)
 * 
 * Contains:
 * - Heading: MODULES
 * - Subtitle: Data Science Subject Course Handout (CHO), Lecture Topics & Academic PDF Resources
 * - Cards for Module 1 through Module 5
 * - Each module has its own VIEW button opening modal detail
 * - ADD MODULE button
 * - VIEW MORE button
 */

import { modulesData } from '../data/modulesData.js';
import { renderModuleCard } from '../components/ModuleCard.js';
import { openModal } from '../components/Modal.js';

export function renderModulesPage() {
  const cardsHtml = modulesData.map(mod => renderModuleCard(mod)).join('');

  return `
    <div class="modules-page-wrapper">
      <!-- Page Header -->
      <header class="section-header-row">
        <div class="section-title-wrap">
          <div class="header-pre-badge">
            <span class="badge badge-academic">SYLLABUS & LECTURE HANDOUTS</span>
          </div>
          <h1 class="section-page-title">COURSE MODULES</h1>
          <p class="section-subtitle">Data Science Subject Course Handout (CHO), Lecture Topics & Academic PDF Resources • Mohan Babu University</p>
        </div>
        <div class="section-actions">
          <button type="button" class="btn btn-secondary" id="add-module-btn" aria-label="Add course module">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>ADD MODULE</span>
          </button>
          <button type="button" class="btn btn-primary" id="view-more-modules-btn" aria-label="View all modules consolidated">
            <span>VIEW MORE</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </header>

      <!-- Modules Academic Grid (1 to 5) -->
      <div class="modules-grid" id="modules-list-grid">
        ${cardsHtml}
      </div>
    </div>
  `;
}

export function initModulesPageEvents() {
  // Individual Module "VIEW" buttons
  const viewButtons = document.querySelectorAll('.view-module-btn');
  viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const moduleId = btn.getAttribute('data-module-id');
      const module = modulesData.find(m => m.id === moduleId);
      if (module) {
        showModuleDetailModal(module);
      }
    });
  });

  // ADD MODULE Button
  const addBtn = document.getElementById('add-module-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      openModal({
        title: 'Add New Course Module',
        bodyHtml: `
          <div class="academic-modal-box">
            <div class="modal-icon-header">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <h3 class="modal-box-title">Module Registration (Faculty Administration)</h3>
            <p class="modal-box-text">
              This institutional workflow enables authorized Department of Data Science faculty to register new syllabus units, attach official Course Handout (CHO) documentation, and link lecture slide decks.
            </p>
            <div class="badge badge-academic" style="margin-top: var(--space-2);">
              Academic Administration System
            </div>
          </div>
        `
      });
    });
  }

  // VIEW MORE Button
  const viewMoreBtn = document.getElementById('view-more-modules-btn');
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
      showAllModulesConsolidatedModal();
    });
  }
}

/**
 * Displays details for an individual module with the redesigned global styling
 */
function showModuleDetailModal(module) {
  const topicsListHtml = module.topics.map((t, idx) => `
    <li class="modal-topic-item">
      <span class="topic-index">${idx + 1}.</span>
      <span class="topic-title">${t}</span>
    </li>
  `).join('');

  const pdfsListHtml = module.pdfResources.map(pdf => `
    <li class="modal-pdf-item">
      <div class="pdf-info-left">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
        <span>${pdf.title}</span>
      </div>
      <span class="badge badge-academic">PDF Asset Pending</span>
    </li>
  `).join('');

  const bodyHtml = `
    <div class="modal-detail-wrapper">
      <div class="modal-detail-header">
        <span class="badge badge-primary">Module ${module.moduleNumber}</span>
        <h3 class="modal-detail-title">${module.title}</h3>
      </div>

      <div class="card modal-syllabus-card">
        <span class="modal-block-label">COURSE HANDOUT (CHO) / SYLLABUS:</span>
        <p class="modal-syllabus-text">${module.choSyllabus}</p>
      </div>

      <div class="modal-block">
        <span class="modal-block-label">LECTURE TOPICS COVERED:</span>
        <ul class="modal-topics-list">
          ${topicsListHtml}
        </ul>
      </div>

      <div class="modal-block">
        <span class="modal-block-label">PDF RESOURCES & STUDY MATERIALS:</span>
        <ul class="modal-pdfs-list">
          ${pdfsListHtml}
        </ul>
      </div>
    </div>
  `;

  openModal({
    title: `Module ${module.moduleNumber}: Syllabus & Resources`,
    bodyHtml
  });
}

/**
 * Displays all modules together with their CHO/syllabus information (VIEW MORE action)
 */
function showAllModulesConsolidatedModal() {
  const allModulesHtml = modulesData.map(mod => `
    <div class="all-modules-row">
      <div class="all-modules-row-header">
        <strong class="all-modules-row-title">Module ${mod.moduleNumber}: ${mod.title}</strong>
        <span class="badge badge-academic">CHO</span>
      </div>
      <p class="all-modules-row-desc">${mod.choSyllabus}</p>
    </div>
  `).join('');

  openModal({
    title: 'Complete Course Syllabus & Handout (CHO) Directory',
    bodyHtml: `
      <div class="modal-consolidated-wrapper">
        <p class="text-sm text-muted" style="margin-bottom: var(--space-4);">
          Consolidated syllabus directory containing all 5 course modules for Mohan Babu University Data Science Subject.
        </p>
        <div class="all-modules-scroll-list">
          ${allModulesHtml}
        </div>
      </div>
    `
  });
}
