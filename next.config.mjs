/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static export
  images: {
    unoptimized: true, // needed if you use next/image on static hosting
  },
  // optional but often useful on static hosting:
  trailingSlash: true,
};

export default nextConfig;
