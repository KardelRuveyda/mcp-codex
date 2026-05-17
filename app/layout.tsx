import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The MCP Codex — An Illustrated Guide / Resimli Rehber",
  description: "A multilingual, page-flipping e-book about the Model Context Protocol (MCP).",
  authors: [{ name: "Kardel Rüveyda Çetin" }],
  creator: "Kardel Rüveyda Çetin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
