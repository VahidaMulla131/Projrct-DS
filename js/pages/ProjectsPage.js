/**
 * Projects Page Component (/projects)
 * 
 * Features:
 * 1. Default "Coming Soon" empty state when no projects exist:
 *    - Heading: "My Projects"
 *    - Subtitle: "Practical Data Science projects are on the way."
 *    - Status badge: "COMING SOON"
 *    - Required statement: "I’m currently learning and preparing practical projects in Data Science. This section will showcase my projects, datasets, methodology, visualizations, and results as I complete them."
 *    - Attractive academic vector illustration
 *    - Button: "Add Your First Project"
 * 
 * 2. Fully functional project management system (Add, Edit, Save Draft/Published, Delete):
 *    - Form with fields: Title, Short Description, Problem Statement, Technologies Used, Dataset Info, Methodology, Results, GitHub URL, Report URL, Image URL / File Upload.
 *    - Validation for required fields and valid URL formats.
 *    - Modular browser persistence via projectsStorage (localStorage).
 *    - Cards consistent with university digital library theme.
 *    - Auto-returns to Coming Soon empty state when all projects are deleted.
 *    - Transparent explanation of local browser persistence.
 */

import { projectsStorage } from '../services/projectsStorage.js';

export function renderProjectsPage() {
  const projects = projectsStorage.getProjects();

  return `
    <div class="projects-page-container">
      <!-- Section Header -->
      <header class="section-header-row projects-header-row">
        <div class="section-title-wrap">
          <div class="header-pre-badge">
            <span class="badge badge-academic">PRACTICAL PORTFOLIO</span>
          </div>
          <h1 class="section-page-title">My Projects</h1>
          <p class="section-subtitle" id="projects-page-subtitle">
            ${projects.length === 0 ? 'Practical Data Science projects are on the way.' : 'Hands-on Data Science, analytics, and machine learning practical projects.'}
          </p>
        </div>

        ${projects.length > 0 ? `
          <div class="projects-header-actions">
            <button class="btn btn-primary" id="btn-header-add-project">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              <span>Add New Project</span>
            </button>
          </div>
        ` : ''}
      </header>

      <!-- Persistent Storage Advisory Callout -->
      <aside class="storage-advisory-callout" role="note" aria-label="Local storage persistence note">
        <div class="advisory-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        </div>
        <div class="advisory-text">
          <strong>Workspace Storage:</strong> Projects you add or edit are preserved securely in your local browser storage across refreshes and restarts. They are stored locally on this device and do not automatically synchronize to other computers or cloud accounts.
        </div>
      </aside>

      <!-- Dynamic Projects Content Area -->
      <div id="projects-content-area">
        ${projects.length === 0 ? renderProjectsComingSoon() : renderProjectsGrid(projects)}
      </div>

      <!-- Add / Edit Project Modal Container -->
      <div id="project-modal-container" class="project-modal-overlay" style="display: none;" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <!-- Rendered dynamically by openProjectModal -->
      </div>

      <!-- Project Detail Inspection Modal Container -->
      <div id="project-detail-modal-container" class="project-modal-overlay" style="display: none;" role="dialog" aria-modal="true" aria-labelledby="detail-modal-title">
        <!-- Rendered dynamically by openDetailModal -->
      </div>
    </div>
  `;
}

/**
 * Renders the authentic Coming Soon empty state
 */
