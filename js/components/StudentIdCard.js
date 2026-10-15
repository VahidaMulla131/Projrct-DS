/**
 * Reusable Digital Student ID Card Component
 * 
 * Authentic, professional university digital student identity card:
 * - Institutional Header: Official MBU branding, smart card gold chip emblem
 * - Photo & Identity: High-res student photo, full name, roll number badge, active badge
 * - Academic Credentials: Clean key-value grid for Department, Section, Subject, Faculty
 * - Social Integrations: Interactive LinkedIn, GitHub, and social handle pills
 * - Verification Footer: Digital barcode representation and institutional authenticity stamp
 */

import { studentData } from '../data/studentData.js';

export function renderStudentIdCard(data = studentData) {
  return `
    <div class="digital-id-card" role="region" aria-label="Student Digital Identity Card">
      <!-- ID Card Institutional Header -->
      <div class="id-card-top-bar">
        <div class="id-univ-header-left">
          <img src="public/assets/logo.jpeg" alt="Mohan Babu University Logo" class="id-card-mbu-crest">
          <div class="id-univ-info">
            <span class="id-univ-title">MOHAN BABU UNIVERSITY</span>
            <span class="id-card-subtitle">OFFICIAL STUDENT DIGITAL IDENTITY</span>
          </div>
        </div>
        <div class="id-chip-emblem" aria-hidden="true" title="Digital Smart Card Microchip">
          <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="33" height="25" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.2"/>
            <path d="M0 9H12M0 17H12M22 9H34M22 17H34M12 9C12 12 12 14 12 17M22 9C22 12 22 14 22 17M12 13H22" stroke="#b45309" stroke-width="1.2"/>
          </svg>
        </div>
      </div>

      <!-- Golden Institutional Accent Divider -->
      <div class="id-gold-divider" aria-hidden="true"></div>

      <!-- ID Card Content Body -->
      <div class="id-card-content">
        <!-- Photo and Primary Identifiers Row -->
        <div class="id-profile-row">
          <div class="id-photo-frame" aria-label="Student Photograph of ${data.name}">
            <img src="${data.photoUrl}" alt="${data.name} Photograph" class="id-student-photo" loading="eager">
            <div class="id-photo-badge" title="Status: Verified Active Student">
              <span class="id-badge-dot"></span>
              <span class="id-badge-label">ACTIVE</span>
            </div>
          </div>

          <div class="id-primary-block">
            <h3 class="id-name-field" title="Student Name">
              ${data.name}
            </h3>
            <div class="id-roll-field" title="Roll Number">
              <span class="id-field-tag">ROLL NO:</span>
              <span class="id-roll-value">${data.rollNumber}</span>
            </div>
            <div class="id-program-tag">
              <span>B.Tech • ${data.department}</span>
            </div>
          </div>
        </div>

        <!-- Academic Credentials Grid -->
        <div class="id-details-table">
          <div class="id-detail-row">
            <span class="id-detail-label">Department</span>
            <span class="id-detail-value">${data.department}</span>
          </div>
          <div class="id-detail-row">
            <span class="id-detail-label">Section</span>
            <span class="id-detail-value">${data.section}</span>
          </div>
          <div class="id-detail-row">
            <span class="id-detail-label">Subject</span>
            <span class="id-detail-value">${data.subject}</span>
          </div>
          <div class="id-detail-row">
            <span class="id-detail-label">Faculty</span>
            <span class="id-detail-value">${data.faculty}</span>
          </div>
        </div>

        <!-- Social Media Credentials -->
        <div class="id-social-section">
          <a href="${data.socials.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="id-social-badge id-social-linkedin" title="Open LinkedIn Profile in new tab" aria-label="LinkedIn Profile of ${data.name}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          <a href="${data.socials.githubUrl}" target="_blank" rel="noopener noreferrer" class="id-social-badge id-social-github" title="Open GitHub Profile in new tab" aria-label="GitHub Profile of ${data.name}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>

          <div class="id-social-badge id-social-handle" title="Handle: @${data.socials.otherHandle}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>@${data.socials.otherHandle}</span>
          </div>
        </div>
      </div>

      <!-- ID Card Barcode & Verification Strip -->
      <div class="id-barcode-strip" aria-hidden="true">
        <div class="id-barcode-lines">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <div class="id-auth-caption">
          <span>VALIDATED ACADEMIC CREDENTIAL • MOHAN BABU UNIVERSITY</span>
        </div>
      </div>
    </div>
  `;
}
