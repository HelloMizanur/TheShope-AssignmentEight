/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // এটি যেকোনো ডোমেইন অ্যালাউ করবে
        port: "",
        pathname: "**", // এটি ডোমেইনের ভেতরের যেকোনো পাথ অ্যালাউ করবে
      },
      {
        protocol: "http", // অনেক সময় কিছু সোর্স http হতে পারে, তাই এটিও যোগ করা নিরাপদ
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
