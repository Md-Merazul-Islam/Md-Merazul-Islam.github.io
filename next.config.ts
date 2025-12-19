// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export", // required for GitHub Pages
  images: {
    unoptimized: true,
  },
};



export default nextConfig;
