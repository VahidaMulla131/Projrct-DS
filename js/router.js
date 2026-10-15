/**
 * Client-Side SPA Router
 * 
 * Handles client-side navigation for:
 * - /                 -> Home
 * - /modules          -> Modules
 * - /experiments      -> Experiments
 * - /experiments/all  -> All Experiments Directory
 * - /experiments/:id  -> Individual Experiment Workbench (1 to 10)
 * - /tools            -> Tools
 * - /about            -> About Me
 * 
 * Supports dynamic parameter matching, history pushState, active nav highlighting,
 * and seamless browser back/forward buttons.
 */

import { renderNavbar, initNavbarEvents } from './components/Navbar.js';
import { renderFooter } from './components/Footer.js';
import { renderHomePage } from './pages/HomePage.js';
import { renderAboutPage } from './pages/AboutPage.js';
import { renderModulesPage, initModulesPageEvents } from './pages/ModulesPage.js';
import { renderModuleDetailPage, initModuleDetailPageEvents } from './pages/ModuleDetailPage.js';
import { modulesData } from './data/modulesData.js';
import { renderExperimentsPage, initExperimentsPageEvents } from './pages/ExperimentsPage.js';
import { renderExperimentsAllPage } from './pages/ExperimentsAllPage.js';
import { renderIndividualExperimentPage, initIndividualExperimentPageEvents } from './pages/IndividualExperimentPage.js';
import { renderToolsPage } from './pages/ToolsPage.js';
import { renderResourcesPage, initResourcesPageEvents } from './pages/ResourcesPage.js';
import { renderProjectsPage, initProjectsPageEvents } from './pages/ProjectsPage.js';

const STATIC_ROUTES = {
  '/': {
    title: 'Home | Data Science Subject Digital Library - MBU',
    activeNav: '/',
    render: renderHomePage,
    init: () => {}
  },
  '/modules': {
    title: 'Modules | Data Science Subject Digital Library - MBU',
    activeNav: '/modules',
    render: renderModulesPage,
    init: initModulesPageEvents
  },
  '/experiments': {
    title: 'Experiments | Data Science Subject Digital Library - MBU',
    activeNav: '/experiments',
    render: renderExperimentsPage,
    init: initExperimentsPageEvents
  },
  '/experiments/all': {
    title: 'All Experiments Directory | Data Science Subject Digital Library - MBU',
    activeNav: '/experiments',
    render: renderExperimentsAllPage,
    init: () => {}
  },
  '/resources': {
    title: 'Learning Resources | Data Science Subject Digital Library - MBU',
    activeNav: '/resources',
    render: renderResourcesPage,
    init: initResourcesPageEvents
  },
  '/projects': {
    title: 'My Projects | Data Science Subject Digital Library - MBU',
    activeNav: '/projects',
    render: renderProjectsPage,
    init: initProjectsPageEvents
  },
  '/tools': {
    title: 'Tools | Data Science Subject Digital Library - MBU',
    activeNav: '/tools',
    render: renderToolsPage,
    init: () => {}
  },
  '/about': {
    title: 'About Me | Data Science Subject Digital Library - MBU',
    activeNav: '/about',
    render: renderAboutPage,
    init: () => {}
  }
};

class Router {
  constructor() {
    this.currentPath = '/';
  }

