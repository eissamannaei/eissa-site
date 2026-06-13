import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Static export — produces an `out/` folder of plain HTML/CSS/JS to upload
  // to any static host (no Node server, no middleware).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Pin the workspace root to this project (avoids picking up a parent lockfile)
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
