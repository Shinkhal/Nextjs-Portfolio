/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint:{
    ignoreDuringBuilds:true,
  },
  reactStrictMode: false,
    images: {
      domains: ['assets.aceternity.com',
        'aceternity.com',

      ],
    },
  };
  
  export default nextConfig;
  