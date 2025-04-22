/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint:{
    ignoreDuringBuilds:true,
  },
  reactStrictMode: false,
    images: {
      domains: ['assets.aceternity.com',
        'aceternity.com',
        'userpic.codeforces.org',
        'leetcard.jacoblin.cool',
        'd2v119jmdj3sxo.cloudfront.net',
        'assets.leetcode.com',
        'leetcode.com'
      ],
    },
  };
  
  export default nextConfig;
  