/**
 * Reusable Modern Academic Navbar Component
 * 
 * Header containing:
 * - LEFT: MBU official crest logo
 * - CENTER/LEFT: "DATA SCIENCE" / "SUBJECT DIGITAL LIBRARY" with Mohan Babu University institutional tag
 * - RIGHT: Navigation links: Home, Modules, Experiments, Tools (plus About Me link)
 * - Clear active states, elegant hover transitions
 * - Mobile responsive drawer toggle
 */

export function renderNavbar(activePath = '/') {
  const navLinks = [
    { label: 'Home', path: '/', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>' },
    { label: 'Modules', path: '/modules', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>' },
    { label: 'Experiments', path: '/experiments', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31"></path><path d="M14 9.3V2"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path><path d="M5.52 16h12.96"></path></svg>' },
    { label: 'Tools', path: '/tools', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>' }
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
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
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
              <a href="/about" class="btn btn-outline btn-sm nav-about-btn ${isAboutActive}" data-nav-link data-path="/about">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>About Me</span>
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
              <span class="nav-link-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
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
