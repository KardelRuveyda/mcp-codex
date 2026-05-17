import Link from "next/link";

const cards = [
  {
    href: "/book/theory/",
    emoji: "📖",
    badge: "VOLUME I",
    title: "Theory",
    blurb: "Concepts, architecture, vocabulary. Start here.",
    bullets: [
      "What MCP is and why it exists",
      "Host · Client · Server",
      "MCP vs APIs",
    ],
  },
  {
    href: "/book/examples/",
    emoji: "🧪",
    badge: "VOLUME II",
    title: "Examples",
    blurb: "MCP in the wild — coming soon.",
    bullets: [
      "Hands-on integrations",
      "MCP × Microsoft Foundry & more",
      "Filling up chapter by chapter",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="max-w-5xl w-full">
        <p className="text-gold tracking-[0.4em] text-xs mb-4">
          A MULTILINGUAL CODEX · 25 LANGUAGES
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-parchment leading-tight">
          The <span className="text-gold">MCP</span> Codex
        </h1>
        <p className="font-serif text-2xl mt-3 text-parchment/80 italic">
          A storybook journey through the Model Context Protocol
        </p>
        <div className="my-6 text-gold text-3xl">❦ ⚜ ❦</div>
        <p className="font-display tracking-[0.3em] text-parchment/70 text-xs">
          BY KARDEL RÜVEYDA ÇETİN
        </p>
        <p className="font-serif text-lg text-parchment/80 mt-6 max-w-2xl mx-auto">
          This book is for anyone who wants to <em>understand what MCP is</em> and{" "}
          <em>learn how to use it</em> — no prior background required. Pick a volume
          below to begin.
        </p>

        {/* Two book cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group block bg-gradient-to-br from-wine/80 to-[#3a0f18]/90
                         border-2 border-gold/60 hover:border-gold rounded-sm p-8
                         transition-all hover:-translate-y-1 hover:shadow-2xl shadow-black/50"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-5xl">{c.emoji}</span>
                <span className="font-display tracking-[0.3em] text-gold/80 text-[10px]">
                  {c.badge}
                </span>
              </div>
              <h2 className="font-display text-3xl text-parchment group-hover:text-gold transition-colors">
                {c.title}
              </h2>
              <p className="font-serif italic text-parchment/80 mt-1">{c.blurb}</p>
              <ul className="mt-4 space-y-1 text-parchment/70 text-sm">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-gold">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gold tracking-widest text-xs group-hover:translate-x-1 transition-transform">
                OPEN VOLUME →
              </p>
            </Link>
          ))}
        </div>

        <p className="text-parchment/40 text-xs mt-12">
          No accounts. No tracking. Just pages to turn.
        </p>
      </div>
    </main>
  );
}
