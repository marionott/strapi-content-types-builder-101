const withSourceMaps = require('@zeit/next-source-maps')()
const path = require('path')

const { API_URL } = process.env

module.exports = withSourceMaps({
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
  images: {
    domains: [],
  },
  env: {
    API_URL,
  },
  webpack(config) {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              ref: true,
              svgoConfig: {
                plugins: {
                  removeDimensions: true,
                  removeViewBox: false,
                },
              },
            },
          },
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/images/',
              outputPath: 'static/images/',
            },
          },
        ],
      },
    ]

    return config
  },
})
