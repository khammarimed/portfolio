import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // This creates a static HTML export
  basePath: '/portfolio', // Matches your repository name
  images: {
    unoptimized: true,   // Required because GitHub Pages doesn't support Next.js Image Optimization
  },
};

export default nextConfig;
