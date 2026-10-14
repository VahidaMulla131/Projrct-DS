/**
 * Student Information & Profile Data Architecture
 * 
 * Centralized, reusable data source for Mulla Vahida's student profile,
 * used synchronously across Home and About Me pages.
 */

export const studentData = {
  // Identification Card Details
  name: "Mulla Vahida",
  rollNumber: "24102A030080",
  department: "DATA SCIENCE",
  section: "2",
  subject: "DATA SCIENCE",
  faculty: "BOSUBABU AST PROFESOR",
  photoUrl: "/public/assets/profile-photo.jpg",

  // Social Profile Handles & External Links
  socials: {
    linkedinUrl: "https://www.linkedin.com/in/vahida-mulla-1b4a9a321?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    githubUrl: "https://github.com/VahidaMulla131",
    otherHandle: "vahidamulla131"
  },

  // Curriculum Vitae (CV) Asset
  cv: {
    title: "Curriculum Vitae — Mulla Vahida",
    pdfUrl: "/public/assets/cv.pdf"
  }
};
