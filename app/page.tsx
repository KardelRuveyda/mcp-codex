import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="max-w-2xl">
        <p className="text-gold tracking-[0.4em] text-xs mb-4">A MULTILINGUAL CODEX · 25 LANGUAGES</p>
        <h1 className="font-display text-5xl md:text-6xl text-parchment leading-tight">
          The <span className="text-gold">MCP</span> Codex
        </h1>
        <p className="font-serif text-2xl mt-3 text-parchment/80 italic">
          A storybook journey through the Model Context Protocol
        </p>
        <div className="my-8 text-gold text-3xl">❦ ⚜ ❦</div>
        <p className="font-display tracking-[0.3em] text-parchment/70 text-xs">
          BY KARDEL RÜVEYDA ÇETİN
        </p>
        <p className="font-serif text-lg text-parchment/80">
          This book is for anyone who wants to <em>understand what MCP is</em> and
          <em> learn how to use it</em> — no prior background required. Discover MCP,
          the new open standard that connects AI agents to your databases, APIs and
          files, page by page, in the language of your choice.
        </p>
        <Link
          href="/book"
          className="inline-block mt-10 px-8 py-3 bg-wine text-parchment border-2 border-gold rounded-sm
                     font-display tracking-widest hover:bg-gold hover:text-wine transition-colors"
        >
          OPEN THE BOOK
        </Link>
        <p className="text-parchment/40 text-xs mt-10">
          No accounts. No tracking. Just pages to turn.
        </p>
      </div>
    </main>
  );
}
