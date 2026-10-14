/**
 * Individual Experiment & Sub-Experiment Page (/experiments/:id and /experiments/:id/:subId)
 * 
 * Supports:
 * 1. Dedicated Sub-Experiment Detail Page (/experiments/:id/:subId):
 *    - Renders ONLY the selected sub-experiment (e.g. 4(a), 5(c), 6(b)).
 *    - Back to Experiment Hub link.
 *    - Sub-experiment switcher pill navigation (e.g. 4(a) | 4(b) | 4(c)).
 *    - Dedicated Aim.
 *    - Dedicated Procedure.
 *    - Dedicated Code Editor (Program) with isolated RUN and RESET for this sub-experiment.
 *    - Dedicated Output Console.
 *    - Dedicated Result.
 * 
 * 2. Experiment Hub Page (/experiments/:id):
 *    - For experiments with sub-experiments (Exp 4, 5, 6):
 *      Displays Experiment title, overall Aim, and distinct selectable cards
 *      for every sub-experiment (4(a), 4(b), etc.).
 *    - For single/placeholder experiments (1-3, 7-10):
 *      Displays standard single workbench.
 */

import { getExperimentById, getSubExperiment } from '../data/experimentsData.js';
import { renderCodeEditor, initCodeEditorEvents } from '../components/CodeEditor.js';

export function renderIndividualExperimentPage(experimentId, subId = null) {
  const experiment = getExperimentById(experimentId);

  if (!experiment) {
    return renderNotFound(
      'Experiment Not Found',
      `The requested experiment ID "${escapeHtml(experimentId)}" could not be located in the laboratory directory.`,
      '/experiments',
      'Return to Experiments Directory'
    );
  }

  // Case 1: Sub-experiment route (/experiments/:id/:subId)
  if (subId) {
    const subExp = getSubExperiment(experimentId, subId);
    if (!subExp) {
      return renderNotFound(
        'Sub-Experiment Not Found',
        `Sub-experiment "${escapeHtml(subId)}" was not found in Experiment ${experiment.experimentNumber} (${escapeHtml(experiment.title)}).`,
        `/experiments/${experiment.id}`,
        `Return to Experiment ${experiment.experimentNumber}`
      );
    }
    return renderDedicatedSubExperimentView(experiment, subExp);
  }

  // Case 2: Experiment Hub for experiments with multiple sub-experiments (Exp 4, 5, 6)
  if (experiment.subExperiments && experiment.subExperiments.length > 0) {
    return renderExperimentHubView(experiment);
  }

  // Case 3: Single experiment workbench (Exp 1-3, 7-10 placeholders)
  return renderSingleExperimentWorkbench(experiment);
}

/**
 * Dedicated Sub-Experiment View (/experiments/:id/:subId)
 * Shows ONLY the selected sub-experiment's Title, Aim, Procedure, Code, Output, and Result.
 */
