import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // Apache on Plesk handles /about/ better than /about.html
  images: {
    unoptimized: true,
  },
};

export default nextConfig;