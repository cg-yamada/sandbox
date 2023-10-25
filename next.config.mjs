/**
 * @type {import('next').NextConfig}
 * @see https://nextjs.org/docs/app/api-reference/next-config-js/optimizePackageImports
 * ブラウザで実行されない、サーバーでビルドされるファイル
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'sandbox.vercel.app', 'sandbox.api.com', 'stg.api.com'],
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'no-index',
          },
        ],
      },
      {
        source: '/:any*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'no-index',
          },
        ],
      },
    ]
  },
}

export default nextConfig
