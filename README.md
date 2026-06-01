# 🚀 Japjot Singh — Portfolio

A modern, performant personal portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4** — featuring smooth animations powered by **Framer Motion** and full dark/light theme support.

---

## ✨ Features

- **App Router** — Next.js 15 file-based routing with React Server Components
- **Dark / Light Theme** — Seamless theme switching via `next-themes`
- **Framer Motion Animations** — Polished entrance and scroll animations throughout
- **Responsive Design** — Mobile-first layout across all screen sizes
- **TypeScript** — Fully typed codebase for reliability and DX
- **Sections**: Hero · About · Experience · Projects · Tech Stack · Contact

---

## 🗂️ Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles & CSS variables
│   │   ├── layout.tsx        # Root layout with theme provider
│   │   └── page.tsx          # Home page (composes all sections)
│   ├── components/
│   │   ├── layout/           # Navbar, Footer, etc.
│   │   ├── sections/         # Hero, About, Experience, Projects, Stack, Contact
│   │   └── ui/               # Reusable UI primitives
│   ├── config/               # Site metadata & content config
│   └── lib/                  # Utility functions
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## 🛠️ Tech Stack

| Category      | Technology                          |
|---------------|-------------------------------------|
| Framework     | [Next.js 16](https://nextjs.org/)   |
| Language      | TypeScript 6                        |
| Styling       | Tailwind CSS 4                      |
| Animations    | Framer Motion 12                    |
| Theming       | next-themes                         |
| Runtime       | React 19                            |
| Deployment    | [Vercel](https://vercel.com/)       |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>=18.x`
- **npm** / **yarn** / **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/Japjotsingh02/Japjot_portfolio.git
cd Japjot_portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 🌐 Deployment

The easiest way to deploy is via **Vercel**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push this repo to GitHub.
2. Import the project on [vercel.com](https://vercel.com).
3. Vercel auto-detects Next.js — click **Deploy**.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Built with ❤️ by <strong>Japjot Singh</strong></p>
