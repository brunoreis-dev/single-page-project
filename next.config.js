module.exports = {
  poweredByHeader: false,
  enableSvg: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    config.module.rules.push({
      test: /\.(eot|woff|woff2|svg|png|jpg|gif|heic)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
};
