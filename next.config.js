const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // if(isServer) {

    // } else {
      config.module = {
        ...(config.module || {}),
        rules: [
          ...(config.module.rules || []),
          {
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader',
          },
        ],
      }
    // }
    return config
  },
}

module.exports = nextConfig
