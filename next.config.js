/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "mcp-codex"; // GitHub repo name -> served at https://<user>.github.io/<repo>/

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};
module.exports = nextConfig;
