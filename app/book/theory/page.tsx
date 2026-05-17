import BookViewer from "@/components/BookViewer";
import Link from "next/link";

export default function TheoryBookPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-6 py-3 border-b border-gold/20">
        <Link href="/" className="font-display text-gold tracking-widest text-sm">
          ← THE MCP CODEX
        </Link>
        <span className="text-parchment/60 text-xs hidden md:block">
          📖 Volume I — Theory
        </span>
      </header>
      <BookViewer editionKey="theory" />
    </main>
  );
}
