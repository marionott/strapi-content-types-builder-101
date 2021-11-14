const withSourceMaps = require('@zeit/next-source-maps')()

const { API_URL } = process.env

module.exports = withSourceMaps({
  sassOptions: {
    includePaths: ['src'],
  },
  images: {
    domains: [],
  },
  env: {
    API_URL,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { ref: true },
        },
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
          },
        },
      ],
    })

    return config
  },
})
