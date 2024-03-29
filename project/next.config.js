const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en", "hr"],
    defaultLocale: "en",
    localeDetection: false,
  },
};
module.exports = nextConfig;