function renderDedicatedSubExperimentView(experiment, subExp) {
  // Ensure subExp has editor-compatible identifier and label
  subExp.id = subExp.id || `${experiment.id}-${subExp.subId}`;
  subExp.experimentNumber = subExp.label;

  // Build sibling switcher pills
  const siblingPillsHtml = experiment.subExperiments.map(sibling => {
    const isActive = sibling.subId.toLowerCase() === subExp.subId.toLowerCase();
    return `
      <a 
        href="/experiments/${experiment.id}/${sibling.subId}" 
        class="subexp-nav-pill ${isActive ? 'active' : ''}" 
        data-nav-link 
        data-path="/experiments/${experiment.id}/${sibling.subId}"
        aria-current="${isActive ? 'page' : 'false'}"
        title="${escapeHtml(sibling.title)}"
      >
        <span class="subexp-pill-label">${escapeHtml(sibling.label)}</span>
        <span class="subexp-pill-name">${escapeHtml(sibling.title.replace(/^.+?\s/, ''))}</span>
      </a>
    `;
  }).join('');

  return `
    <div class="individual-experiment-view sub-experiment-view" id="subexp-view-${subExp.id}">
      <!-- Breadcrumb Navigation & Top Action Bar -->
      <div class="exp-top-nav-bar">
        <a href="/experiments/${experiment.id}" class="btn btn-outline btn-sm back-nav-btn" data-nav-link data-path="/experiments/${experiment.id}" id="back-to-exp-hub-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span>Back to Experiment ${experiment.experimentNumber}</span>
        </a>

        <div class="exp-breadcrumb-trail" aria-label="Breadcrumb">
          <a href="/experiments" class="breadcrumb-link" data-nav-link data-path="/experiments">Experiments</a>
          <span class="breadcrumb-sep">/</span>
          <a href="/experiments/${experiment.id}" class="breadcrumb-link" data-nav-link data-path="/experiments/${experiment.id}">Exp ${experiment.experimentNumber}</a>
          <span class="breadcrumb-sep">/</span>
          <span class="breadcrumb-current">${escapeHtml(subExp.label)}</span>
        </div>
      </div>

      <!-- Sibling Sub-Experiments Switcher Bar -->
      <div class="subexp-switcher-container" aria-label="Sub-experiments navigation">
        <div class="subexp-switcher-header">
          <span class="subexp-switcher-label">PROGRAMS IN EXPERIMENT ${experiment.experimentNumber}:</span>
        </div>
        <nav class="subexp-pills-track">
          ${siblingPillsHtml}
        </nav>
      </div>

      <!-- Sub-Experiment Header Banner -->
      <header class="exp-header-banner subexp-banner">
        <div class="subexp-header-meta">
          <span class="exp-label-badge">PROGRAM ${escapeHtml(subExp.label)}</span>
          <span class="exp-parent-badge">Experiment ${experiment.experimentNumber}: ${escapeHtml(experiment.title)}</span>
        </div>
        <h1 class="exp-main-title">${escapeHtml(subExp.title)}</h1>
        <p class="exp-subtitle-text">Mohan Babu University • Data Science Laboratory Curriculum</p>
      </header>

      ${
        subExp.question ? `
        <!-- QUESTION / USE-CASE Section (shown when a practical question exists) -->
        <section class="card exp-spec-card exp-question-section" aria-labelledby="question-heading-${subExp.id}" style="margin-bottom: var(--space-6);">
          <div class="exp-section-header">
            <h2 class="exp-section-title" id="question-heading-${subExp.id}">PRACTICAL QUESTION</h2>
          </div>
          <div class="exp-spec-content">
            <div class="exp-procedure-formatted">${formatProcedure(subExp.question)}</div>
          </div>
        </section>
        ` : ''
      }

      <!-- Specifications Grid (AIM & PROCEDURE) -->
      <div class="exp-specifications-container">
        <!-- AIM Section -->
        <section class="card exp-spec-card" aria-labelledby="aim-heading-${subExp.id}">
          <div class="exp-section-header">
            <h2 class="exp-section-title" id="aim-heading-${subExp.id}">AIM</h2>
          </div>
          <div class="exp-spec-content">
            <p class="exp-content-text">
              ${escapeHtml(subExp.aim)}
            </p>
          </div>
        </section>

        <!-- PROCEDURE Section -->
        <section class="card exp-spec-card" aria-labelledby="procedure-heading-${subExp.id}">
          <div class="exp-section-header">
            <h2 class="exp-section-title" id="procedure-heading-${subExp.id}">PROCEDURE</h2>
          </div>
          <div class="exp-spec-content">
            <div class="exp-procedure-formatted">${formatProcedure(subExp.procedure)}</div>
          </div>
        </section>
      </div>

      <!-- PROGRAM (Dedicated Code Editor & Output Console for THIS sub-experiment) -->
      <section class="exp-program-section" aria-label="Program Execution Workbench">
        <div class="exp-section-header-program">
          <div class="program-title-group">
            <h2 class="exp-section-title">PROGRAM: ${escapeHtml(subExp.title)}</h2>
            <span class="text-xs text-muted">Dedicated Python 3 execution sandbox for Program ${escapeHtml(subExp.label)}</span>
          </div>
          <span class="badge badge-accent">Isolated Workspace</span>
        </div>

        ${renderCodeEditor(subExp)}
      </section>

      <!-- RESULT Section -->
      <section class="card exp-spec-card exp-result-section" aria-labelledby="result-heading-${subExp.id}">
        <div class="exp-section-header">
          <h2 class="exp-section-title" id="result-heading-${subExp.id}">RESULT</h2>
        </div>
        <div class="exp-spec-content">
          <p class="exp-content-text">
            ${escapeHtml(subExp.result)}
          </p>
        </div>
      </section>
    </div>
  `;
}

