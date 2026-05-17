"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import mermaid from "mermaid";

let initialized = false;

export default function Mermaid({ chart, id }: { chart: string; id: string }) {
  const inlineRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!initialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        themeVariables: {
          primaryColor: "#f5ecd7",
          primaryTextColor: "#2b1d0e",
          primaryBorderColor: "#6b1e2b",
          lineColor: "#6b1e2b",
          fontFamily: "Inter, sans-serif",
        },
      });
      initialized = true;
    }
    let cancelled = false;
    (async () => {
      try {
        const result = await mermaid.render(`m-${id}-${Date.now()}`, chart);
        if (!cancelled) setSvg(result.svg);
      } catch {
        if (!cancelled) setSvg('<div style="padding:8px;color:#900">diagram error</div>');
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  // Inject SVG into inline + modal targets
  useEffect(() => {
    if (inlineRef.current) inlineRef.current.innerHTML = svg;
  }, [svg]);
  useEffect(() => {
    if (open && modalRef.current) modalRef.current.innerHTML = svg;
  }, [open, svg]);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 0.25, 5));
      if (e.key === "-") setZoom((z) => Math.max(z - 0.25, 0.5));
      if (e.key === "0") setZoom(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Wheel zoom inside modal
  const onWheel = (e: React.WheelEvent) => {
    if (!open) return;
    e.preventDefault();
    setZoom((z) => Math.min(5, Math.max(0.5, z + (e.deltaY < 0 ? 0.15 : -0.15))));
  };

  return (
    <>
      <div
        className="mermaid-wrap"
        ref={inlineRef}
        onClick={() => {
          setZoom(1);
          setOpen(true);
        }}
        title="Click to enlarge"
      />
      {open && typeof document !== "undefined" &&
        createPortal(
          <div
            className="lightbox"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <div className="lightbox-stage" onWheel={onWheel}>
              <div ref={modalRef} style={{ transform: `scale(${zoom})` }} />
            </div>
            <div className="lightbox-bar" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}>−</button>
              <span className="zoom-label">{Math.round(zoom * 100)}%</span>
              <button onClick={() => setZoom((z) => Math.min(5, z + 0.25))}>+</button>
              <button onClick={() => setZoom(1)}>Reset</button>
              <button onClick={() => setOpen(false)}>✕ Close</button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
