/**
 * About Me Page (/about)
 * 
 * Professional Academic Profile Layout:
 * - Two-Column Layout:
 *   - LEFT COLUMN: Curriculum Vitae viewer with "Open CV" and "Download CV" actions, plus academic summary
 *   - RIGHT COLUMN: Official Mohan Babu University Digital Student Identity Card
 * - Stacks vertically on mobile
 * - Preserves existing CV and all student data
 */

import { renderStudentCv } from '../components/StudentCv.js';
import { renderStudentIdCard } from '../components/StudentIdCard.js';
import { studentData } from '../data/studentData.js';

export function renderAboutPage() {
  return `
    <div class="about-page-wrapper">
      <!-- Page Header -->
      <header class="section-header-row">
        <div class="section-title-wrap">
          <div class="header-pre-badge">
            <span class="badge badge-academic">ACADEMIC PROFILE</span>
          </div>
          <h1 class="section-page-title">ABOUT ME</h1>
          <p class="section-subtitle">Student Digital Credentials, Academic Curriculum Vitae & Institutional Profile • Mohan Babu University</p>
        </div>
      </header>

      <!-- Academic Profile Two-Column Layout -->
      <div class="about-layout">
        <!-- LEFT COLUMN: Curriculum Vitae & Academic Credentials -->
        <section class="about-cv-column" aria-label="Curriculum Vitae Document">
          <div class="card about-bio-summary-card">
            <div class="bio-header-badge-row">
              <span class="badge badge-primary">STUDENT PROFILE</span>
              <span class="text-xs text-muted">ID: ${studentData.rollNumber}</span>
            </div>
            <h2 class="bio-student-title">${studentData.name}</h2>
            <p class="bio-text">
              Undergraduate student pursuing B.Tech in ${studentData.department} at Mohan Babu University (MBU), Tirupati. Dedicated to data-driven computing, machine learning, and analytical problem-solving. This portal serves as the academic resource library and laboratory workbench under the academic guidance of <strong>${studentData.faculty}</strong>.
            </p>
            <div class="bio-specs-grid">
              <div class="bio-spec-chip">
                <span class="chip-label">Department:</span>
                <span class="chip-val">${studentData.department}</span>
              </div>
              <div class="bio-spec-chip">
                <span class="chip-label">Section:</span>
                <span class="chip-val">${studentData.section}</span>
              </div>
              <div class="bio-spec-chip">
                <span class="chip-label">Subject:</span>
                <span class="chip-val">${studentData.subject}</span>
              </div>
              <div class="bio-spec-chip">
                <span class="chip-label">Faculty Mentor:</span>
                <span class="chip-val">${studentData.faculty}</span>
              </div>
            </div>
          </div>

          <!-- Embedded CV Component -->
          ${renderStudentCv()}
        </section>

        <!-- RIGHT COLUMN: Official Student ID Card -->
        <aside class="about-id-column" aria-label="Student Identity Card">
          <div class="about-id-sticky-wrapper">
            <div class="id-column-heading">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span>Verified Digital Credential</span>
            </div>
            ${renderStudentIdCard()}
          </div>
        </aside>
      </div>
    </div>
  `;
}
