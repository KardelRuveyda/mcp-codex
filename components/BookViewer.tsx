"use client";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  LANGUAGES,
  UI,
  pick,
  flagUrl,
  EDITIONS,
  type Lang,
  type EditionKey,
  type Chapter,
} from "@/content/chapters";
import Mermaid from "./Mermaid";

const HTMLFlipBook: any = dynamic(() => import("react-pageflip"), { ssr: false });

export type Block =
  | { t: "h2"; v: string }
  | { t: "h3"; v: string }
  | { t: "p"; v: string }
  | { t: "ul"; v: string[] }
  | { t: "tip"; v: string }
  | { t: "fun"; v: string }
  | { t: "note"; v: string }
  | { t: "mermaid"; v: string };

type PageDef =
  | { type: "cover" }
  | { type: "back" }
  | {
      type: "content";
      number: number;
      render: (lang: Lang) => { node: React.ReactNode; isFallback: boolean };
    };

function buildPages(chapters: Chapter[]): PageDef[] {
  const out: PageDef[] = [{ type: "cover" }];
  let n = 1;
  for (const ch of chapters) {
    out.push({
      type: "content",
      number: n++,
      render: (lang) => {
        const title = pick(ch.title, lang);
        const tag = pick(ch.tagline, lang);
        return {
          isFallback: title.isFallback || tag.isFallback,
          node: (
            <>
              <p className="text-gold tracking-[0.3em] text-xs">
                {UI[lang].chapter.toUpperCase()} {ch.id}
              </p>
              <h1>{title.value}</h1>
              <p className="italic">{tag.value}</p>
            </>
          ),
        };
      },
    });
    ch.pages.forEach((p, idx) => {
      out.push({
        type: "content",
        number: n++,
        render: (lang) => {
          const body = pick(p.body, lang);
          return {
            isFallback: body.isFallback,
            node: <PageBody blocks={body.value as Block[]} keyPrefix={`c${ch.id}p${idx}-${lang}`} />,
          };
        },
      });
    });
  }
  out.push({ type: "back" });
  return out;
}

function PageBody({ blocks, keyPrefix }: { blocks: Block[]; keyPrefix: string }) {
  return (
    <>
      {blocks.map((b, i) => {
        const k = `${keyPrefix}-${i}`;
        switch (b.t) {
          case "h2": return <h2 key={k}>{b.v}</h2>;
          case "h3": return <h3 key={k}>{b.v}</h3>;
          case "p":  return <p key={k}>{b.v}</p>;
          case "ul": return <ul key={k}>{b.v.map((it, j) => <li key={j}>{it}</li>)}</ul>;
          case "tip":  return <div key={k} className="callout tip">💡 {b.v}</div>;
          case "fun":  return <div key={k} className="callout fun">🎭 {b.v}</div>;
          case "note": return <div key={k} className="callout">📜 {b.v}</div>;
          case "mermaid": return <Mermaid key={k} id={k} chart={b.v} />;
          default: return null;
        }
      })}
    </>
  );
}

