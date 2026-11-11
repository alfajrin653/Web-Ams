# Adinata Group — Corporate Website

A corporate website built for **Adinata Group**, a holding company presenting its business profile, service offerings, and four business brands through a single digital platform.

> **Project status:** Archived client project. The website is no longer deployed or maintained as a live client website. This repository is published for portfolio and code-reference purposes. The current repository does not represent an active production service.

## Overview

The website was designed to give visitors a central place to understand Adinata Group, explore its business units, review its service areas, and contact the company.

The experience combines a corporate landing page with dedicated pages for selected business brands:

- **Xentra** — ERP solutions (linked to an external website).
- **TechBloom** — IT services and technology solutions.
- **Zentara** — finance and banking technology solutions.
- **Synergio** — system integration and IT infrastructure solutions.

## Key Features

- Corporate landing page with a hero section and company introduction.
- About section presenting company values and key service areas.
- Brand showcase linking to individual business-unit pages.
- Dedicated pages for TechBloom, Zentara, and Synergio.
- Client-logo carousel with automatic rotation and manual navigation.
- Contact information section.
- WhatsApp contact shortcut with a pre-filled inquiry message.
- Company profile download link.
- Responsive layouts built with Tailwind CSS utility classes.
- Client-side routing for navigation between website sections and brand pages.
- Dynamic document titles based on the current route.
- Custom not-found page for unmatched routes.

## Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | Component-based user interface |
| Vite 6 | Development server and production build tooling |
| Tailwind CSS 4 | Utility-first styling |
| React Router DOM 7 | Client-side routing |
| React Icons | Interface icons |
| Axios | HTTP client dependency included in the project |
| JavaScript (ES Modules) | Application logic |

**Build and tooling:** ESLint, `@vitejs/plugin-react`, and `@tailwindcss/vite`.

## Application Pages

| Route | Description |
|---|---|
| `/` | Main corporate website |
| `/TechBloom` | TechBloom business and service information |
| `/Zentara` | Zentara finance and banking solution information |
| `/Synergio` | Synergio system integration and IT solution information |
| `*` | Not-found page |

## Project Structure

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   │   ├── Logo/
│   │   └── client/
│   ├── Components/
│   │   ├── TechBloom/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── CarouselItem.jsx
│   │   ├── CarouselButton.jsx
│   │   ├── DownloadCrompro.jsx
│   │   └── WhatsappButton.jsx
│   ├── Layout/
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── Pages/
│   │   ├── TechBloom/
│   │   ├── Zentara/
│   │   ├── Synergio/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── OurBrand.jsx
│   │   └── OurClient.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── pnpm-lock.yaml
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (use a current LTS release).
- pnpm package manager.

### Installation

```bash
git clone <your-repository-url>
cd <repository-folder>
cd "Adinata Group/frontend"
pnpm install
```

### Run locally

```bash
pnpm dev
```

Vite will print the local development URL in the terminal (usually `http://localhost:5173`).

### Production build

```bash
pnpm build
```

### Preview the production build

```bash
pnpm preview
```

### Lint

```bash
pnpm lint
```

## Notes on Availability and External Services

- This project is **not currently deployed**. There is no active public demo URL.
- Some navigation items point to external brand websites. Their availability is independent of this repository.
- The WhatsApp shortcut opens an external WhatsApp URL.
- The company profile button references an external Google Drive download.
- The contact form component in the source references a local API endpoint, but it is not part of the active page flow in the current `Home` component. Do not assume that a working contact-form backend is included.
- The repository contains frontend source code and assets. No separate backend service is documented in this repository.

## Portfolio Context

This repository documents a corporate website project developed for a client. It demonstrates work with a multi-page React application, reusable UI components, responsive layouts, route-based page composition, brand/service presentation, and third-party contact links.

**Suggested CV entry**

**Adinata Group — Corporate Website**  
*Frontend Developer | React, Vite, Tailwind CSS*

Developed a corporate website to present the company profile, business units, service offerings, and client portfolio. Implemented reusable React components, responsive page layouts, client-side routing, brand-specific pages, a client-logo carousel, and WhatsApp contact integration.

> Only use the title and responsibilities above if they accurately reflect your actual contribution. Adjust the role wording if the project was collaborative.

## Repository Disclaimer

This repository is shared as a portfolio sample. Company names, logos, copy, and other brand assets belong to their respective owners. The source is provided to demonstrate development work; it is not an official, currently maintained website of Adinata Group.

---

**Archived project · Built with React and Vite**
