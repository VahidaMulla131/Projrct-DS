# Data Science Subject Digital Library
**Mohan Babu University (MBU)**

A modern, clean, responsive academic web application serving as the central digital library for the Data Science subject and laboratory.

---

## 1. Project Overview

This repository hosts the foundational architecture for the Data Science Subject Digital Library. It is built using modular HTML5, CSS3, and JavaScript (ES Modules) with client-side SPA routing, strict separation of concerns, and clean content data structures.

All sections are established with structured, non-fake placeholders so future information (student photo, CV, CHO syllabus, PDFs, experiment code, execution engines, and tools) can be slotted in seamlessly without restructuring the application.

---

## 2. Directory Structure

```
DS-PROJECT/
├── index.html                   # Semantic HTML5 entry page with meta and font configs
├── server.py                    # Lightweight Python dev server supporting SPA route rewrites
├── README.md                    # Project documentation & maintainer guide
├── css/
│   ├── design-tokens.css        # Color palette, spacing, typography, and shadow variables
│   ├── base.css                 # CSS resets, layout containers, base typography
│   ├── components.css           # Header, navbar, footer, buttons, cards, ID card, CV, modal
│   └── pages.css                # Home, About, Modules, Experiments, and Tools styling & media queries
├── js/
│   ├── app.js                   # Application bootstrap entry point
│   ├── router.js                # Client-side SPA routing & history management
│   ├── data/
│   │   ├── studentData.js       # Structured placeholders for Student ID card & CV
│   │   ├── modulesData.js       # Modules 1–5 placeholders with CHO, topics, PDF structures
│   │   ├── experimentsData.js   # Experiments 1–10 placeholders with Aim, Procedure, Code, Output
│   │   └── toolsData.js         # Categorized Data Science tools placeholders
│   ├── components/
│   │   ├── Navbar.js            # Common header with MBU logo placeholder & mobile drawer
│   │   ├── Footer.js            # Common academic portal footer
│   │   ├── StudentIdCard.js     # Reusable Student Identity Card component
│   │   ├── StudentCv.js         # Reusable Student CV layout component
│   │   ├── ModuleCard.js        # Reusable module card with individual VIEW action
│   │   ├── ExperimentCard.js    # Reusable experiment card with individual VIEW action
│   │   └── Modal.js             # Accessible modal dialogue for detail inspection
│   └── pages/
│       ├── HomePage.js          # Hero overview, student ID card, and "View More" button
│       ├── AboutPage.js         # Split layout: Student CV (left) and Student ID (right)
│       ├── ModulesPage.js       # Modules 1–5, ADD MODULE, and VIEW MORE actions
│       ├── ExperimentsPage.js   # Experiments 1–10 with Aim, Procedure, Code & Output previews
│       └── ToolsPage.js         # Categorized computing frameworks & tools taxonomy
└── assets/
    └── images/                  # Directory designated for MBU logo and future media assets
```

---

## 3. Implemented Routes

| Route | Destination | Description |
|---|---|---|
| `/` | **Home** | Welcome overview, academic metrics, Student ID card placeholder, and "View More" link |
| `/modules` | **Modules** | Modules 1 through 5 cards, individual "VIEW" modal, "ADD MODULE", and "VIEW MORE" |
| `/experiments` | **Experiments** | Experiments 1 through 10 cards, individual "VIEW" modal with Aim, Procedure, Code, Output |
| `/tools` | **Tools** | 7 Data Science disciplines with structured placeholder cards |
| `/about` | **About Me** | Two-column layout with Student CV (left) and Student ID card (right) |

---

## 4. How to Run Locally

### Option A: Using the built-in Python Server (Recommended)
From the project root directory, run:
```powershell
python server.py
```
Open your browser to:
`http://localhost:3000`

All client-side routes (`/modules`, `/experiments`, `/tools`, `/about`) are rewritten to `index.html` by `server.py` so refreshing any URL will not produce 404 errors.

---

## 5. Development Principles & Future Stages

1. **No Fake Content**: All student credentials, syllabi, PDFs, and code remain explicitly marked placeholders until real university content is provided.
2. **Logo Insertion**: A designated container (`#mbu-logo-slot`) in `Navbar.js` is sized and styled to accept the real MBU logo `<img>` without causing layout shifts.
3. **Adding Future Modules & Experiments**: Add records directly into `js/data/modulesData.js` or `js/data/experimentsData.js`. The UI updates automatically.