/**
 * Experiment Hub View (/experiments/:id)
 * For experiments with sub-experiments (Exp 4, 5, 6).
 * Presents clean overview with selectable sub-experiment cards.
 */
function renderExperimentHubView(experiment) {
  const subCardsHtml = experiment.subExperiments.map(sub => `
    <article class="card subexp-selection-card" id="subexp-card-${experiment.id}-${sub.subId}">
      <div class="subexp-card-header">
        <span class="subexp-num-badge">${escapeHtml(sub.label)}</span>
        <span class="badge badge-academic">Python 3</span>
      </div>
      <div class="subexp-card-body">
        <h3 class="subexp-card-title">${escapeHtml(sub.title)}</h3>
        <p class="subexp-card-aim"><strong>Aim:</strong> ${escapeHtml(sub.aim)}</p>
      </div>
      <div class="subexp-card-footer">
        <a 
          href="/experiments/${experiment.id}/${sub.subId}" 
          class="btn btn-primary btn-sm subexp-open-btn" 
          data-nav-link 
          data-path="/experiments/${experiment.id}/${sub.subId}"
          aria-label="Open sub-experiment ${sub.label}"
        >
          <span>Open ${escapeHtml(sub.label)} Workbench</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </div>
    </article>
  `).join('');

  return `
    <div class="individual-experiment-view exp-hub-view" id="exp-hub-${experiment.id}">
      <!-- Top Navigation -->
      <div class="exp-top-nav-bar">
        <a href="/experiments" class="btn btn-outline btn-sm back-nav-btn" data-nav-link data-path="/experiments" id="back-to-experiments-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span>Back to Experiments</span>
        </a>
        <span class="badge badge-academic">Data Science Laboratory</span>
      </div>

      <!-- Experiment Main Header Banner -->
      <header class="exp-header-banner">
        <span class="exp-label-badge">EXPERIMENT ${experiment.experimentNumber}</span>
        <h1 class="exp-main-title">${escapeHtml(experiment.title)}</h1>
        <p class="exp-subtitle-text">Mohan Babu University • Subject Code Laboratory Curriculum</p>
      </header>

      <!-- Experiment Scope Overview Card -->
      <section class="card exp-overview-card" style="margin-bottom: var(--space-8); padding: var(--space-6);">
        <div class="exp-section-header">
          <h2 class="exp-section-title">EXPERIMENT OVERVIEW & AIM</h2>
        </div>
        <p class="exp-content-text" style="margin-bottom: var(--space-4);">
          ${escapeHtml(experiment.aim)}
        </p>
        <div class="academic-callout-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <div>
            <strong>Laboratory Organization:</strong> This experiment comprises <strong>${experiment.subExperiments.length} distinct laboratory programs</strong>. 
            Each program has a dedicated isolated page with its own independent code editor, interactive browser execution, output display, and result analysis.
          </div>
        </div>
      </section>

      <!-- Sub-Experiments Selection Directory -->
      <section class="subexp-directory-section" aria-label="Sub-experiments Directory">
        <div class="section-title-wrap" style="margin-bottom: var(--space-6);">
          <h2 class="section-page-title" style="font-size: var(--font-xl);">SELECT A SUB-EXPERIMENT</h2>
          <p class="section-subtitle">Choose any program below to launch its dedicated interactive workbench</p>
        </div>

        <div class="subexp-grid">
          ${subCardsHtml}
        </div>
      </section>
    </div>
  `;
}

/**
 * Single Experiment Workbench (for placeholder experiments 1-3, 7-10)
 */
function renderSingleExperimentWorkbench(experiment) {
  const isPlaceholder = experiment.isPlaceholder;

  return `
    <div class="individual-experiment-view">
      <!-- Back Navigation Action -->
      <div class="exp-top-nav-bar">
        <a href="/experiments" class="btn btn-outline btn-sm back-nav-btn" data-nav-link data-path="/experiments" id="back-to-experiments-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span>Back to Experiments</span>
        </a>
        <span class="badge badge-academic">Data Science Lab</span>
      </div>

      <!-- Main Header Banner -->
      <div class="exp-header-banner">
        <span class="exp-label-badge">EXPERIMENT ${experiment.experimentNumber}</span>
        <h1 class="exp-main-title">${escapeHtml(experiment.title)}</h1>
        <p class="exp-subtitle-text">Mohan Babu University • Subject Code Laboratory Practical</p>
      </div>

      <!-- Experiment Specifications Grid (AIM & PROCEDURE) -->
      <div class="exp-specifications-container">
        <!-- AIM Section -->
        <section class="card exp-spec-card" aria-labelledby="aim-heading-${experiment.id}">
          <div class="exp-section-header">
            <h2 class="exp-section-title" id="aim-heading-${experiment.id}">AIM</h2>
          </div>
          <div class="exp-spec-content">
            <p class="${isPlaceholder ? 'placeholder-text-block' : 'exp-content-text'}">
              ${escapeHtml(experiment.aim)}
            </p>
          </div>
        </section>

        <!-- PROCEDURE Section -->
        <section class="card exp-spec-card" aria-labelledby="procedure-heading-${experiment.id}">
          <div class="exp-section-header">
            <h2 class="exp-section-title" id="procedure-heading-${experiment.id}">PROCEDURE</h2>
          </div>
          <div class="exp-spec-content">
            ${isPlaceholder 
              ? `<p class="placeholder-text-block">${escapeHtml(experiment.procedure)}</p>` 
              : `<div class="exp-procedure-formatted">${formatProcedure(experiment.procedure)}</div>`
            }
          </div>
        </section>
      </div>

      <!-- PROGRAM (Code Editor & Output Console) -->
      <section class="exp-program-section" aria-label="Program Execution Workbench">
        <div class="exp-section-header-program">
          <h2 class="exp-section-title">PROGRAM</h2>
          <span class="text-xs text-muted">Python 3 Execution Environment (Interactive WASM Sandbox)</span>
        </div>

        ${renderCodeEditor(experiment)}
      </section>

      <!-- RESULT Section -->
      <section class="card exp-spec-card exp-result-section" aria-labelledby="result-heading-${experiment.id}">
        <div class="exp-section-header">
          <h2 class="exp-section-title" id="result-heading-${experiment.id}">RESULT</h2>
        </div>
        <div class="exp-spec-content">
          <p class="${isPlaceholder ? 'placeholder-text-block' : 'exp-content-text'}">
            ${escapeHtml(experiment.result || "[PLACEHOLDER — actual result will be added later]")}
          </p>
        </div>
      </section>
    </div>
  `;
}

/**
 * Initialize event handlers for the experiment/sub-experiment view
 */
export function initIndividualExperimentPageEvents(experimentId, subId = null) {
  if (subId) {
    const subExp = getSubExperiment(experimentId, subId);
    if (subExp) {
      subExp.id = subExp.id || `${experimentId}-${subExp.subId}`;
      subExp.experimentNumber = subExp.label;
      initCodeEditorEvents(subExp);
    }
  } else {
    const experiment = getExperimentById(experimentId);
    if (experiment && (!experiment.subExperiments || experiment.subExperiments.length === 0)) {
      initCodeEditorEvents(experiment);
    }
  }
}

function renderNotFound(title, message, backLink, backText) {
  return `
    <div class="experiment-not-found-container">
      <a href="${backLink}" class="btn btn-outline btn-sm back-nav-btn" data-nav-link data-path="${backLink}">
        &larr; ${escapeHtml(backText)}
      </a>
      <div class="card not-found-card" style="margin-top: var(--space-6); text-align: center; padding: var(--space-12);">
        <h2 style="color: var(--color-primary); margin-bottom: var(--space-2);">${escapeHtml(title)}</h2>
        <p class="text-muted" style="margin-bottom: var(--space-6);">
          ${escapeHtml(message)}
        </p>
        <a href="${backLink}" class="btn btn-primary" data-nav-link data-path="${backLink}">
          ${escapeHtml(backText)}
        </a>
      </div>
    </div>
  `;
}

function formatProcedure(text) {
  if (!text) return "";
  const lines = text.split("\n");
  let html = "";
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      html += "<br>";
    } else if (/^\d+\./.test(trimmed)) {
      html += `<div class="procedure-step-heading"><strong>${escapeHtml(trimmed)}</strong></div>`;
    } else if (trimmed.startsWith("-")) {
      html += `<div class="procedure-bullet-item">${escapeHtml(trimmed)}</div>`;
    } else {
      html += `<div class="procedure-line">${escapeHtml(trimmed)}</div>`;
    }
  }
  return html;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
