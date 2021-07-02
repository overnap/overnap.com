require('ts-node').register({
  project: './tsconfig.json',
  extends: {}
})

exports.createPages = require('./src/gatsby/createPages').default
exports.onCreateNode = require('./src/gatsby/onCreateNode').default
exports.createSchemaCustomization = require('./src/gatsby/createSchemaCustomization').default
