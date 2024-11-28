/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*', // 들어오는 요청 경로 패턴
        destination: 'http://localhost:8080/:path*', // 라우팅하려는 경로
      },
    ]
  },
}

module.exports = nextConfig
