/**
 * Experiments Page (/experiments)
 * 
 * Contains:
 * - Heading: EXPERIMENTS
 * - Subtitle: Data Science Laboratory Experiments
 * - Exactly 10 clean academic experiment cards
 * - Experiments 4, 5, 6 with authentic sub-experiments
 * - Experiments 1-3, 7-10 with "Content will be added soon"
 * - [ ADD EXPERIMENT ] button opening controlled form modal
 * - [ VIEW MORE ] button navigating to /experiments/all
 */

import { getExperiments, addExperiment } from '../data/experimentsData.js';
import { renderExperimentCard } from '../components/ExperimentCard.js';
import { openModal, closeModal } from '../components/Modal.js';
import { router } from '../router.js';

export function renderExperimentsPage() {
  const experiments = getExperiments();
  const cardsHtml = experiments.map(exp => renderExperimentCard(exp)).join('');

  return `
    <div class="experiments-page-wrapper">
      <!-- Section Header -->
      <header class="section-header-row">
        <div class="section-title-wrap">
          <div class="header-pre-badge">
            <span class="badge badge-academic">LABORATORY PRACTICUM</span>
          </div>
          <h1 class="section-page-title">EXPERIMENTS</h1>
          <p class="section-subtitle">Data Science Laboratory Experiments & Interactive Python Computing Workbenches • Mohan Babu University</p>
        </div>

        <div class="section-actions">
          <button type="button" class="btn btn-secondary" id="btn-add-experiment" aria-label="Add new experiment">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>ADD EXPERIMENT</span>
          </button>

          <a href="/experiments/all" class="btn btn-primary" data-nav-link data-path="/experiments/all" id="btn-view-more-experiments" aria-label="View more experiments directory">
            <span>VIEW ALL DIRECTORY</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>
      </header>

      <!-- Status & Environment Notice Banner -->
      <div class="lab-env-notice-card">
        <div class="env-notice-left">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          <div>
            <strong>Interactive WebAssembly Execution:</strong> All 10 Experiments feature multi-program laboratory curricula with dedicated code editors and browser-based Python execution. Experiments 1–6 cover Pandas, Visualization, and Time Series. Experiments 7–10 cover Data Aggregation, Web Scraping/NLP, Customer Personality Analysis (Case Study 3), and Text Emotion Detection (Case Study 1).
          </div>
        </div>
        <div class="env-notice-right">
          <span class="badge badge-academic">Python 3.11 WASM</span>
        </div>
      </div>

      <!-- Experiments Grid (1 to 10) -->
      <div class="experiments-grid" id="experiments-list-grid">
        ${cardsHtml}
      </div>

      <!-- Bottom Actions -->
      <div class="experiments-bottom-actions">
        <button type="button" class="btn btn-secondary" id="btn-add-experiment-bottom" aria-label="Add new experiment">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>ADD EXPERIMENT</span>
        </button>

        <a href="/experiments/all" class="btn btn-primary" data-nav-link data-path="/experiments/all" id="btn-view-more-experiments-bottom" aria-label="View all experiments overview">
          <span>VIEW MORE EXPERIMENTS</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </div>
    </div>
  `;
}

export function initExperimentsPageEvents() {
  const addButtons = [
    document.getElementById('btn-add-experiment'),
    document.getElementById('btn-add-experiment-bottom')
  ].filter(Boolean);

  addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      openAddExperimentModal();
    });
  });
}

function openAddExperimentModal() {
  const nextNum = getExperiments().length + 1;

  const formHtml = `
    <form id="add-experiment-form" style="display: flex; flex-direction: column; gap: var(--space-4);">
      <div class="form-group-row">
        <label for="form-exp-number" class="form-label">Experiment Number</label>
        <input type="number" id="form-exp-number" class="form-input" value="${nextNum}" min="1" required>
      </div>

      <div class="form-group-row">
        <label for="form-exp-title" class="form-label">Experiment Title</label>
        <input type="text" id="form-exp-title" class="form-input" placeholder="e.g. Title to be added" required>
      </div>

      <div class="form-group-row">
        <label for="form-exp-aim" class="form-label">Aim & Objective</label>
        <textarea id="form-exp-aim" class="form-textarea" rows="2" placeholder="e.g. Actual aim will be added later." required></textarea>
      </div>

      <div class="form-group-row">
        <label for="form-exp-procedure" class="form-label">Procedure</label>
        <textarea id="form-exp-procedure" class="form-textarea" rows="3" placeholder="e.g. Actual procedure will be added later." required></textarea>
      </div>

      <div class="form-group-row">
        <label for="form-exp-lang" class="form-label">Programming Language</label>
        <select id="form-exp-lang" class="form-input">
          <option value="python" selected>Python 3</option>
          <option value="r">R (Future)</option>
        </select>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: var(--space-3); margin-top: var(--space-3);">
        <button type="button" class="btn btn-outline btn-sm" id="btn-cancel-modal">Cancel</button>
        <button type="submit" class="btn btn-primary btn-sm">Save Experiment</button>
      </div>
    </form>
  `;

  openModal({
    title: `Add Experiment ${nextNum}`,
    bodyHtml: formHtml
  });

  const form = document.getElementById('add-experiment-form');
  const cancelBtn = document.getElementById('btn-cancel-modal');

  if (cancelBtn) {
    cancelBtn.addEventListener('click', closeModal);
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const numVal = parseInt(document.getElementById('form-exp-number').value, 10);
      const titleVal = document.getElementById('form-exp-title').value.trim();
      const aimVal = document.getElementById('form-exp-aim').value.trim();
      const procVal = document.getElementById('form-exp-procedure').value.trim();
      const langVal = document.getElementById('form-exp-lang').value;

      addExperiment({
        experimentNumber: numVal,
        title: titleVal,
        aim: aimVal,
        procedure: procVal,
        language: langVal
      });

      closeModal();
      router.navigate('/experiments', false);
    });
  }
}
