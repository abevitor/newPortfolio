# ☢️ Pip-Boy Portfolio

> A personal developer portfolio inspired by the Pip-Boy interface from the Fallout universe.

An interactive portfolio designed to present my **skills, projects, achievements, education and professional experience** through a custom Pip-Boy-inspired interface.

Instead of following the traditional portfolio layout, this project turns the entire website into an interactive terminal experience, combining a retro-futuristic visual style with modern web technologies.

## ✨ Features

* 🖥️ Pip-Boy-inspired user interface
* ⚡ Interactive boot sequence
* 📺 CRT / scanline visual effects
* 🎞️ Smooth page transitions and animations
* 🌎 Portuguese and English language support
* 📊 Interactive STAT section
* 📁 DATA section for quests, projects and achievements
* 🗺️ MAP section
* 📻 RADIO section
* 📄 Certificate visualization
* 🎮 Navigation using mouse and keyboard
* 📱 Responsive interface
* 💚 Custom Fallout-inspired green terminal theme

## 🧩 Sections

### STAT

Contains information about my developer profile, including:

* Personal status
* Technical skills
* SPECIAL attributes
* Perks and certifications

### DATA

Contains my professional and academic information:

* **Quests** — current and completed objectives
* **Projects** — personal and academic projects
* **Achievements** — certifications, presentations and other accomplishments

### MAP

A dedicated section for geographical information and future interactive features.

### RADIO

A dedicated space for music and audio-related content, designed to reproduce the feeling of a Fallout radio terminal.

## 🛠️ Technologies

### Frontend

* React
* TypeScript
* Vite
* Framer Motion
* Lucide React
* React PDF

### Development

* TypeScript
* Vite
* Git
* GitHub

The project is currently structured as a Vite + React application and uses TypeScript throughout the application.

## 📂 Project Structure

```text
newPortfolio/
│
├── components/
│   ├── certificados/
│   ├── screens/
│   ├── BootSequence.tsx
│   ├── CRTOverlay.tsx
│   └── PipBoy.tsx
│
├── i18n/
│   ├── LanguageContext.tsx
│   └── translations.ts
│
├── images/
│
├── App.tsx
├── data.ts
├── index.html
├── index.tsx
├── metadata.json
├── types.ts
├── vite.config.ts
├── package.json
└── tsconfig.json
```

The application separates the main Pip-Boy interface from individual screens and keeps internationalization in its own module.

## 🌐 Internationalization

The portfolio supports two languages:

* 🇧🇷 Portuguese
* 🇺🇸 English

Content is structured with language-specific fields, allowing information such as skills, projects, quests and achievements to be displayed in both languages.

## 🚀 Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/abevitor/newPortfolio.git
```

### 2. Enter the project

```bash
cd newPortfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The project uses Vite for local development and production builds.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## 🎯 Purpose

This project was created not only as a personal portfolio, but also as an opportunity to explore interactive frontend development, component architecture, animations, internationalization and creative UI design.

The goal is to combine **software development with a strong visual identity**, creating an experience that reflects my interests while still presenting my professional and technical background.

## 👨‍💻 About Me

I'm **Vitor Abe**, an Analysis and Systems Development student at FATEC Carapicuíba, focused mainly on **backend development with Java and Spring Boot**.

I also have experience and knowledge in technologies such as:

* Java
* Spring Boot
* Python
* JavaScript
* TypeScript
* HTML
* CSS
* MySQL
* Git
* REST APIs
* Cybersecurity
* Cloud Computing

I'm currently looking for opportunities to grow professionally in software development, especially in backend development.

## 📫 Contact

* GitHub: https://github.com/abevitor
* LinkedIn: [add your LinkedIn]
* Email: [add your email]

---

Made with 💚 and a little bit of radiation.
