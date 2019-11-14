const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: isProduction ? 'http://m1.v1.com' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  
  configureWebpack: (config) => {
    // 关闭 webpack 的性能提示
    if (isProduction) {
      // 为生产环境修改配置...
      config.mode = 'production';
      config.plugins.push(new CompressionWebpackPlugin({ // 资源压缩
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8,
    }))
    } else {
    // 为开发环境修改配置...
      config.mode = 'development';
    }
  },

pwa: {
  name: 'vvv',
  themeColor: '#4DBA87',
  msTileColor: '#000000',
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppStatusBarStyle: 'black',

  favicon32: 'static/img/icons/favicon-32x32.png',
  favicon16: 'static/img/icons/favicon-16x16.png',
  appleTouchIcon: 'static/img/icons/apple-touch-icon-152x152.png',
  maskIcon: 'static/img/icons/safari-pinned-tab.svg',
  msTileImage: 'static/img/icons/msapplication-icon-144x144.png',

  workboxPluginMode: 'GenerateSW', //  workboxPluginMode: 'InjectManifest',
  workboxOptions: {
    navigateFallback: '/index.html',
    runtimeCaching: [{
      urlPattern: new RegExp('api/'),
      handler: 'NetworkFirst',
      options: {
        networkTimeoutSeconds: 20,
        cacheName: 'api-cache',
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    }]
}
},
lintOnSave: false, // 关闭eslink
  chainWebpack: config => {
  const svgRule = config.module.rule('svg')
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
        svgRule.uses.clear(); //重点:删除默认配置中处理svg,
  config.performance.set('maxEntrypointSize', 2048 * 1024); // build警告
  config.performance.set('maxAssetSize', 1024 * 1024); // build警告
  config.module
    .rule('svg-sprite-loader')
    .test(/\.svg$/)
    .include.add(resolve('src/icons')) //处理svg目录
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
        symbolId: 'icon-[name]'
    });
  config.module
    .rule('file-loader')
    .test(/\.(svg)(\?.*)?$/)
    .include.add(/node_modules/)
    .end()
    .use('file-loader')
    .loader('file-loader')
    .options({
        name: 'img/[name].[hash:8].[ext]'
    });
  config.resolve.alias
    .set('@', resolve('./src'))
    .set('@p', resolve('./src/pages'))
    .set('@c', resolve('./src/components'))
    .set('@m', resolve('./src/module'));
  if (isProduction) {
    config.optimization
    .runtimeChunk("single")
    .splitChunks({
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name(module) {
        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
          return `npm.${packageName.replace('@', '')}`;
        },
        },
        }
    });
  }
  return config
},

css: {
  extract: true,
  sourceMap: false,
  loaderOptions: {},
},

// 项目打包后 true 压缩加密
productionSourceMap: false,
pluginOptions: {
  'style-resources-loader': {
    preProcessor: 'scss',
    patterns: []
  }
}
}