// ── Custom flag-image dropdown (works on every OS) ───────────────────────────
function LanguageDropdown({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === lang)!;

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="relative inline-block text-left" dir="ltr">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 bg-wine text-parchment border border-gold/60 px-3 py-1.5
                   text-sm font-display tracking-widest hover:bg-gold hover:text-wine
                   transition-colors cursor-pointer outline-none min-w-[180px]"
      >
        <img
          src={flagUrl(current.cc)}
          alt=""
          width={24}
          height={18}
          className="border border-black/20"
        />
        <span className="flex-1 text-left">{current.label}</span>
        <span className="opacity-70 text-xs">▾</span>
      </button>
      {open && (
        <ul
          className="absolute z-50 mt-1 max-h-80 overflow-y-auto bg-wine border border-gold/60
                     shadow-xl min-w-[200px] py-1"
          role="listbox"
        >
          {LANGUAGES.map((l) => (
            <li
              key={l.code}
              role="option"
              aria-selected={l.code === lang}
              onClick={() => {
                onChange(l.code as Lang);
                setOpen(false);
              }}
              className={`flex items-center gap-2 px-3 py-1.5 text-sm cursor-pointer
                          hover:bg-gold hover:text-wine transition-colors
                          ${l.code === lang ? "bg-gold/20 text-parchment" : "text-parchment"}`}
            >
              <img
                src={flagUrl(l.cc)}
                alt=""
                width={24}
                height={18}
                className="border border-black/20"
              />
              <span>{l.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function BookViewer({ editionKey }: { editionKey: EditionKey }) {
  const edition = EDITIONS[editionKey];
  const [lang, setLang] = useState<Lang>("en");
  const [page, setPage] = useState(0);
  const [fontSize, setFontSize] = useState(17); // px, base for .page text
  const [flip, setFlip] = useState<any>(null);

  const pages = useMemo(() => buildPages(edition.chapters), [edition]);
  const total = pages.length;
  const ui = UI[lang];
  const langMeta = LANGUAGES.find((l) => l.code === lang)!;
  const coverTitle = pick(edition.title, lang).value;
  const coverSubtitle = pick(edition.subtitle, lang).value;

  const dec = () => setFontSize((s) => Math.max(12, s - 1));
  const inc = () => setFontSize((s) => Math.min(28, s + 1));
  const reset = () => setFontSize(17);

  const goPrev = () => flip?.flipPrev();
  const goNext = () => flip?.flipNext();

  return (
    <div
      className="flex-1 flex flex-col items-center px-2 py-4"
      dir={langMeta.dir}
      style={{ ["--page-font-size" as any]: `${fontSize}px` }}
    >
      <div className="flex flex-wrap items-center gap-3 mb-3" dir="ltr">
        <LanguageDropdown lang={lang} onChange={setLang} />

        {/* Font size controls */}
        <div className="flex items-center gap-1 border border-gold/40 px-2 py-1 text-parchment/80">
          <button
            onClick={dec}
            title="Smaller text"
            className="px-2 text-sm hover:text-gold disabled:opacity-30"
            disabled={fontSize <= 12}
          >
            A−
          </button>
          <span className="text-[11px] tracking-widest min-w-[34px] text-center">
            {fontSize}px
          </span>
          <button
            onClick={inc}
            title="Larger text"
            className="px-2 text-base hover:text-gold disabled:opacity-30"
            disabled={fontSize >= 28}
          >
            A+
          </button>
          <button
            onClick={reset}
            title="Reset"
            className="px-2 text-[11px] hover:text-gold tracking-widest border-l border-gold/30 ml-1"
          >
            RESET
          </button>
        </div>

        <span className="text-parchment/50 text-[11px] hidden md:inline">
          Turn pages by dragging a corner (or using Prev / Next) · Click a diagram to enlarge
        </span>
      </div>

      <div className="w-full max-w-[1100px]">
        <HTMLFlipBook
          key={lang}
          width={520}
          height={700}
          size="stretch"
          minWidth={300}
          maxWidth={600}
          minHeight={420}
          maxHeight={800}
          drawShadow
          flippingTime={700}
          showCover
          mobileScrollSupport
          onInit={(e: any) => setFlip(e.object)}
          onFlip={(e: any) => setPage(e.data)}
          startPage={0}
          usePortrait
          startZIndex={0}
          autoSize
          maxShadowOpacity={0.5}
          clickEventForward={false}
          useMouseEvents
          swipeDistance={30}
          showPageCorners
          disableFlipByClick={true}
          className=""
          style={{}}
        >
          {pages.map((pg, i) => {
            if (pg.type === "cover") {
              return (
                <div key={i} className="page page-cover" data-density="hard">
                  <p className="tracking-[0.4em] text-xs opacity-80">{ui.cover_kicker}</p>
                  <div className="ornament">❦ ⚜ ❦</div>
                  <h1>{coverTitle}</h1>
                  <div className="ornament">⚜</div>
                  <p>{coverSubtitle}</p>
                </div>
              );
            }
            if (pg.type === "back") {
              return (
                <div key={i} className="page page-cover" data-density="hard">
                  <div className="ornament">❦</div>
                  <h1>{ui.end_title}</h1>
                  <p>{ui.end_body}</p>
                  <div className="ornament">⚜ ❦ ⚜</div>
                </div>
              );
            }
            const { node, isFallback } = pg.render(lang);
            return (
              <div key={i} className="page">
                {isFallback && (
                  <div className="callout" style={{ marginTop: 0 }}>
                    🌐 {ui.fallback_notice}
                  </div>
                )}
                {node}
                <div className="page-number">— {pg.number} —</div>
              </div>
            );
          })}
        </HTMLFlipBook>
      </div>

      <div className="flex items-center gap-4 mt-4 text-parchment/80">
        <button
          onClick={goPrev}
          className="px-3 py-1 border border-gold/40 hover:bg-gold/10 text-sm"
        >
          ◀ {ui.prev}
        </button>
        <span className="text-xs tracking-widest">{page + 1} / {total}</span>
        <button
          onClick={goNext}
          className="px-3 py-1 border border-gold/40 hover:bg-gold/10 text-sm"
        >
          {ui.next} ▶
        </button>
      </div>

      <p className="text-parchment/40 text-[11px] mt-3 tracking-widest">{ui.legend}</p>
      <p className="text-parchment/40 text-[11px] mt-1 tracking-widest">
        Written by Kardel Rüveyda Çetin
      </p>
    </div>
  );
}
