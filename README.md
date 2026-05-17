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

## 🤝 Contributing

Contributions are very welcome — translations, typo fixes, new chapters, even a single sentence rewrite. The book lives or dies by being clear and friendly, so every set of fresh eyes helps.

### What you can contribute

- 🌐 **A translation** of an existing page (the most useful single thing you can do).
- 📝 **A fix** for a typo, awkward sentence, or unclear explanation.
- 🌱 **A new chapter** based on a video / article you found useful (see content rules below).
- 🎨 **Visual / UX polish** — better diagrams, better styles, accessibility improvements.
- 🐛 **Bug reports** via [GitHub Issues](https://github.com/KardelRuveyda/mcp-codex/issues).

### Quick start (for any change)

1. **Fork** this repo, then clone your fork.
2. Create a branch:
   ```bash
   git checkout -b my-change
   ```
3. Install and run locally to see your edit live:
   ```bash
   npm install
   npm run dev
   ```
4. Edit the right file (see below), check it in the browser, commit, push, then open a **Pull Request** against `main`.

### Where things live

| You want to… | Edit |
|---|---|
| Translate a page or fix a sentence | [content/chapters.ts](content/chapters.ts) |
| Add a whole new chapter | [content/chapters.ts](content/chapters.ts) (push into `chapters`) |
| Add a brand new language | [content/chapters.ts](content/chapters.ts) (`LANGUAGES` + `UI`) |
| Change the reader UI | [components/BookViewer.tsx](components/BookViewer.tsx) |
| Change the cover / landing page | [app/page.tsx](app/page.tsx) |
| Change styling | [app/globals.css](app/globals.css) |

### Adding a translation (the most common case)

Open [content/chapters.ts](content/chapters.ts), find the page you want to translate, and add your language key next to `en`. Example — translating Chapter 1, page 1 into German:

```ts
body: {
  en: [ /* …existing… */ ],
  tr: [ /* …existing… */ ],
  de: [
    { t: "h2", v: "Es war einmal ein KI-Agent…" },
    { t: "p",  v: "Stell dir vor, du hast einen klugen KI-Assistenten gebaut…" },
    // …same block types in the same order
  ],
}
```

Rules of thumb for translations:

- Keep the **same block order** as the English version so diagrams stay in the same spot.
- Mermaid diagrams are kept **language‑neutral** (English labels) on purpose — please don't translate inside them.
- Aim for a natural, friendly tone at roughly **B1 reading level**. It's a book for humans, not a spec.

### Adding a new chapter

If you want to add a chapter from your own source (video, article, talk), please follow these content rules — they keep the book legally clean and pleasant to read:

- ✅ Take **concepts and structure** from your source.
- ❌ **Do not** copy sentences verbatim. Paraphrase in your own words.
- 🔄 **Replace named examples** from the source with your own original examples (different APIs, different tool names, different scenarios). This avoids both plagiarism and "I've read this exact thing before" fatigue.
- 🎭 Keep it warm and a little playful — use the `tip` / `fun` / `note` callouts, not just walls of text.
- 📐 Add at least one Mermaid diagram per chapter when it helps.

Use this skeleton:

```ts
{
  id: 99, // next free number
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
      },
    },
  ],
}
```

Only `en` is required. Any other language is optional and will fall back to English automatically.

### Adding a brand new language

1. Append a new entry to the `LANGUAGES` array in [content/chapters.ts](content/chapters.ts) with an ISO country code for the flag:
   ```ts
   { code: "no", label: "Norsk", cc: "no", dir: "ltr" as const },
   ```
2. Add a matching block to the `UI` object with translations of every key.
3. Optionally translate any pages you want covered. Untranslated pages fall back to English.

### Pull request checklist

Before opening a PR, please:

- [ ] `npm run build` succeeds locally (catches type and content errors).
- [ ] The page renders correctly in the browser (open it, flip to it, make sure diagrams and callouts look right).
- [ ] You followed the **content rules** above for any new prose.
- [ ] The PR description briefly explains _what_ changed and _why_ (one or two sentences is fine).

### Code of conduct

Be kind, be curious, assume good intent. That's it.

---

## 📜 License

**MIT** for the code. The book text and diagrams are © Kardel Rüveyda Çetin — feel free to share with attribution.
