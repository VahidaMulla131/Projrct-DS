/**
 * All Experiments Overview Page (/experiments/all)
 * 
 * Displays complete expanded overview showing all 10 experiments.
 * Accurately lists individual sub-experiments for Experiments 4, 5, and 6.
 */

import { getExperiments } from '../data/experimentsData.js';

export function renderExperimentsAllPage() {
  const experiments = getExperiments();

  const listItemsHtml = experiments.map(exp => {
    const hasSub = exp.subExperiments && exp.subExperiments.length > 0;

    return `
      <div class="card exp-all-row-card" id="all-exp-${exp.id}">
        <div class="exp-all-meta">
          <span class="experiment-number-badge">Experiment ${exp.experimentNumber}</span>
          ${hasSub ? `<span class="badge badge-academic">${exp.subExperiments.length} Programs</span>` : ''}
          <h3 class="exp-all-title">${exp.title}</h3>
        </div>

        <div class="exp-all-details-grid">
          <div class="exp-all-detail-block">
            <strong class="exp-all-label">AIM:</strong>
            <p class="text-sm text-muted">${exp.aim}</p>
          </div>
          <div class="exp-all-detail-block">
            <strong class="exp-all-label">PROCEDURE:</strong>
            <p class="text-sm text-muted">${exp.procedure}</p>
          </div>
        </div>

        ${hasSub ? `
          <div class="exp-all-subprograms-box">
            <strong class="text-xs text-muted" style="letter-spacing: 0.05em; text-transform: uppercase;">Laboratory Programs:</strong>
            <div class="exp-all-sub-list">
              ${exp.subExperiments.map(sub => `
                <a 
                  href="/experiments/${exp.id}/${sub.subId}" 
                  class="exp-all-sub-pill" 
                  data-nav-link 
                  data-path="/experiments/${exp.id}/${sub.subId}"
                >
                  <span class="sub-label-strong">${sub.label}</span>
                  <span>${sub.title.replace(/^.+?\s/, '')}</span>
                </a>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="exp-all-actions">
          <a href="/experiments/${exp.id}" class="btn btn-primary btn-sm" data-nav-link data-path="/experiments/${exp.id}">
            Open Experiment ${exp.experimentNumber} &rarr;
          </a>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="experiments-all-view">
      <div class="exp-top-nav-bar">
        <a href="/experiments" class="btn btn-outline btn-sm back-nav-btn" data-nav-link data-path="/experiments">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span>Back to Experiments</span>
        </a>
        <span class="badge badge-academic">All Experiments Overview</span>
      </div>

      <div class="section-header-row" style="margin-top: var(--space-4);">
        <div class="section-title-wrap">
          <h1 class="section-page-title">ALL EXPERIMENTS DIRECTORY</h1>
          <p class="section-subtitle">Consolidated view of all 10 laboratory practicals • Mohan Babu University</p>
        </div>
      </div>

      <div class="experiments-all-list">
        ${listItemsHtml}
      </div>
    </div>
  `;
}
