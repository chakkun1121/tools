module.exports = {
  output: "export",
  // basePath: process.env.GITHUB_ACTIONS && "/tools/",
  // trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chakkun1121.github.io",
        port: "",
        pathname: "/tools/**",
      },
    ],
  },
};
