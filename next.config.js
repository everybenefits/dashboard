/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  cleanDistDir: true,
  optimizeFonts: true,
  trailingSlash: true,
  generateEtags: true,
  productionBrowserSourceMaps: true,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  httpAgentOptions: {
    keepAlive: true,
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    localeDetection: true,
  },
};

module.exports = nextConfig;
