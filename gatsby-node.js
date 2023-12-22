require('ts-node').register({
  project: './tsconfig.json',
  extends: {},
})

exports.createPages = require('./src/gatsby/createPages').default
exports.onCreateNode = require('./src/gatsby/onCreateNode').default
exports.createSchemaCustomization =
  require('./src/gatsby/createSchemaCustomization').default
exports.onCreateWebpackConfig = ({ actions, rules, loaders, getConfig }) => {
  const config = getConfig()
  const fonts = rules.fonts()
  fonts.use = [loaders.file()]
  config.module.rules = [
    ...config.module.rules.filter(
      rule => !String(rule.test).includes('woff(2)?'),
    ),
    fonts,
  ]
  actions.replaceWebpackConfig(config)
} // see https://github.com/gatsbyjs/gatsby/discussions/28332#discussioncomment-211908
