require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  webpack: config => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(['BLOGGER_URL', 'API_KEY'])
    )
    return config
  }
}
