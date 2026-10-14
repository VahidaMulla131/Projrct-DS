/**
 * Home Page (/ or index)
 * 
 * Contains:
 * 1. Professional Hero Section:
 *    - Main Heading: "DATA SCIENCE" / "SUBJECT DIGITAL LIBRARY"
 *    - Subtitle: "Your academic resource hub for Data Science learning and practical work."
 *    - Action Buttons: [ Explore Modules ] [ View Experiments ]
 *    - Key highlights pill bar
 * 
 * 2. Dedicated Student Profile Section (Prominently below Hero):
 *    - Reuses the authentic StudentIdCard component (identical to About Me page)
 *    - Student Researcher overview (Mulla Vahida, Roll No: 24102A030080, Faculty: BOSUBABU AST PROFESOR)
 *    - "View More" button linking to /about
 *    - "Open CV (PDF)" direct link
 * 
 * 3. Introduction Section:
 *    - Academic purpose & scope
 *    - 3 core pillars: Curriculum Handouts (CHO), Live Laboratory Sandbox, Ecosystem & Credentials
 * 
 * 4. Four Visual Navigation Cards:
 *    - Modules, Experiments, Tools, About Me (Icon, Title, Short Description, View button, Hover effect)
 */

import { renderStudentIdCard } from '../components/StudentIdCard.js';
import { studentData } from '../data/studentData.js';

