/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: '/.well-known/apple-app-site-association',
                headers: [
                  {
                    key: 'Content-Type',
                    value: 'application/json',
                  },
                ],
            },
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Referrer-Policy',
                        value: 'origin',
                    },
                ],
            },
        ]
    },
}

export default nextConfig
