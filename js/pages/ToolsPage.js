/**
 * Tools Page Foundation (/tools)
 * 
 * Redesigned Modern Academic Tools Interface:
 * - Heading: DATA SCIENCE TOOLS
 * - Subtitle: Categorized Computing Frameworks, Libraries & Developer Tools • Mohan Babu University
 * - Structured categories for: Data Science, Data Analysis, Data Visualization, Machine Learning, Databases, Development, Big Data Analytics
 * - Clean academic cards with Tool Name, Icon, Role, Short Description, and Action Button
 */

import { toolsData } from '../data/toolsData.js';

export function renderToolsPage() {
  const categoryIcons = {
    "Data Science": '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31"></path><path d="M14 9.3V2"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path><path d="M5.52 16h12.96"></path></svg>',
    "Data Analysis": '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
    "Data Visualization": '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 10 10 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>',
    "Machine Learning": '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
    "Databases": '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
    "Development": '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    "Other relevant Data Science roles": '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>'
  };

  const categoriesHtml = toolsData.map(category => {
    const iconSvg = categoryIcons[category.category] || categoryIcons["Development"];

    const cardsHtml = category.tools.map(tool => `
      <div class="card tool-item-card">
        <div class="tool-card-head">
          <div class="tool-icon-frame">
            ${iconSvg}
          </div>
          <span class="badge badge-academic">${tool.role}</span>
        </div>
        <div class="tool-card-body">
          <h3 class="tool-item-title">${tool.name}</h3>
          <p class="tool-item-desc">${tool.description}</p>
        </div>
        <div class="tool-card-footer">
          <button type="button" class="btn btn-outline btn-xs tool-visit-btn" title="View documentation and laboratory integration">
            <span>Details Pending</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    `).join('');

    return `
      <section class="tool-category-section" aria-labelledby="cat-${encodeURIComponent(category.category)}">
        <div class="tool-category-banner">
          <div class="tool-category-title-wrap">
            <div class="tool-category-icon-box">
              ${iconSvg}
            </div>
            <div>
              <h2 class="tool-category-name" id="cat-${encodeURIComponent(category.category)}">
                ${category.category}
              </h2>
              <p class="tool-category-desc">${category.description}</p>
            </div>
          </div>
          <span class="badge badge-primary">${category.tools.length} Tools</span>
        </div>

        <div class="tools-grid-layout">
          ${cardsHtml}
        </div>
      </section>
    `;
  }).join('');

  return `
    <div class="tools-page-wrapper">
      <header class="section-header-row">
        <div class="section-title-wrap">
          <div class="header-pre-badge">
            <span class="badge badge-academic">COMPUTING INFRASTRUCTURE</span>
          </div>
          <h1 class="section-page-title">DATA SCIENCE TOOLS</h1>
          <p class="section-subtitle">Categorized Computing Frameworks, Libraries & Developer Tools • Mohan Babu University</p>
        </div>
        <div class="section-actions">
          <span class="badge badge-primary" style="padding: 8px 16px; font-size: 0.85rem;">7 Subject Disciplines</span>
        </div>
      </header>

      <div class="tools-categories-flow">
        ${categoriesHtml}
      </div>
    </div>
  `;
}
