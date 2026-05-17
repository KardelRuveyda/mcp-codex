# The MCP Codex 📖✨

> A living, multilingual, page‑flipping illustrated book about the **Model Context Protocol (MCP)** — grown from notes, transcripts, and everything I learn along the way.

<p align="center">
  <a href="https://kardelruveyda.github.io/mcp-codex/">
    <img src="https://img.shields.io/badge/READ%20THE%20BOOK-LIVE-6b1e2b?style=for-the-badge&logo=readme&logoColor=f5ecd7" alt="Read the book" />
  </a>
</p>

<p align="center">
  <em>Written by <strong>Kardel Rüveyda Çetin</strong></em>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white" />
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss&logoColor=white" />
  <img alt="Languages" src="https://img.shields.io/badge/Languages-25-b8860b" />
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green" />
</p>

---

## 🌐 Live

**Read it here:** <https://kardelruveyda.github.io/mcp-codex/>

The site is automatically rebuilt and republished on every push to `main` via GitHub Actions + GitHub Pages.

---

## ✨ What is this?

**The MCP Codex** is a small Next.js app that turns everything I'm learning about the Model Context Protocol into a beautiful, parchment‑styled flip‑book.

- Designed for **anyone who wants to understand what MCP is and how to use it** — no prior background needed.
- Concepts are explained at a friendly level, with **fun analogies, callouts, and Mermaid diagrams** for every important idea.
- Available in **25 languages**, with automatic fallback to English when a translation is still pending.
- **No accounts. No tracking. No progress saved.** Just pages to turn.

---

## 📑 Chapters so far

| # | Title | Status |
|---|---|---|
| 1 | What on Earth is MCP? | ✅ EN + TR full · titles in 11 languages |
| 2 | But… don't we already have APIs? | ✅ EN + TR full · titles in 11 languages |
| … | _more coming as I keep learning_ | 🌱 |

Each chapter is a sequence of pages defined as typed content blocks (`h2`, `h3`, `p`, `ul`, `tip`, `fun`, `note`, `mermaid`).

---

## 🌍 Languages

🇬🇧 English · 🇹🇷 Türkçe · 🇩🇪 Deutsch · 🇪🇸 Español · 🇫🇷 Français · 🇮🇹 Italiano · 🇵🇹 Português ·
🇳🇱 Nederlands · 🇵🇱 Polski · 🇷🇺 Русский · 🇺🇦 Українська · 🇬🇷 Ελληνικά · 🇸🇪 Svenska ·
🇷🇴 Română · 🇨🇿 Čeština · 🇭🇺 Magyar · 🇮🇩 Bahasa Indonesia · 🇻🇳 Tiếng Việt · 🇮🇳 हिन्दी ·
🇨🇳 中文 · 🇯🇵 日本語 · 🇰🇷 한국어 · 🇸🇦 العربية · 🇮🇱 עברית · 🇮🇷 فارسی

English is the source. Pages without a translation gracefully fall back to English and show a small notice in the reader's chosen language.

---

## 🎛️ Reader features

- 📖 **Real page‑flip animation** — drag a corner of a page to turn it.
- 🔍 **Click any diagram** to enlarge it full‑screen (✕ Close or `Esc` to exit, mouse wheel to zoom).
- 🌐 **Language dropdown** with real flag images (works on every OS).
- 🔠 **Font size controls** (`A−` / `A+` / `RESET`, 12–28 px).
- ↩️ **RTL aware** for Arabic, Hebrew and Persian.
- ⚡ **Static site** — fast, cacheable, no backend.

---

## 🛠️ Run it locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000> → **OPEN THE BOOK**.

---

## 🗂️ Project structure

```
mcp-codex/
├── app/
│   ├── layout.tsx           # HTML shell + metadata
│   ├── page.tsx             # Landing / cover page
│   ├── book/page.tsx        # The flip‑book reader route
│   └── globals.css          # Parchment styling, lightbox, etc.
├── components/
│   ├── BookViewer.tsx       # react-pageflip + dropdown + font controls
│   └── Mermaid.tsx          # Inline diagram + portal lightbox
├── content/
│   └── chapters.ts          # All chapters in all languages (single source of truth)
├── .github/workflows/
│   └── deploy.yml           # Static export + GitHub Pages deploy
└── next.config.js           # output: "export", basePath for Pages
```

---

## ➕ Adding a new chapter

Open [content/chapters.ts](content/chapters.ts) and push a new object into `chapters`. Each page's `body` is keyed by language — only `en` is required, everything else is optional:

```ts
{
  id: 3,
  title:   { en: "Chapter title", tr: "Bölüm başlığı" },
  tagline: { en: "One-line hook", tr: "Tek satır kanca" },
  pages: [
    {
      body: {
        en: [
          { t: "h2", v: "Section heading" },
          { t: "p",  v: "A friendly paragraph." },
          { t: "ul", v: ["bullet one", "bullet two"] },
          { t: "tip", v: "A handy little tip." },
          { t: "mermaid", v: `flowchart LR; A-->B;` },
        ],
        tr: [ /* same shape, in Turkish */ ],
      },
    },
  ],
}
```

---

## 🌐 Adding a new language

1. Append a new entry to the `LANGUAGES` array in [content/chapters.ts](content/chapters.ts) with an ISO country code for the flag.
2. Add a matching block of UI strings to the `UI` object.
3. (Optional) Add per‑page translations to any chapter you want covered.

---

## 🚀 How it deploys

Every push to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml):

1. `npm ci`
2. `npm run build` → static export into `out/`
3. Upload `out/` as a Pages artifact
4. Publish to <https://kardelruveyda.github.io/mcp-codex/>

---

## 🪄 Tech

- [Next.js 14](https://nextjs.org/) (App Router · static export)
- [Tailwind CSS](https://tailwindcss.com/)
- [react‑pageflip](https://www.npmjs.com/package/react-pageflip) for the leafing animation
- [Mermaid](https://mermaid.js.org/) for the diagrams
- Flag images from [flagcdn.com](https://flagcdn.com)

---

## 📜 License

**MIT** for the code. The book text and diagrams are © Kardel Rüveyda Çetin — feel free to share with attribution.
