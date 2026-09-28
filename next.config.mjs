/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/webcam-circles',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig