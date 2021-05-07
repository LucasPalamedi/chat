const path = require('path')

module.exports = {
  webpack: (config) => {
    // consertar pacotes npm isso depende do modo `fs`
    config.node = {
      fs: 'empty'
    }

    return config
  },
  assetPrefix: './',
  exportPathMap: (a, b) => {
    console.log(a, b)

    return {
      '/': { page: '/' }
    }
  }
}
