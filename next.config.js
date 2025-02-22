/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Add the Sanity image domain
  },
};

export default nextConfig; // Use export default
