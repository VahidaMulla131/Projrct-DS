/**
 * Resources Page Component (/resources)
 * 
 * Provides authenticated, curated Data Science learning materials:
 * - Filterable categories (Python Programming, Data Analysis, Visualization, ML & Statistics, Datasets, Coding)
 * - Real-time keyword search
 * - Official external documentation links with safe new-tab attributes
 * - Connected note to official syllabus and course modules
 */

import { resourceCategories, resourcesData } from '../data/resourcesData.js';

export function renderResourcesPage() {
  const categoriesHtml = resourceCategories.map(cat => {
    const count = cat.id === 'all' 
      ? resourcesData.length 
      : resourcesData.filter(r => r.categoryKey === cat.id).length;
    return `
      <button class="resource-filter-pill ${cat.id === 'all' ? 'active' : ''}" data-cat="${cat.id}">
        <span>${cat.label}</span>
        <span class="filter-count-badge">${count}</span>
      </button>
    `;
  }).join('');

  return `
    <div class="resources-page-container">
      <!-- Section Header -->
      <header class="section-header-row">
        <div class="section-title-wrap">
          <div class="header-pre-badge">
            <span class="badge badge-academic">LEARNING REPOSITORY</span>
          </div>
          <h1 class="section-page-title">LEARNING RESOURCES</h1>
          <p class="section-subtitle">
            Curated official documentation, computing frameworks, benchmark datasets, and algorithm practice platforms for Data Science students and practitioners.
          </p>
        </div>
      </header>

      <!-- Institutional Syllabus Connection Note -->
      <div class="academic-notice-banner" role="note" aria-label="Course syllabus notice">
        <div class="notice-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        </div>
        <div class="notice-content">
          <div class="notice-title">Official MBU Course Syllabus & Lecture Handouts</div>
          <p class="notice-desc">
            Looking for prescribed university syllabus units, lecture handouts (CHO), and academic reference material? Access the official five modules directly in the <a href="/modules" data-nav-link data-path="/modules" class="notice-link">Course Modules Section &rarr;</a>
          </p>
        </div>
      </div>

      <!-- Search & Category Filters Bar -->
      <div class="resources-controls-card card">
        <div class="resources-search-wrap">
          <div class="search-input-box">
            <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" id="resource-search-input" class="search-input" placeholder="Search resources by title, library, or keyword (e.g. Pandas, NumPy, Kaggle)..." autocomplete="off" aria-label="Search resources">
            <button id="resource-search-clear" class="search-clear-btn" style="display: none;" title="Clear search" aria-label="Clear search">&times;</button>
          </div>
          <div class="search-meta-count" id="resource-results-counter">
            Showing all <strong>${resourcesData.length}</strong> resources
          </div>
        </div>

        <div class="resources-categories-bar" role="tablist" aria-label="Resource Categories">
          ${categoriesHtml}
        </div>
      </div>

      <!-- Resources Grid Container -->
      <div class="resources-grid-wrapper" id="resources-grid-wrapper">
        ${renderResourcesGrid(resourcesData)}
      </div>
    </div>
  `;
}

function renderResourcesGrid(items) {
  if (!items || items.length === 0) {
    return `
      <div class="card resources-empty-search">
        <div class="empty-icon-circle">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        </div>
        <h3>No matching resources found</h3>
        <p>No learning resources matched your search filter. Try clearing the filter or searching for another keyword.</p>
        <button class="btn btn-outline btn-sm" id="btn-reset-filters">Reset All Filters</button>
      </div>
    `;
  }

  return `
    <div class="resources-grid">
      ${items.map(res => `
        <article class="card resource-card" data-cat="${res.categoryKey}" id="${res.id}">
          <div class="resource-card-header">
            <span class="badge badge-academic">${res.category}</span>
            <span class="res-domain-pill" title="External Source Domain">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span>${res.domain}</span>
            </span>
          </div>

          <div class="resource-card-body">
            <div class="resource-title-row">
              <h2 class="resource-title">${res.name}</h2>
              <span class="resource-type-tag">${res.badge}</span>
            </div>
            <p class="resource-desc">${res.description}</p>
            <div class="resource-tags-row">
              ${res.tags.map(tag => `<span class="resource-tag-chip">${tag}</span>`).join('')}
            </div>
          </div>

          <div class="resource-card-footer">
            <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm resource-open-btn" aria-label="Open ${res.name} in new tab">
              <span>Open Resource</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
            <span class="resource-external-notice" title="Safe external link">
              Opens in new tab
            </span>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

export function initResourcesPageEvents() {
  let activeCategory = 'all';
  let searchQuery = '';

  const searchInput = document.getElementById('resource-search-input');
  const clearBtn = document.getElementById('resource-search-clear');
  const filterPills = document.querySelectorAll('.resource-filter-pill');
  const gridContainer = document.getElementById('resources-grid-wrapper');
  const counterEl = document.getElementById('resource-results-counter');

  function updateView() {
    const q = searchQuery.toLowerCase().trim();
    const filtered = resourcesData.filter(res => {
      const matchesCat = activeCategory === 'all' || res.categoryKey === activeCategory;
      if (!matchesCat) return false;

      if (!q) return true;
      const titleMatch = res.name.toLowerCase().includes(q);
      const descMatch = res.description.toLowerCase().includes(q);
      const catMatch = res.category.toLowerCase().includes(q);
      const tagMatch = res.tags.some(t => t.toLowerCase().includes(q));
      return titleMatch || descMatch || catMatch || tagMatch;
    });

    if (gridContainer) {
      gridContainer.innerHTML = renderResourcesGrid(filtered);
      
      // Wire reset button in empty state
      const resetBtn = document.getElementById('btn-reset-filters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          activeCategory = 'all';
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          if (clearBtn) clearBtn.style.display = 'none';
          filterPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-cat') === 'all'));
          updateView();
        });
      }
    }

    if (counterEl) {
      if (searchQuery || activeCategory !== 'all') {
        counterEl.innerHTML = `Showing <strong>${filtered.length}</strong> of ${resourcesData.length} resources`;
      } else {
        counterEl.innerHTML = `Showing all <strong>${resourcesData.length}</strong> resources`;
      }
    }
  }

  // Handle Category Pill clicks
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-cat') || 'all';
      updateView();
    });
  });

  // Handle Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = searchQuery ? 'inline-flex' : 'none';
      }
      updateView();
    });
  }

  // Handle Clear Search
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      clearBtn.style.display = 'none';
      searchQuery = '';
      updateView();
    });
  }
}
