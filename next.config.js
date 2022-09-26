/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media-exp1.licdn.com']
  },
  experimental:{
    swcPlugins:[
      ['next-superjson-plugin', {}],
    ]
  },
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US'
  }
}

module.exports = nextConfig
