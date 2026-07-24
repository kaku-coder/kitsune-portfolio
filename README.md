<div align="center">

  # ⛩️ KITSUNE DEVELOPER PORTFOLIO

  <p align="center">
    <b>"I Build Digital Experiences"</b>
    <br />
    A state-of-the-art, high-performance Full Stack Developer Portfolio inspired by Japanese Kitsune aesthetics.
    <br />
    <a href="#-features"><strong>Explore Features »</strong></a>
    <br />
    <br />
    <a href="#-getting-started">Getting Started</a>
    ·
    <a href="#-tech-stack">Tech Stack</a>
    ·
    <a href="#-deployment">Deployment</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=black" alt="GSAP" />
    <img src="https://img.shields.io/badge/Framer_Motion-12.0-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/License-MIT-purple?style=for-the-badge" alt="License" />
  </p>

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Design Architecture](#-design-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Customization Guide](#-customization-guide)
- [Deployment](#-deployment)
- [Author & Acknowledgments](#-author--acknowledgments)

---

## 🌟 Overview

The **Kitsune Developer Portfolio** is a ultra-modern web application designed for Full Stack Developers who want to showcase their skills, featured projects, and achievements through a high-end visual experience.

Combining **dark mode glassmorphism**, Japanese brush stroke text effects, interactive **Bento Grid** layouts, and realistic **Framer Motion particle physics**, this portfolio is engineered for maximum visual impact and smooth performance across all devices.

---

## ✨ Key Features

### 🦊 1. Hero Section & Atmospheric FX
- **Cinematic Backdrop**: Features a high-resolution Samurai Kitsune illustration with dark sky, moon radiance, and Torii gate ambiance.
- **Glowing Brush Typography**: Textured purple gradient typography for `"EXPERIENCES"` with subtle outer glow effects.
- **Japanese Quote Card**: Floating quote card top right: *“静けさの中に、最も強い力が宿る。 — キツネ”* (*In silence lies the strongest power*).
- **Current Status Indicator**: Live pulsing emerald status indicator (*Available for new opportunities*).
- **Weather & Physics Animation**: Preset options for falling purple sakura petals 🍃, thunderbolts ⚡, rain, fog, and blade highlights using **Framer Motion**.

### 🍱 2. Bento Grid Showcase
- **About Me Card**: Comprehensive summary with handwritten signature (`Prakash`) and custom Kanji stamp artwork (`顏`).
- **Featured Project Card**: *AI Battle Arena* project showcase featuring an interactive live voting UI mockup (GPT-4 vs Gemini Pro) with tech tag pills (`MERN`, `Socket.io`, `AI`, `Tailwind`, `MongoDB`).
- **Tech Stack Grid**: Minimalist 8+ technology icon cards (React, Node.js, MongoDB, Express, Tailwind, Socket.io, Docker, Git) with interactive hover zoom dynamics.

### 📊 3. Developer Metrics Bar
- Displays key statistics in clean glassmorphism cards:
  - 🚀 `10+` Projects Completed
  - 📅 `2+` Years of Experience
  - 💻 `15K+` Lines of Code
  - ☕ `∞` Cups of Coffee
  - ❤️ `100%` Passion for Code
  - ✉️ Direct Call-To-Action Email Trigger (*Let's Build Something Great*)

### 📱 4. Layout & Navigation
- **Fixed Sidebar Navigation**: Attached flush to the screen edge (`h-screen`), featuring the Kitsune mask logo, navigation links with active purple indicators, and social links (GitHub, LinkedIn, Twitter/X).
- **Zero-Overlap Flex Layout**: Main container positioned next to the sidebar with a clean gap so content never slides under the navigation elements.

---

## 🛠️ Tech Stack

| Technology | Category | Description |
| :--- | :--- | :--- |
| **React 19** | Core | Modern UI Component Framework |
| **Vite 8** | Build Tool | Lightning-fast HMR and Production Bundler |
| **Tailwind CSS v4** | Styling | Utility-first CSS engine with custom CSS tokens |
| **Framer Motion** | Physics & Animation | Smooth weather, rain, sakura petal, and particle dynamics |
| **GSAP** | Motion | Timeline animations and scroll triggers |
| **Lucide React** | Icons | Minimalist SVG iconography |
| **Google Fonts** | Typography | *Plus Jakarta Sans*, *Noto Serif JP*, and *Caveat* |

---

## 📁 Project Structure

```text
portfolio/
├── frontend/
│   ├── public/              # Favicon and static icons
│   ├── src/
│   │   ├── assets/          # mainimage.png & logo.png
│   │   ├── components/      # Reusable UI modules
│   │   │   ├── Sidebar.jsx                  # Navigation sidebar & drawer
│   │   │   ├── HeroSection.jsx              # Hero header, Bento grid & stats bar
│   │   │   ├── PurpleSakuraPetals.jsx       # Falling petals physics
│   │   │   └── PurpleLightningAtmosphere.jsx # Weather & lightning FX
│   │   ├── pages/
│   │   │   └── HomePage.jsx                 # Page container view
│   │   ├── App.jsx          # Top-level flex layout
│   │   ├── main.jsx         # App mounting point
│   │   └── index.css        # Custom CSS variables, fonts & Tailwind directives
│   ├── package.json         # Node dependencies & scripts
│   └── vite.config.js       # Vite configuration & plugins
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/kitsune-portfolio.git
   cd kitsune-portfolio/frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Launch Local Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build Production Bundle**
   ```bash
   npm run build
   ```
   The compiled output will be generated inside the `dist/` directory.

---

## ⚙️ Customization Guide

- **Personal Information**: Open `src/components/HeroSection.jsx` and update text content, projects, and contact email.
- **Assets**: Replace `src/assets/mainimage.png` with your personal hero illustration, and `src/assets/logo.png` with your logo.
- **Tech Stack**: Update the `techStack` array in `HeroSection.jsx` to reflect your specific skills and tools.

---

## 🌐 Deployment

### Deploy on Vercel
```bash
npx vercel
```

### Deploy on Netlify
```bash
npx netlify deploy --dir=dist
```

---

## 👨‍💻 Author & Contact

**Prakash** — Full Stack Developer & Creative Coding Enthusiast

- **Email**: contact@prakash.dev
- **GitHub**: [@your-username](https://github me)
- **LinkedIn**: [in/your-username](https://linkedin.com)
- **Twitter/X**: [@your-handle](https://x.com)

---

<div align="center">

  **⭐ If you like this project, don't forget to give it a star on GitHub! ⭐**

</div>
