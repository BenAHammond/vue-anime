// webpack.config.js
const nodeExternals = require('webpack-node-externals')

module.exports = {
devtool: 'inline-cheap-module-source-map', 
  externals: [nodeExternals()],
  mode: 'development',
  output: {
    // ...
    // use absolute paths in sourcemaps (important for debugging via IDE)
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  }
}