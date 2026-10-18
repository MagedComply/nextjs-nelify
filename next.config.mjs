/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyjson.com'
      },
        {
        protocol: 'https',
        hostname: 'mwjb.net'
      }
    ]
  }
};

export default nextConfig;
