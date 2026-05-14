# Light Minimalist Portfolio Project Guide

## 🚀 Concept & Visual Style
**Style Name:** Light Minimalist / Professional Clean
**Goal:** Create a serene, spacious, and professional portfolio that emphasizes content through clean typography and subtle use of color.

### 🎨 Color Palette
- **Primary (Amber):** `oklch(75% 0.183 55.934)`
  - Used for: Strategic accents, links, active states, and subtle branding elements.
- **Background:** `oklch(98% 0.01 55.934)` (Off-White) or Pure White (`#FFFFFF`)
  - Used for: Main workspace to create a sense of airiness and clarity.
- **Text:** `oklch(25% 0.02 55.934)` (Deep Charcoal/Amber-tinted Dark)
  - Used for: Primary body text and headings to ensure high readability.
- **Surface:** `oklch(95% 0.02 55.934)` (Light Gray/Amber-tinted Light)
  - Used for: Cards, sections, and subtle dividers.

### 📐 Design Principles
1. **Minimalist Aesthetic:** Focus on essential elements. Remove unnecessary decorations.
2. **Ample Whitespace:** Use generous padding and margins to let the content "breathe".
3. **Typography First:** Use high-quality fonts with careful attention to hierarchy, line-height, and letter-spacing.
4. **Subtle Depth:** Use very soft shadows (`shadow-sm`) or fine borders instead of heavy glows.
5. **Interactive Accents:** Use the Amber color for micro-interactions and calls to action.

---

## 📂 Project Structure

```text
src/
├── assets/             # Static assets (images, fonts)
├── components/         # Reusable UI parts
│   ├── ui/             # Atomic components (MinimalButton, InfoBadge)
│   └── layout/         # Structural components (Navbar, Container, Footer)
├── sections/           # Main page sections (Hero, Projects, Experience, Contact)
├── data/               # Content files (projects.js, skills.js, personal.js)
├── hooks/              # Custom React hooks (useScroll, useForm)
├── styles/             # Global CSS and layout utilities
├── utils/              # Utility functions (cn.js)
├── App.jsx             # Main application entry
└── main.jsx            # React mounting point
```

---

## 🛠 Technical Stack
- **Framework:** React + Vite
- **Styling:** Tailwind CSS (v3 or v4)
- **Icons:** FontAwesome (Regular, Solid)
- **Animations:** Framer Motion (Used for subtle fade-ins and smooth transitions)
- **Fonts:** 
  - Headings: `Inter`, `Outfit`, or `Instrument Sans`
  - Body: `Inter` or `Geist Sans`

---

## 📝 Conventions
- **Component Naming:** PascalCase (e.g., `ProjectCard.jsx`).
- **Data-First:** Maintain all content in `/src/data/` for easy updates.
- **Styling:** Use Tailwind utility classes. Prioritize standard CSS over custom animation files where possible.
- **Responsiveness:** Design mobile-first with a focus on simple, vertical layouts.
