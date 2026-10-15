/**
 * Reusable Modern Academic Navbar Component
 * 
 * Header containing:
 * - Institutional Ribbon with university branding & Student Profile link
 * - LEFT: MBU official crest logo & portal title
 * - RIGHT: Navigation links:
 *   1. Home
 *   2. Modules
 *   3. Experiments
 *   4. Resources
 *   5. Projects
 *   6. Tools
 *   7. About Me (with student profile photo avatar)
 * - Clear active states, elegant hover transitions
 * - Mobile responsive drawer toggle
 */

import { studentData } from '../data/studentData.js';

export function renderNavbar(activePath = '/') {
  const navLinks = [
    { 
      label: 'Home', 
      path: '/', 
      icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>' 
    },
    { 
      label: 'Modules', 
      path: '/modules', 
      icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>' 
    },
    { 
      label: 'Experiments', 
      path: '/experiments', 
      icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31"></path><path d="M14 9.3V2"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path><path d="M5.52 16h12.96"></path></svg>' 
    },
    { 
      label: 'Resources', 
      path: '/resources', 
      icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>' 
    },
    { 
      label: 'Projects', 
      path: '/projects', 
      icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>' 
    },
    { 
      label: 'Tools', 
      path: '/tools', 
      icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>' 
    }
  ];

  const linksHtml = navLinks.map(link => {
    const isLinkActive = link.path === '/' 
      ? activePath === '/' 
      : activePath === link.path || activePath.startsWith(link.path + '/');
    const activeClass = isLinkActive ? 'active' : '';

    return `
      <li class="nav-item">
        <a href="${link.path}" class="nav-link ${activeClass}" data-nav-link data-path="${link.path}" aria-current="${isLinkActive ? 'page' : 'false'}">
          <span class="nav-link-icon">${link.icon}</span>
          <span class="nav-link-text">${link.label}</span>
          ${isLinkActive ? '<span class="nav-active-pip" aria-hidden="true"></span>' : ''}
        </a>
      </li>
    `;
  }).join('');

  const isAboutActive = activePath === '/about' ? 'active' : '';

  return `
    <header class="site-header" role="banner">
      <!-- Institutional Top Accent Ribbon -->
      <div class="header-top-ribbon">
        <div class="container ribbon-inner">
          <div class="ribbon-left">
            <span class="ribbon-univ-name">MOHAN BABU UNIVERSITY</span>
            <span class="ribbon-sep">•</span>
            <span class="ribbon-dept">DEPARTMENT OF DATA SCIENCE</span>
          </div>
          <div class="ribbon-right">
            <a href="/about" class="ribbon-link ${isAboutActive}" data-nav-link data-path="/about">
              <span class="nav-avatar-wrapper ribbon-avatar-wrap">
                <img src="${studentData.photoUrl || ''}" alt="${studentData.name}" class="nav-avatar-img ${!studentData.photoUrl ? 'avatar-hidden' : ''}" onerror="this.classList.add('avatar-hidden'); const f=this.nextElementSibling; if(f) f.classList.remove('avatar-hidden');">
                <span class="nav-avatar-fallback ${studentData.photoUrl ? 'avatar-hidden' : ''}" aria-hidden="true">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </span>
              </span>
              <span>Student Profile</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Main Navigation Bar -->
      <div class="container header-container">
        <!-- Brand & MBU Logo Slot on the LEFT -->
        <a href="/" class="brand-section" data-nav-link data-path="/" title="Data Science Subject Digital Library • Mohan Babu University">
          <div class="mbu-logo-container" id="mbu-logo-slot" aria-label="Mohan Babu University Crest Logo">
            <img src="/public/assets/mbu-logo.png" alt="Mohan Babu University Logo" class="mbu-header-logo" loading="eager">
          </div>
          <div class="brand-text">
            <div class="brand-title-lead">DATA SCIENCE</div>
            <div class="brand-title-sub">SUBJECT DIGITAL LIBRARY</div>
          </div>
        </a>

        <!-- Desktop Navigation on the RIGHT -->
        <nav class="main-nav" aria-label="Main Navigation">
          <ul class="nav-list">
            ${linksHtml}
            <li class="nav-item nav-item-about">
              <a href="/about" class="btn btn-outline btn-sm nav-about-btn ${isAboutActive}" data-nav-link data-path="/about" title="Student Profile & CV" aria-current="${isAboutActive ? 'page' : 'false'}">
                <span class="nav-avatar-wrapper">
                  <img src="${studentData.photoUrl || ''}" alt="Photo of ${studentData.name}" class="nav-avatar-img ${!studentData.photoUrl ? 'avatar-hidden' : ''}" onerror="this.classList.add('avatar-hidden'); const f=this.nextElementSibling; if(f) f.classList.remove('avatar-hidden');">
                  <span class="nav-avatar-fallback ${studentData.photoUrl ? 'avatar-hidden' : ''}" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </span>
                </span>
                <span class="nav-link-text">About Me</span>
                ${isAboutActive ? '<span class="nav-active-pip" aria-hidden="true"></span>' : ''}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Mobile Menu Toggle Button -->
        <button class="mobile-menu-btn" id="mobile-menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-nav-drawer" id="mobile-nav-drawer" aria-hidden="true">
        <ul class="mobile-nav-list">
          ${linksHtml}
          <li class="mobile-nav-item">
            <a href="/about" class="nav-link ${isAboutActive}" data-nav-link data-path="/about">
              <span class="nav-avatar-wrapper mobile-avatar-wrap">
                <img src="${studentData.photoUrl || ''}" alt="Photo of ${studentData.name}" class="nav-avatar-img ${!studentData.photoUrl ? 'avatar-hidden' : ''}" onerror="this.classList.add('avatar-hidden'); const f=this.nextElementSibling; if(f) f.classList.remove('avatar-hidden');">
                <span class="nav-avatar-fallback ${studentData.photoUrl ? 'avatar-hidden' : ''}" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </span>
              </span>
              <span class="nav-link-text">About Me (CV & Profile)</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  `;
}

export function initNavbarEvents() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
      drawer.classList.toggle('open');
      drawer.setAttribute('aria-hidden', String(isExpanded));
    });

    // Close mobile drawer when clicking any link
    drawer.querySelectorAll('[data-nav-link]').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
      });
    });
  }
}
