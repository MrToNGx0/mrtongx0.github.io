# 🚀 Jukkrit Sukkha // Minimalist Portfolio

A highly interactive, performance-optimized, and visually striking personal portfolio built with React, Vite, and Tailwind CSS. Designed with a "Light Minimalist" architectural aesthetic, it features seamless scroll-snapping, 3D hover effects, and a bilingual interface.

![Portfolio Preview](./public/assets/image/portfolio-preview.png)

🌐 **Live Demo:** [https://mrtongx0.github.io/](https://mrtongx0.github.io/)

---

## ✨ Key Features

- **Architectural Minimalism:** Clean, ample whitespace design emphasizing content, typography, and subtle depth.
- **Immersive Interactions:** 
  - Framer Motion powered 3D tilt effects on cards.
  - Smooth staggered entrance animations.
  - Glassmorphism (backdrop-blur) elements for layered depth.
- **Zero-Scroll Views:** Every major section (Hero, Projects, Skills, Experience, Education, Contact) is meticulously engineered to fit perfectly within a single viewport, utilizing horizontal scrolling and tabbed dashboards to eliminate vertical fatigue.
- **Bilingual Support (i18n):** Full English and Thai (`th`/`en`) translation system built-in using `react-i18next`.
- **Dynamic Project Backdrops:** Project images dynamically generate ambient blurred backdrops to elegantly handle varying image aspect ratios and transparent logos.
- **Responsive Design:** Fluidly adapts from desktop to mobile screens while preserving the core aesthetic.
- **CI/CD Integrated:** Automated deployment to GitHub Pages via GitHub Actions.

---

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Core** | React 18, Vite |
| **Styling** | Tailwind CSS v3, PostCSS |
| **Animation** | Framer Motion |
| **Icons** | FontAwesome (Solid & Brands) |
| **Localization** | `i18next`, `react-i18next`, `i18next-browser-languagedetector` |

---

## 📂 Project Structure

```text
src/
├── assets/             # Static assets (images, videos)
├── components/         # Reusable UI parts
│   ├── layout/         # Structural components (SectionLayout)
│   └── ui/             # Atomic components (ProjectCard, SkillCard, ScrollToTop)
├── data/               # Centralized data files (projects.js, skills.js, experience.js, etc.)
├── sections/           # Main page viewport sections (Hero, Projects, Skills...)
├── styles/             # Global CSS and Tailwind directives
├── App.jsx             # Main application orchestrator & routing logic
├── i18n.js             # Localization configuration
└── main.jsx            # React DOM mounting point
```

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mrtongx0/mrtongx0.github.io.git
   cd mrtongx0.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   *The site will be available at `http://localhost:5173/` (or the port specified in your terminal).*

### Building for Production
To create an optimized production build:
```bash
npm run build
```
The compiled files will be output to the `dist` directory.

---

## 📝 Content Management

The portfolio is designed to be easily updatable without touching the core UI components. All content is managed via centralized JS objects in the `src/data/` directory:

- Update projects: `src/data/projects.js`
- Update skills: `src/data/skills.js`
- Update experience: `src/data/experience.js`
- Update education: `src/data/education.js`
- Update personal info/socials: `src/data/personal.js`

---

<div align="center">
  <p><b>Curated with Precision</b></p>
  <p>&copy; 2026 Jukkrit Sukkha (Tong) // Design System v2.0</p>
</div>
