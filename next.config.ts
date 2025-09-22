// next.config.ts
import type { NextConfig } from "next";

const repo = "yash-portfolio";
const isGH = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGH ? `/${repo}` : "",
  assetPrefix: isGH ? `/${repo}/` : undefined, // note the trailing slash
};

export default nextConfig;
