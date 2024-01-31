/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "m.imdb.com",
            },
            {
                protocol: "https",
                hostname: "image.tmdb.org",
            },
            {
                protocol: "https",
                hostname: "themoviedb.org",
            }, 
            {
                protocol: "https",
                hostname: "www.google.com",
            }, 
            {
                hostname: "www.themoviedb.org",
            }
        ],
    },
};

module.exports = nextConfig
