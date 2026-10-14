/**
 * Reusable Academic Footer Component
 * 
 * Provides:
 * - Institutional branding & MBU logo
 * - Clear academic portal description
 * - Navigation links to all sections (Home, Modules, Experiments, Tools, About Me)
 * - Academic curriculum and laboratory highlights
 * - Student researcher / portal creator credentials & socials
 * - Copyright and institutional attribution
 */

import { studentData } from '../data/studentData.js';

export function renderFooter() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer" role="contentinfo">
      <!-- Main Footer Grid -->
      <div class="container footer-main-container">
        <div class="footer-grid">
          <!-- Col 1: Institutional Portal Identity -->
          <div class="footer-col footer-col-brand">
            <div class="footer-brand-header">
              <img src="/public/assets/mbu-logo.png" alt="Mohan Babu University Logo" class="footer-univ-logo">
              <div class="footer-brand-titles">
                <span class="footer-brand-univ">MOHAN BABU UNIVERSITY</span>
                <span class="footer-brand-portal">DATA SCIENCE DIGITAL LIBRARY</span>
              </div>
            </div>
            <p class="footer-desc">
              A centralized academic digital repository supporting undergraduate and postgraduate Data Science engineering curricula, structured lecture modules, and interactive laboratory computing practicals.
            </p>
            <div class="footer-dept-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
              <span>Department of Data Science & Artificial Intelligence</span>
            </div>
          </div>

          <!-- Col 2: Quick Navigation -->
          <div class="footer-col footer-col-nav">
            <h4 class="footer-heading">Academic Portal</h4>
            <ul class="footer-links-list">
              <li><a href="/" data-nav-link data-path="/">Home Overview</a></li>
              <li><a href="/modules" data-nav-link data-path="/modules">Course Modules (CHO)</a></li>
              <li><a href="/experiments" data-nav-link data-path="/experiments">Laboratory Experiments</a></li>
              <li><a href="/experiments/all" data-nav-link data-path="/experiments/all">All Experiments Directory</a></li>
              <li><a href="/tools" data-nav-link data-path="/tools">Computing Tools & Frameworks</a></li>
              <li><a href="/about" data-nav-link data-path="/about">About Me (CV & Profile)</a></li>
            </ul>
          </div>

          <!-- Col 3: Core Laboratory Practicals -->
          <div class="footer-col footer-col-labs">
            <h4 class="footer-heading">Laboratory Practicals</h4>
            <ul class="footer-links-list">
              <li><a href="/experiments/4" data-nav-link data-path="/experiments/4">Experiment 4: Data Wrangling</a></li>
              <li><a href="/experiments/4/a" data-nav-link data-path="/experiments/4/a">Program 4(a): Hierarchical Indexing</a></li>
              <li><a href="/experiments/5" data-nav-link data-path="/experiments/5">Experiment 5: Data Visualization</a></li>
              <li><a href="/experiments/5/a" data-nav-link data-path="/experiments/5/a">Program 5(a): Line & Trend Plots</a></li>
              <li><a href="/experiments/6" data-nav-link data-path="/experiments/6">Experiment 6: Time Series Analysis</a></li>
              <li><a href="/experiments/6/a" data-nav-link data-path="/experiments/6/a">Program 6(a): Time Series Creation</a></li>
            </ul>
          </div>

          <!-- Col 4: Student Developer & Academic Verification -->
          <div class="footer-col footer-col-contact">
            <h4 class="footer-heading">Student Researcher</h4>
            <div class="footer-student-card">
              <strong class="footer-student-name">${studentData.name}</strong>
              <span class="footer-student-meta">Roll No: ${studentData.rollNumber}</span>
              <span class="footer-student-dept">${studentData.department} • ${studentData.section}</span>
              <span class="footer-faculty-line">Faculty: ${studentData.faculty}</span>
              <div class="footer-social-row">
                <a href="${studentData.socials.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="LinkedIn Profile">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <span>LinkedIn</span>
                </a>
                <a href="${studentData.socials.githubUrl}" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="GitHub Profile">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Copyright & Compliance Strip -->
      <div class="footer-bottom-strip">
        <div class="container footer-bottom-inner">
          <p class="footer-copy">
            &copy; ${currentYear} Mohan Babu University (MBU). All Rights Reserved. Data Science Subject Digital Library.
          </p>
          <div class="footer-bottom-meta">
            <span class="footer-meta-pill">Academic Year 2025–2026</span>
            <span class="footer-meta-pill">Python 3 WebAssembly Sandbox</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
