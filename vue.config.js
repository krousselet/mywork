const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // Rule for .pdf files
    config.module
      .rule('pdf')
      .test(/\.(pdf)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]',
      });
  },
});