export function renderHomePage() {
  return `
    <div class="home-page-container">
      <!-- ========================================================
           1. PROFESSIONAL HERO SECTION
           ======================================================== -->
      <section class="home-hero-section" aria-label="Portal Introduction">
        <div class="home-hero-inner">
          <div class="hero-institutional-tag">
            <span class="hero-tag-crest">MBU</span>
            <span class="hero-tag-text">MOHAN BABU UNIVERSITY • DEPARTMENT OF DATA SCIENCE</span>
          </div>

          <h1 class="home-hero-main-title">
            <span class="hero-title-line-1">DATA SCIENCE</span>
            <span class="hero-title-line-2">SUBJECT DIGITAL LIBRARY</span>
          </h1>

          <p class="home-hero-lead-subtitle">
            Your academic resource hub for Data Science learning and practical work.
          </p>

          <div class="home-hero-cta-group">
            <a href="/modules" class="btn btn-primary btn-lg hero-cta-btn" data-nav-link data-path="/modules" id="hero-explore-modules-btn">
              <span>Explore Modules</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a href="/experiments" class="btn btn-secondary btn-lg hero-cta-btn" data-nav-link data-path="/experiments" id="hero-view-experiments-btn">
              <span>View Experiments</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </a>
          </div>

          <!-- Academic Highlights Pill Bar -->
          <div class="home-hero-pills-bar">
            <div class="hero-pill-item">
              <span class="pill-dot"></span>
              <strong>5 Course Modules</strong>
            </div>
            <div class="hero-pill-item">
              <span class="pill-dot"></span>
              <strong>10 Lab Experiments</strong>
            </div>
            <div class="hero-pill-item">
              <span class="pill-dot"></span>
              <strong>Python 3 In-Browser Sandbox</strong>
            </div>
            <div class="hero-pill-item">
              <span class="pill-dot"></span>
              <strong>MBU Academic Curriculum</strong>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================
           2. DEDICATED STUDENT PROFILE / ID CARD SECTION (BELOW HERO)
           ======================================================== -->
      <section class="home-profile-feature-section" id="home-student-profile-section" aria-label="Student Identity & Academic Credentials">
        <div class="home-profile-feature-grid">
          <!-- Left: Narrative Information & Action Buttons -->
          <div class="profile-narrative-card">
            <div class="profile-eyebrow-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              <span>STUDENT RESEARCHER & PORTAL DEVELOPER</span>
            </div>

            <h2 class="profile-feature-name">${studentData.name}</h2>
            <div class="profile-feature-roll">
              <span class="badge badge-primary">Roll No: ${studentData.rollNumber}</span>
              <span class="badge badge-academic">Section: ${studentData.section}</span>
            </div>

            <p class="profile-feature-bio">
              Undergraduate student in the Department of <strong>${studentData.department}</strong> at Mohan Babu University (MBU), specializing in Data Science and intelligent software systems under the faculty mentorship of <strong>${studentData.faculty}</strong>.
            </p>

            <div class="profile-specs-list">
              <div class="profile-spec-item">
                <span class="spec-label">Institution:</span>
                <span class="spec-val">Mohan Babu University (MBU), Tirupati</span>
              </div>
              <div class="profile-spec-item">
                <span class="spec-label">Department:</span>
                <span class="spec-val">${studentData.department}</span>
              </div>
              <div class="profile-spec-item">
                <span class="spec-label">Section:</span>
                <span class="spec-val">${studentData.section}</span>
              </div>
              <div class="profile-spec-item">
                <span class="spec-label">Subject Practicum:</span>
                <span class="spec-val">${studentData.subject} (Lab & Theory)</span>
              </div>
              <div class="profile-spec-item">
                <span class="spec-label">Faculty Mentor:</span>
                <span class="spec-val">${studentData.faculty}</span>
              </div>
            </div>

            <div class="profile-actions-row">
              <a href="/about" class="btn btn-primary" data-nav-link data-path="/about" id="home-view-more-btn" aria-label="View more student profile information">
                <span>View More</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>

              <a href="${studentData.cv.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" id="home-profile-open-cv-btn" aria-label="Open Curriculum Vitae PDF in new tab">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                <span>Open CV (PDF)</span>
              </a>
            </div>
          </div>

          <!-- Right: Authentic Digital Student ID Card (Reused from About Me) -->
          <div class="profile-card-display-col">
            ${renderStudentIdCard()}
          </div>
        </div>
      </section>

      <!-- ========================================================
           3. ATTRACTIVE INTRODUCTION SECTION
           ======================================================== -->
      <section class="home-intro-section" aria-labelledby="intro-section-heading">
        <div class="intro-section-header">
          <span class="section-eyebrow">ACADEMIC PURPOSE & SCOPE</span>
          <h2 class="section-title-large" id="intro-section-heading">Centralized Learning & Laboratory Infrastructure</h2>
          <p class="section-desc-lead">
            Designed for Mohan Babu University (MBU) computer science and engineering coursework, this digital library provides an authenticated single-point repository bridging classroom theoretical concepts with real hands-on computing practicals.
          </p>
        </div>

        <div class="intro-pillars-grid">
          <div class="intro-pillar-card">
            <div class="pillar-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            </div>
            <h3 class="pillar-title">Curriculum Handouts (CHO)</h3>
            <p class="pillar-text">
              Direct access to structured syllabus handouts across all 5 subject modules, unit-level topic breakdowns, and reference study materials.
            </p>
          </div>

          <div class="intro-pillar-card">
            <div class="pillar-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31"></path><path d="M14 9.3V2"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path><path d="M5.52 16h12.96"></path></svg>
            </div>
            <h3 class="pillar-title">Live Laboratory Sandbox</h3>
            <p class="pillar-text">
              Run authentic Python programs for data wrangling, Matplotlib/Seaborn visualizations, and time-series analysis directly inside the browser using WebAssembly.
            </p>
          </div>

          <div class="intro-pillar-card">
            <div class="pillar-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <h3 class="pillar-title">Ecosystem & Credentials</h3>
            <p class="pillar-text">
              Categorized data science computing frameworks, libraries, developer environments, alongside verified student credentials and official Curriculum Vitae.
            </p>
          </div>
        </div>
      </section>

      <!-- ========================================================
           4. VISUAL NAVIGATION CARDS (4 Core Sections)
           ======================================================== -->
      <section class="home-nav-cards-section" aria-labelledby="nav-cards-heading">
        <div class="section-title-wrap" style="text-align: center; align-items: center; margin-bottom: var(--space-8);">
          <span class="section-eyebrow">PORTAL DIRECTORY</span>
          <h2 class="section-title-large" id="nav-cards-heading">Explore Portal Sections</h2>
          <p class="section-desc-lead" style="max-width: 600px; margin: 0 auto;">
            Select any section below to navigate directly to course modules, laboratory practicals, computing tools, or student credentials.
          </p>
        </div>

        <div class="portal-nav-grid">
          <!-- Card 1: Modules -->
          <article class="card portal-nav-card" id="home-card-modules">
            <div class="portal-card-top">
              <div class="portal-card-icon-wrap icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </div>
              <span class="badge badge-academic">5 Modules</span>
            </div>
            <h3 class="portal-card-title">Course Modules</h3>
            <p class="portal-card-desc">
              Explore the five foundational academic modules covering data science principles, data preparation, modeling, and analytical methodologies.
            </p>
            <div class="portal-card-action">
              <a href="/modules" class="btn btn-outline btn-sm portal-card-btn" data-nav-link data-path="/modules" aria-label="Explore course modules">
                <span>Explore Modules</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          <!-- Card 2: Experiments -->
          <article class="card portal-nav-card" id="home-card-experiments">
            <div class="portal-card-top">
              <div class="portal-card-icon-wrap icon-indigo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31"></path><path d="M14 9.3V2"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path><path d="M5.52 16h12.96"></path></svg>
              </div>
              <span class="badge badge-academic">10 Practicals</span>
            </div>
            <h3 class="portal-card-title">Laboratory Experiments</h3>
            <p class="portal-card-desc">
              Access individual sub-experiments with isolated aim, procedure, runnable Python code editor, output visualization, and results.
            </p>
            <div class="portal-card-action">
              <a href="/experiments" class="btn btn-outline btn-sm portal-card-btn" data-nav-link data-path="/experiments" aria-label="View laboratory experiments">
                <span>View Experiments</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          <!-- Card 3: Tools -->
          <article class="card portal-nav-card" id="home-card-tools">
            <div class="portal-card-top">
              <div class="portal-card-icon-wrap icon-cyan">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <span class="badge badge-academic">Computing Tools</span>
            </div>
            <h3 class="portal-card-title">Data Science Tools</h3>
            <p class="portal-card-desc">
              Curated catalog of essential developer ecosystems, analytics libraries, machine learning frameworks, and database environments.
            </p>
            <div class="portal-card-action">
              <a href="/tools" class="btn btn-outline btn-sm portal-card-btn" data-nav-link data-path="/tools" aria-label="Access data science tools">
                <span>Access Tools</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          <!-- Card 4: About Me -->
          <article class="card portal-nav-card" id="home-card-about">
            <div class="portal-card-top">
              <div class="portal-card-icon-wrap icon-slate">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <span class="badge badge-academic">Student ID & CV</span>
            </div>
            <h3 class="portal-card-title">About Me</h3>
            <p class="portal-card-desc">
              View official Mohan Babu University student identity credentials, embedded Curriculum Vitae document, and verified academic information.
            </p>
            <div class="portal-card-action">
              <a href="/about" class="btn btn-outline btn-sm portal-card-btn" data-nav-link data-path="/about" aria-label="View student profile and CV">
                <span>View Profile</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  `;
}
