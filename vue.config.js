const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/home/',
  transpileDependencies: [
    'vuetify'
  ],

  outputDir: 'docs'
})
