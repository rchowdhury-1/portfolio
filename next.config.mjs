/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    serverComponentsExternalPackages: ["gray-matter", "next-mdx-remote"],
  },
};

export default nextConfig;