function renderProjectsComingSoon() {
  return `
    <div class="card projects-coming-soon-card">
      <div class="coming-soon-badge-row">
        <span class="badge badge-accent-blue coming-soon-status-badge">
          <span class="status-pulse-dot"></span>
          COMING SOON
        </span>
        <span class="text-xs text-muted">Academic Portfolio • Preparation Phase</span>
      </div>

      <div class="coming-soon-visual-wrapper" aria-hidden="true">
        <!-- Custom Academic Vector Art -->
        <svg class="coming-soon-illustration" width="240" height="160" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="200" height="120" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 4"/>
          <!-- Grid nodes and graph representation -->
          <circle cx="60" cy="90" r="14" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <path d="M55 90h10M60 85v10" stroke="#2563eb" stroke-width="1.5"/>
          
          <circle cx="120" cy="55" r="18" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/>
          <path d="M112 55h16M120 47v16" stroke="#1d4ed8" stroke-width="2"/>

          <circle cx="180" cy="95" r="14" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
          
          <!-- Connecting vectors -->
          <line x1="74" y1="83" x2="104" y2="62" stroke="#93c5fd" stroke-width="2" stroke-linecap="round"/>
          <line x1="137" y1="64" x2="167" y2="87" stroke="#a5b4fc" stroke-width="2" stroke-linecap="round"/>
          
          <!-- Mini Bar Chart at bottom -->
          <rect x="75" y="115" width="12" height="15" rx="2" fill="#3b82f6"/>
          <rect x="95" y="105" width="12" height="25" rx="2" fill="#2563eb"/>
          <rect x="115" y="100" width="12" height="30" rx="2" fill="#1d4ed8"/>
          <rect x="135" y="110" width="12" height="20" rx="2" fill="#60a5fa"/>
          <rect x="155" y="95" width="12" height="35" rx="2" fill="#2563eb"/>
        </svg>
      </div>

      <div class="coming-soon-content">
        <h2 class="coming-soon-heading">Practical Data Science projects are on the way.</h2>
        <p class="coming-soon-message">
          “I’m currently learning and preparing practical projects in Data Science. This section will showcase my projects, datasets, methodology, visualizations, and results as I complete them.”
        </p>

        <div class="coming-soon-cta-group">
          <button class="btn btn-primary btn-lg" id="btn-add-first-project" aria-label="Add your first project">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            <span>Add Your First Project</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Renders the populated projects grid
 */
function renderProjectsGrid(projects) {
  return `
    <div class="projects-meta-bar">
      <div class="projects-count-indicator">
        Showing <strong>${projects.length}</strong> project${projects.length === 1 ? '' : 's'} in your portfolio
      </div>
    </div>

    <div class="projects-cards-grid">
      ${projects.map(proj => {
        const isDraft = proj.status === 'draft';
        const techList = proj.technologies 
          ? (Array.isArray(proj.technologies) ? proj.technologies : proj.technologies.split(',').map(s => s.trim()).filter(Boolean))
          : [];

        return `
          <article class="card project-item-card ${isDraft ? 'project-card-draft' : ''}" id="project-card-${proj.id}">
            ${proj.imageUrl ? `
              <div class="project-card-cover">
                <img src="${escapeHtml(proj.imageUrl)}" alt="${escapeHtml(proj.title)}" class="project-cover-img" onerror="this.parentElement.style.display='none'">
              </div>
            ` : `
              <div class="project-card-header-accent">
                <div class="project-accent-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                </div>
              </div>
            `}

            <div class="project-card-body">
              <div class="project-card-status-row">
                <span class="badge ${isDraft ? 'badge-draft' : 'badge-primary'}">
                  ${isDraft ? 'DRAFT' : 'PUBLISHED'}
                </span>
                ${proj.createdAt ? `
                  <span class="text-xs text-muted" title="Creation Date">
                    ${new Date(proj.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                ` : ''}
              </div>

              <h2 class="project-card-title">${escapeHtml(proj.title)}</h2>
              <p class="project-card-desc">${escapeHtml(proj.shortDescription)}</p>

              ${techList.length > 0 ? `
                <div class="project-tech-tags">
                  ${techList.map(t => `<span class="tech-tag-chip">${escapeHtml(t)}</span>`).join('')}
                </div>
              ` : ''}
            </div>

            <div class="project-card-footer">
              <div class="project-external-links">
                ${proj.githubUrl ? `
                  <a href="${escapeHtml(proj.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm project-link-btn" title="View Source on GitHub">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span>GitHub</span>
                  </a>
                ` : ''}

                ${proj.reportUrl ? `
                  <a href="${escapeHtml(proj.reportUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm project-link-btn" title="View Project Report">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    <span>Report</span>
                  </a>
                ` : ''}

                <button class="btn btn-outline btn-sm btn-project-detail" data-id="${proj.id}" title="View Complete Project Methodology & Findings">
                  <span>Details</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>

              <div class="project-manage-actions">
                <button class="btn-icon-subtle btn-project-edit" data-id="${proj.id}" title="Edit this project" aria-label="Edit project">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </button>

                <button class="btn-icon-subtle btn-project-delete text-danger" data-id="${proj.id}" title="Delete this project" aria-label="Delete project">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
              </div>
            </div>
          </article>
        `;
      }).join('')}
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function initProjectsPageEvents() {
  const container = document.querySelector('.projects-page-container');
  if (!container) return;

  const modalContainer = document.getElementById('project-modal-container');
  const detailModalContainer = document.getElementById('project-detail-modal-container');

  function refreshView() {
    const contentArea = document.getElementById('projects-content-area');
    const subtitle = document.getElementById('projects-page-subtitle');
    const projects = projectsStorage.getProjects();

    if (contentArea) {
      if (projects.length === 0) {
        contentArea.innerHTML = renderProjectsComingSoon();
        document.querySelector('.projects-header-actions')?.remove();
        if (subtitle) subtitle.textContent = 'Practical Data Science projects are on the way.';
      } else {
        contentArea.innerHTML = renderProjectsGrid(projects);
        if (subtitle) subtitle.textContent = 'Hands-on Data Science, analytics, and machine learning practical projects.';
        if (!document.getElementById('btn-header-add-project')) {
          const headerRow = document.querySelector('.projects-header-row');
          if (headerRow) {
            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'projects-header-actions';
            actionsDiv.innerHTML = `
              <button class="btn btn-primary" id="btn-header-add-project">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                <span>Add New Project</span>
              </button>
            `;
            headerRow.appendChild(actionsDiv);
          }
        }
      }
    }
  }

  // Delegated click handling on projects content area & header
  container.addEventListener('click', (e) => {
    // Add First Project CTA
    const addFirstBtn = e.target.closest('#btn-add-first-project');
    if (addFirstBtn) {
      openProjectModal();
      return;
    }

    // Header Add Project CTA
    const addHeaderBtn = e.target.closest('#btn-header-add-project');
    if (addHeaderBtn) {
      openProjectModal();
      return;
    }

    // Edit Button
    const editBtn = e.target.closest('.btn-project-edit');
    if (editBtn) {
      const id = editBtn.getAttribute('data-id');
      const proj = projectsStorage.getProjectById(id);
      if (proj) openProjectModal(proj);
      return;
    }

    // Delete Button
    const deleteBtn = e.target.closest('.btn-project-delete');
    if (deleteBtn) {
      const id = deleteBtn.getAttribute('data-id');
      const proj = projectsStorage.getProjectById(id);
      if (proj) openDeleteModal(proj);
      return;
    }

    // View Details Button
    const detailBtn = e.target.closest('.btn-project-detail');
    if (detailBtn) {
      const id = detailBtn.getAttribute('data-id');
      const proj = projectsStorage.getProjectById(id);
      if (proj) openDetailModal(proj);
      return;
    }
  });

  function openProjectModal(existingProject = null) {
    if (!modalContainer) return;
    const isEditing = Boolean(existingProject);

    let uploadedDataUrl = existingProject ? existingProject.imageUrl || '' : '';

    modalContainer.innerHTML = `
      <div class="project-modal-dialog">
        <div class="modal-dialog-header">
          <div class="modal-dialog-title-block">
            <span class="badge badge-academic">${isEditing ? 'UPDATE PROJECT' : 'NEW PROJECT ENTRY'}</span>
            <h2 id="project-modal-title" class="modal-dialog-title">${isEditing ? 'Edit Project' : 'Add New Practical Project'}</h2>
          </div>
          <button class="modal-dialog-close-btn" id="modal-close-btn" aria-label="Close modal">&times;</button>
        </div>

        <form id="project-form" class="project-form-body" novalidate>
          <div class="form-grid-2col">
            <!-- Project Title (Required) -->
            <div class="form-group form-col-full">
              <label for="form-project-title" class="form-label">
                Project Title <span class="form-required">*</span>
              </label>
              <input type="text" id="form-project-title" class="form-input" placeholder="e.g. Credit Card Fraud Detection using Ensemble Learning" required value="${existingProject ? escapeHtml(existingProject.title) : ''}">
              <span class="form-error-msg" id="err-project-title"></span>
            </div>

            <!-- Status (Draft / Published) -->
            <div class="form-group">
              <label for="form-project-status" class="form-label">Publication Status</label>
              <select id="form-project-status" class="form-input form-select">
                <option value="published" ${existingProject && existingProject.status === 'published' ? 'selected' : ''}>Published (Visible)</option>
                <option value="draft" ${existingProject && existingProject.status === 'draft' ? 'selected' : ''}>Draft (Work In Progress)</option>
              </select>
            </div>

            <!-- Technologies Used -->
            <div class="form-group">
              <label for="form-project-tech" class="form-label">Technologies Used (comma-separated)</label>
              <input type="text" id="form-project-tech" class="form-input" placeholder="e.g. Python, Pandas, Scikit-learn, Seaborn" value="${existingProject ? escapeHtml(existingProject.technologies) : ''}">
            </div>

            <!-- Short Description (Required) -->
            <div class="form-group form-col-full">
              <label for="form-project-desc" class="form-label">
                Short Summary Description <span class="form-required">*</span>
              </label>
              <textarea id="form-project-desc" class="form-input form-textarea" rows="2" placeholder="Concise 1-2 sentence overview shown on the project card..." required>${existingProject ? escapeHtml(existingProject.shortDescription) : ''}</textarea>
              <span class="form-error-msg" id="err-project-desc"></span>
            </div>

            <!-- Problem Statement -->
            <div class="form-group form-col-full">
              <label for="form-project-problem" class="form-label">Problem Statement</label>
              <textarea id="form-project-problem" class="form-input form-textarea" rows="3" placeholder="What core problem or research challenge does this project solve?">${existingProject ? escapeHtml(existingProject.problemStatement || '') : ''}</textarea>
            </div>

            <!-- Dataset Information -->
            <div class="form-group">
              <label for="form-project-dataset" class="form-label">Dataset Information</label>
              <textarea id="form-project-dataset" class="form-input form-textarea" rows="3" placeholder="Dataset origin, size, target variables, pre-processing notes...">${existingProject ? escapeHtml(existingProject.datasetInfo || '') : ''}</textarea>
            </div>

            <!-- Methodology -->
            <div class="form-group">
              <label for="form-project-methodology" class="form-label">Methodology & Algorithms</label>
              <textarea id="form-project-methodology" class="form-input form-textarea" rows="3" placeholder="Techniques applied (e.g. SMOTE, Random Forests, K-Fold Cross Validation)...">${existingProject ? escapeHtml(existingProject.methodology || '') : ''}</textarea>
            </div>

            <!-- Results & Key Findings -->
            <div class="form-group form-col-full">
              <label for="form-project-results" class="form-label">Results & Key Findings</label>
              <textarea id="form-project-results" class="form-input form-textarea" rows="2" placeholder="Accuracy, ROC-AUC, classification metrics, business insights...">${existingProject ? escapeHtml(existingProject.results || '') : ''}</textarea>
            </div>

            <!-- GitHub URL -->
            <div class="form-group">
              <label for="form-project-github" class="form-label">GitHub Repository URL</label>
              <input type="url" id="form-project-github" class="form-input" placeholder="https://github.com/..." value="${existingProject ? escapeHtml(existingProject.githubUrl || '') : ''}">
              <span class="form-error-msg" id="err-project-github"></span>
            </div>

            <!-- Project Report URL -->
            <div class="form-group">
              <label for="form-project-report" class="form-label">Project Report / Paper URL</label>
              <input type="url" id="form-project-report" class="form-input" placeholder="https://..." value="${existingProject ? escapeHtml(existingProject.reportUrl || '') : ''}">
              <span class="form-error-msg" id="err-project-report"></span>
            </div>

            <!-- Image / Screenshot URL or File Upload -->
            <div class="form-group form-col-full">
              <label class="form-label">Project Image or Screenshot</label>
              <div class="image-upload-flex">
                <input type="url" id="form-project-image" class="form-input" placeholder="Paste image web link or choose file below..." value="${existingProject ? escapeHtml(existingProject.imageUrl || '') : ''}">
                <div class="upload-btn-wrap">
                  <label for="form-project-file" class="btn btn-outline btn-sm file-picker-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                    <span>Upload Image</span>
                  </label>
                  <input type="file" id="form-project-file" accept="image/*" style="display: none;">
                </div>
              </div>
              <div id="image-preview-slot" class="image-preview-slot" style="${uploadedDataUrl ? '' : 'display: none;'}">
                <img id="preview-img" src="${uploadedDataUrl ? escapeHtml(uploadedDataUrl) : ''}" alt="Preview" class="preview-thumbnail">
                <button type="button" id="btn-remove-image" class="btn-remove-img" title="Remove image">&times;</button>
              </div>
            </div>
          </div>

          <div class="modal-dialog-footer">
            <button type="button" class="btn btn-outline" id="modal-cancel-btn">Cancel</button>
            <div class="modal-save-group">
              <button type="button" class="btn btn-secondary" id="modal-save-draft-btn">Save as Draft</button>
              <button type="submit" class="btn btn-primary" id="modal-submit-btn">
                ${isEditing ? 'Save Changes' : 'Save & Publish Project'}
              </button>
            </div>
          </div>
        </form>
      </div>
    `;

    modalContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Handle File Upload Reading
    const fileInput = document.getElementById('form-project-file');
    const imageInput = document.getElementById('form-project-image');
    const previewSlot = document.getElementById('image-preview-slot');
    const previewImg = document.getElementById('preview-img');
    const removeImgBtn = document.getElementById('btn-remove-image');

    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          if (file.size > 2 * 1024 * 1024) {
            alert('Please choose an image under 2MB for browser local storage.');
            return;
          }
          const reader = new FileReader();
          reader.onload = (evt) => {
            uploadedDataUrl = evt.target.result;
            if (imageInput) imageInput.value = '';
            if (previewImg) previewImg.src = uploadedDataUrl;
            if (previewSlot) previewSlot.style.display = 'flex';
          };
          reader.readAsDataURL(file);
        }
      });
    }

    if (imageInput) {
      imageInput.addEventListener('input', () => {
        const url = imageInput.value.trim();
        if (url) {
          uploadedDataUrl = url;
          if (previewImg) previewImg.src = url;
          if (previewSlot) previewSlot.style.display = 'flex';
        }
      });
    }

    if (removeImgBtn) {
      removeImgBtn.addEventListener('click', () => {
        uploadedDataUrl = '';
        if (imageInput) imageInput.value = '';
        if (fileInput) fileInput.value = '';
        if (previewSlot) previewSlot.style.display = 'none';
      });
    }

    function closeModal() {
      modalContainer.style.display = 'none';
      document.body.style.overflow = '';
      modalContainer.innerHTML = '';
    }

    document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);
    document.getElementById('modal-cancel-btn')?.addEventListener('click', closeModal);

    modalContainer.addEventListener('click', (e) => {
      if (e.target === modalContainer) closeModal();
    });

    // Form Submission / Saving
    const form = document.getElementById('project-form');
    function processSave(forcedStatus = null) {
      let isValid = true;

      // Validate Title
      const titleInput = document.getElementById('form-project-title');
      const errTitle = document.getElementById('err-project-title');
      const titleVal = titleInput.value.trim();
      if (!titleVal) {
        if (errTitle) errTitle.textContent = 'Project title is required.';
        titleInput.classList.add('input-invalid');
        isValid = false;
      } else {
        if (errTitle) errTitle.textContent = '';
        titleInput.classList.remove('input-invalid');
      }

      // Validate Short Description
      const descInput = document.getElementById('form-project-desc');
      const errDesc = document.getElementById('err-project-desc');
      const descVal = descInput.value.trim();
      if (!descVal) {
        if (errDesc) errDesc.textContent = 'Short description is required.';
        descInput.classList.add('input-invalid');
        isValid = false;
      } else {
        if (errDesc) errDesc.textContent = '';
        descInput.classList.remove('input-invalid');
      }

      // Validate URLs if provided
      const githubInput = document.getElementById('form-project-github');
      const errGithub = document.getElementById('err-project-github');
      const githubVal = githubInput.value.trim();
      if (githubVal && !isValidUrl(githubVal)) {
        if (errGithub) errGithub.textContent = 'Please enter a valid URL (starting with http:// or https://).';
        githubInput.classList.add('input-invalid');
        isValid = false;
      } else {
        if (errGithub) errGithub.textContent = '';
        githubInput.classList.remove('input-invalid');
      }

      const reportInput = document.getElementById('form-project-report');
      const errReport = document.getElementById('err-project-report');
      const reportVal = reportInput.value.trim();
      if (reportVal && !isValidUrl(reportVal)) {
        if (errReport) errReport.textContent = 'Please enter a valid URL (starting with http:// or https://).';
        reportInput.classList.add('input-invalid');
        isValid = false;
      } else {
        if (errReport) errReport.textContent = '';
        reportInput.classList.remove('input-invalid');
      }

      if (!isValid) return;

      const statusSelect = document.getElementById('form-project-status');
      const finalStatus = forcedStatus || statusSelect.value || 'published';

      const projectRecord = {
        id: existingProject ? existingProject.id : null,
        title: titleVal,
        shortDescription: descVal,
        problemStatement: document.getElementById('form-project-problem').value.trim(),
        technologies: document.getElementById('form-project-tech').value.trim(),
        datasetInfo: document.getElementById('form-project-dataset').value.trim(),
        methodology: document.getElementById('form-project-methodology').value.trim(),
        results: document.getElementById('form-project-results').value.trim(),
        githubUrl: githubVal,
        reportUrl: reportVal,
        imageUrl: uploadedDataUrl || imageInput.value.trim(),
        status: finalStatus
      };

      try {
        projectsStorage.saveProject(projectRecord);
        closeModal();
        refreshView();
      } catch (err) {
        alert('Failed to save project. Browser local storage might be full.');
      }
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      processSave();
    });

    document.getElementById('modal-save-draft-btn')?.addEventListener('click', () => {
      processSave('draft');
    });
  }

  function openDetailModal(proj) {
    if (!detailModalContainer) return;

    const techList = proj.technologies 
      ? (Array.isArray(proj.technologies) ? proj.technologies : proj.technologies.split(',').map(s => s.trim()).filter(Boolean))
      : [];

    detailModalContainer.innerHTML = `
      <div class="project-modal-dialog project-detail-dialog">
        <div class="modal-dialog-header">
          <div class="modal-dialog-title-block">
            <div class="detail-badge-group">
              <span class="badge ${proj.status === 'draft' ? 'badge-draft' : 'badge-primary'}">
                ${proj.status === 'draft' ? 'DRAFT PROJECT' : 'PUBLISHED PROJECT'}
              </span>
              ${proj.createdAt ? `<span class="text-xs text-muted">Created: ${new Date(proj.createdAt).toLocaleDateString()}</span>` : ''}
            </div>
            <h2 id="detail-modal-title" class="modal-dialog-title">${escapeHtml(proj.title)}</h2>
          </div>
          <button class="modal-dialog-close-btn" id="detail-close-btn" aria-label="Close modal">&times;</button>
        </div>

        <div class="project-detail-body">
          ${proj.imageUrl ? `
            <div class="detail-cover-wrapper">
              <img src="${escapeHtml(proj.imageUrl)}" alt="${escapeHtml(proj.title)}" class="detail-cover-img" onerror="this.parentElement.style.display='none'">
            </div>
          ` : ''}

          <div class="detail-section">
            <h3 class="detail-section-title">Summary</h3>
            <p class="detail-text">${escapeHtml(proj.shortDescription)}</p>
          </div>

          ${techList.length > 0 ? `
            <div class="detail-section">
              <h3 class="detail-section-title">Technologies & Tools</h3>
              <div class="project-tech-tags">
                ${techList.map(t => `<span class="tech-tag-chip">${escapeHtml(t)}</span>`).join('')}
              </div>
            </div>
          ` : ''}

          ${proj.problemStatement ? `
            <div class="detail-section">
              <h3 class="detail-section-title">Problem Statement</h3>
              <p class="detail-text">${escapeHtml(proj.problemStatement)}</p>
            </div>
          ` : ''}

          ${proj.datasetInfo ? `
            <div class="detail-section">
              <h3 class="detail-section-title">Dataset Information</h3>
              <p class="detail-text">${escapeHtml(proj.datasetInfo)}</p>
            </div>
          ` : ''}

          ${proj.methodology ? `
            <div class="detail-section">
              <h3 class="detail-section-title">Methodology & Approach</h3>
              <p class="detail-text">${escapeHtml(proj.methodology)}</p>
            </div>
          ` : ''}

          ${proj.results ? `
            <div class="detail-section">
              <h3 class="detail-section-title">Results & Evaluation Findings</h3>
              <p class="detail-text">${escapeHtml(proj.results)}</p>
            </div>
          ` : ''}

          ${(proj.githubUrl || proj.reportUrl) ? `
            <div class="detail-section detail-links-section">
              <h3 class="detail-section-title">External Project Artifacts</h3>
              <div class="detail-links-row">
                ${proj.githubUrl ? `
                  <a href="${escapeHtml(proj.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span>View GitHub Repository</span>
                  </a>
                ` : ''}

                ${proj.reportUrl ? `
                  <a href="${escapeHtml(proj.reportUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                    <span>Read Full Report Document</span>
                  </a>
                ` : ''}
              </div>
            </div>
          ` : ''}
        </div>

        <div class="modal-dialog-footer">
          <button class="btn btn-outline" id="detail-modal-close-btn">Close</button>
          <button class="btn btn-primary" id="detail-modal-edit-btn" data-id="${proj.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            <span>Edit Project</span>
          </button>
        </div>
      </div>
    `;

    detailModalContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    function closeDetail() {
      detailModalContainer.style.display = 'none';
      document.body.style.overflow = '';
      detailModalContainer.innerHTML = '';
    }

    document.getElementById('detail-close-btn')?.addEventListener('click', closeDetail);
    document.getElementById('detail-modal-close-btn')?.addEventListener('click', closeDetail);
    detailModalContainer.addEventListener('click', (e) => {
      if (e.target === detailModalContainer) closeDetail();
    });

    document.getElementById('detail-modal-edit-btn')?.addEventListener('click', () => {
      closeDetail();
      openProjectModal(proj);
    });
  }

  function openDeleteModal(proj) {
    if (!modalContainer) return;
    modalContainer.innerHTML = `
      <div class="project-modal-dialog" style="max-width: 480px;">
        <div class="modal-dialog-header">
          <div class="modal-dialog-title-block">
            <span class="badge" style="background:#fee2e2; color:#dc2626; border:1px solid #fca5a5;">CONFIRM REMOVAL</span>
            <h2 class="modal-dialog-title" style="color:#b91c1c;">Delete Project</h2>
          </div>
          <button class="modal-dialog-close-btn" id="modal-close-delete-btn" aria-label="Close modal">&times;</button>
        </div>
        <div style="padding: 24px; display: flex; flex-direction: column; gap: 14px;">
          <p style="margin: 0; font-size: 0.95rem; line-height: 1.5; color: var(--color-text-secondary);">
            Are you sure you want to permanently delete <strong>"${escapeHtml(proj.title)}"</strong> from your local portfolio?
          </p>
          <p style="margin: 0; font-size: 0.825rem; color: var(--color-text-muted);">
            This will remove the project from your browser storage. If this was your only project, the page will immediately return to the Coming Soon empty state.
          </p>
        </div>
        <div class="modal-dialog-footer">
          <button type="button" class="btn btn-outline" id="btn-cancel-delete">Cancel</button>
          <button type="button" class="btn btn-primary" id="btn-confirm-delete" style="background-color: #dc2626; border-color: #dc2626;">
            <span>Delete Project</span>
          </button>
        </div>
      </div>
    `;
    modalContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    function closeDelete() {
      modalContainer.style.display = 'none';
      document.body.style.overflow = '';
      modalContainer.innerHTML = '';
    }

    document.getElementById('modal-close-delete-btn')?.addEventListener('click', closeDelete);
    document.getElementById('btn-cancel-delete')?.addEventListener('click', closeDelete);
    modalContainer.addEventListener('click', (e) => {
      if (e.target === modalContainer) closeDelete();
    });

    document.getElementById('btn-confirm-delete')?.addEventListener('click', () => {
      projectsStorage.deleteProject(proj.id);
      closeDelete();
      refreshView();
    });
  }

  function isValidUrl(string) {
    try {
      const url = new URL(string);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
      return false;
    }
  }
}
