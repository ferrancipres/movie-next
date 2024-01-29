/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "image.tmdb.org",
                hostname: "www.google.com"
            }
        ]
    }
}

module.exports = nextConfig
