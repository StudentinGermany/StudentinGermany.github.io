/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
   // Enable static export
   output: 'export',  // Tells Next.js to export as static files
   images: {
    unoptimized: true,   // GitHub Pages doesn't support Next.js Image Optimization
  },
  // basePath: '/studentingermany.github.io', 
   // Optional: Add trailing slashes for GitHub Pages compatibility
   trailingSlash: true,
}

export default nextConfig
