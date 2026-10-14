/**
 * Reusable Modern Academic Experiment Card Component
 * 
 * Displays clean academic experiment card:
 * - Clear Experiment Number
 * - Experiment title (actual title for 4, 5, 6; "Content will be added soon" for placeholders)
 * - Sub-experiment chips if multiple programs exist (Exp 4, 5, 6)
 * - Primary VIEW button linking directly to /experiments/{id}
 */

export function renderExperimentCard(experiment) {
  const hasSub = experiment.subExperiments && experiment.subExperiments.length > 0;
  const isPlaceholder = experiment.isPlaceholder;
  const titleDisplay = isPlaceholder ? "Content will be added soon" : experiment.title;
  const aimDisplay = isPlaceholder 
    ? "Laboratory practical material and procedure will be added soon." 
    : experiment.aim;

  return `
    <article class="card experiment-card ${hasSub ? 'has-subprograms' : ''} ${isPlaceholder ? 'is-placeholder-card' : ''}" id="experiment-card-${experiment.id}" aria-label="Experiment ${experiment.experimentNumber}">
      <div class="experiment-card-header">
        <span class="experiment-number-badge">Experiment ${experiment.experimentNumber}</span>
        ${hasSub ? `<span class="badge badge-accent">${experiment.subExperiments.length} Programs</span>` : ''}
        ${isPlaceholder ? `<span class="badge badge-future">Pending</span>` : ''}
      </div>

      <div class="experiment-card-body">
        <h3 class="experiment-card-title">${titleDisplay}</h3>
        <p class="experiment-card-aim-snippet">${aimDisplay}</p>

        ${hasSub ? `
          <div class="card-subexp-container">
            <span class="subexp-strip-label">SUB-EXPERIMENTS:</span>
            <div class="card-subexp-chips" aria-label="Sub-programs in Experiment ${experiment.experimentNumber}">
              ${experiment.subExperiments.map(s => `
                <a 
                  href="/experiments/${experiment.id}/${s.subId}" 
                  class="subexp-chip-link" 
                  data-nav-link 
                  data-path="/experiments/${experiment.id}/${s.subId}"
                  title="${s.title}"
                >
                  <span class="chip-num">${s.label}</span>
                </a>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>

      <div class="experiment-card-footer">
        <a href="/experiments/${experiment.id}" class="btn btn-outline btn-sm view-exp-btn" data-nav-link data-path="/experiments/${experiment.id}" aria-label="View Experiment ${experiment.experimentNumber}">
          <span>${hasSub ? 'VIEW EXPERIMENT & SUB-PROGRAMS' : 'VIEW EXPERIMENT'}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </div>
    </article>
  `;
}
