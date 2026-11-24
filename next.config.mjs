/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  experimental: { serverComponentsExternalPackages: ['emoji-mixer'] }
};
export default nextConfig;
