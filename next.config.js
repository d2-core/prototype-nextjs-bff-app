/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async rewrites() {
    const {
      NEXT_PUBLIC_STAGE,
      NEXT_PUBLIC_API_AUTH_URL,
      NEXT_PUBLIC_DEV_API_AUTH_URL,
      NEXT_PUBLIC_API_EVNET_URL,
      NEXT_PUBLIC_DEV_API_EVNET_URL,
      NEXT_PUBLIC_API_NOTIFICATION_URL,
      NEXT_PUBLIC_DEV_API_NOTIFICATION_URL,
      NEXT_PUBLIC_API_PRODUCT_URL,
      NEXT_PUBLIC_DEV_API_PRODUCT_URL,
    } = process.env
    return [
      {
        source: '/auth/:path*/',
        destination:
          NEXT_PUBLIC_STAGE === 'PROD'
            ? `${NEXT_PUBLIC_API_AUTH_URL}/auth/:path*`
            : `${NEXT_PUBLIC_DEV_API_AUTH_URL}/auth/:path*`,
      },
      {
        source: '/event/:path*/',
        destination:
          NEXT_PUBLIC_STAGE === 'PROD'
            ? `${NEXT_PUBLIC_API_EVNET_URL}/event/:path*`
            : `${NEXT_PUBLIC_DEV_API_EVNET_URL}/event/:path*`,
      },
      {
        source: '/notification/:path*/',
        destination:
          NEXT_PUBLIC_STAGE === 'PROD'
            ? `${NEXT_PUBLIC_API_NOTIFICATION_URL}/notification/:path*`
            : `${NEXT_PUBLIC_DEV_API_NOTIFICATION_URL}/notification/:path*`,
      },
      {
        source: '/product/:path*/',
        destination:
          NEXT_PUBLIC_STAGE === 'PROD'
            ? `${NEXT_PUBLIC_API_PRODUCT_URL}/product/:path*`
            : `${NEXT_PUBLIC_DEV_API_PRODUCT_URL}/product/:path*`,
      },
    ]
  },
  trailingSlash: true,
}

module.exports = nextConfig