  init() {
    // Determine initial route from pathname or hash fallback
    const initialPath = this.resolveCurrentPath();
    this.navigate(initialPath, false);

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      const path = this.resolveCurrentPath();
      this.renderRoute(path);
    });

    // Intercept client-side link clicks
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[data-nav-link], a[data-path]');
      if (!link) return;

      const path = link.getAttribute('data-path') || link.getAttribute('href');
      if (path && (STATIC_ROUTES[path] || path.startsWith('/experiments/') || path.startsWith('/modules/') || path.startsWith('/'))) {
        event.preventDefault();
        this.navigate(path);
      }
    });
  }

  resolveCurrentPath() {
    // Check if hash-based routing is used (e.g. #/modules)
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      return window.location.hash.slice(1);
    }
    const pathname = window.location.pathname;

    // Direct match
    if (STATIC_ROUTES[pathname] || pathname.startsWith('/experiments/') || pathname.startsWith('/modules/')) {
      return pathname;
    }

    // Subdirectory fallback
    for (const route in STATIC_ROUTES) {
      if (route !== '/' && pathname.endsWith(route)) {
        return route;
      }
    }
    return '/';
  }

  matchRoute(path) {
    // 1. Static route match
    if (STATIC_ROUTES[path]) {
      return STATIC_ROUTES[path];
    }

    // 2. Dynamic route match: /modules/:id
    const modMatch = path.match(/^\/modules\/([^/]+)$/);
    if (modMatch) {
      const id = modMatch[1];
      const module = modulesData.find(m => m.id === id || m.id === `module-${id}` || String(m.moduleNumber) === id);
      if (module) {
        return {
          title: `${module.title} | Data Science Subject Digital Library - MBU`,
          activeNav: '/modules',
          render: () => renderModuleDetailPage(module),
          init: () => initModuleDetailPageEvents(module)
        };
      }
    }

    // 3. Dynamic route match: /experiments/:id/:subId (Dedicated sub-experiment detail page)
    const subExpMatch = path.match(/^\/experiments\/([^/]+)\/([^/]+)$/);
    if (subExpMatch) {
      const id = subExpMatch[1];
      const subId = subExpMatch[2];
      return {
        title: `Program ${id}(${subId}) | Data Science Subject Digital Library - MBU`,
        activeNav: '/experiments',
        render: () => renderIndividualExperimentPage(id, subId),
        init: () => initIndividualExperimentPageEvents(id, subId)
      };
    }

    // 4. Dynamic route match: /experiments/:id (Experiment Hub or single experiment)
    const expMatch = path.match(/^\/experiments\/([^/]+)$/);
    if (expMatch) {
      const id = expMatch[1];
      if (id !== 'all') {
        return {
          title: `Experiment ${id} | Data Science Subject Digital Library - MBU`,
          activeNav: '/experiments',
          render: () => renderIndividualExperimentPage(id),
          init: () => initIndividualExperimentPageEvents(id)
        };
      }
    }

    // 5. Fallback to Home
    return STATIC_ROUTES['/'];
  }

  navigate(path, pushToHistory = true) {
    const route = this.matchRoute(path);
    const targetPath = (STATIC_ROUTES[path] || path.startsWith('/experiments/') || path.startsWith('/modules/')) ? path : '/';

    if (pushToHistory && window.location.pathname !== targetPath) {
      try {
        window.history.pushState({ path: targetPath }, '', targetPath);
      } catch (e) {
        window.location.hash = `#${targetPath}`;
      }
    }

    this.renderRoute(targetPath, route);
  }

  renderRoute(path, matchedRoute = null) {
    const route = matchedRoute || this.matchRoute(path);
    this.currentPath = path;

    // Update browser title
    document.title = route.title;

    // Render Navigation
    const headerContainer = document.getElementById('header-mount');
    if (headerContainer) {
      headerContainer.innerHTML = renderNavbar(route.activeNav || path);
      initNavbarEvents();
    }

    // Render Main Page Content
    const mainContainer = document.getElementById('main-content');
    if (mainContainer) {
      mainContainer.innerHTML = `
        <div class="container">
          ${route.render()}
        </div>
      `;
      // Run page-specific event initializations
      if (typeof route.init === 'function') {
        route.init();
      }
    }

    // Render Footer
    const footerContainer = document.getElementById('footer-mount');
    if (footerContainer && !footerContainer.hasChildNodes()) {
      footerContainer.innerHTML = renderFooter();
    }

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

export const router = new Router();
