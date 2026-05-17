# The MCP Codex 📖✨

> A living, multilingual, page‑flipping illustrated book about the **Model Context Protocol (MCP)** — grown from notes, transcripts, and everything I learn along the way.

<p align="center">
  <img src="screenshots/cover.png" alt="The MCP Codex — cover" width="820" />
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

## ✨ What is this?

**The MCP Codex** is a small Next.js app that turns everything I'm learning about the Model Context Protocol into a beautiful, parchment‑styled flip‑book.

- Designed for **anyone who wants to understand what MCP is and how to use it** — no prior background needed.
- Concepts are explained at a friendly level, with **fun analogies, callouts, and Mermaid diagrams** for every important idea.
- Available in **25 languages** with automatic fallback to English when a translation is still pending.
- **No accounts. No tracking. No progress saved.** Just pages to turn.

---

## 🖼️ A peek inside

| Cover | The book | Diagrams |
|---|---|---|
| ![Cover page](screenshots/cover.png) | ![Inside the book](screenshots/book.png) | ![Diagram zoom](screenshots/diagram-zoom.png) |

| Language picker | Font size controls | Multilingual content |
|---|---|---|
| ![Language picker](screenshots/languages.png) | ![Font controls](screenshots/font-controls.png) | ![Turkish page](screenshots/turkish.png) |

> 💡 _Drop your own screenshots into the `screenshots/` folder using the same file names to make these images appear._

---

## 📚 Reading the book

```bash
npm install
npm run dev
```

Then open <http://localhost:3000> → **OPEN THE BOOK**.

- **Turn pages** by dragging a corner, or using the **◀ Prev / Next ▶** buttons.
- **Click any diagram** to enlarge it full‑screen (✕ Close or `Esc` to exit).
- **Change language** via the flag dropdown — 25 languages, RTL aware.
- **Resize text** with `A−` / `A+` (12–28 px).

---

## 🌍 Languages

🇬🇧 English · 🇹🇷 Türkçe · 🇩🇪 Deutsch · 🇪🇸 Español · 🇫🇷 Français · 🇮🇹 Italiano · 🇵🇹 Português ·
🇳🇱 Nederlands · 🇵🇱 Polski · 🇷🇺 Русский · 🇺🇦 Українська · 🇬🇷 Ελληνικά · 🇸🇪 Svenska ·
🇷🇴 Română · 🇨🇿 Čeština · 🇭🇺 Magyar · 🇮🇩 Bahasa Indonesia · 🇻🇳 Tiếng Việt · 🇮🇳 हिन्दी ·
🇨🇳 中文 · 🇯🇵 日本語 · 🇰🇷 한국어 · 🇸🇦 العربية · 🇮🇱 עברית · 🇮🇷 فارسی

English is the source. Pages without a translation gracefully fall back to English and show a small notice in the reader's chosen language.

---

## 📑 Chapters so far

| # | Title | Status |
|---|---|---|
| 1 | What on Earth is MCP? | ✅ EN + TR full · titles in 11 languages |
| 2 | But… don't we already have APIs? | ✅ EN + TR full · titles in 11 languages |
| … | _more coming as I keep learning_ | 🌱 |

Each chapter is a sequence of pages defined as typed content blocks (`h2`, `h3`, `p`, `ul`, `tip`, `fun`, `note`, `mermaid`).

---

## 🛠️ Project structure

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
├── screenshots/             # Images used in this README
└── README.md
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

## 🚀 Deploying

The easiest path is **Vercel**:

1. Push the repo to GitHub.
2. Go to <https://vercel.com> → **New Project** → pick the repo.
3. Default settings work out of the box — Vercel detects Next.js automatically.

---

## 🪄 Tech

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [react‑pageflip](https://www.npmjs.com/package/react-pageflip) for the book leafing animation
- [Mermaid](https://mermaid.js.org/) for the diagrams
- Flag images from [flagcdn.com](https://flagcdn.com)

---

## 📜 License

MIT for the code. The book text and diagrams are © Kardel Rüveyda Çetin — feel free to share with attribution.
