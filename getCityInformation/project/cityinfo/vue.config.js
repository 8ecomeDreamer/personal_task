const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

})


// module.exports = {
//   entry: {},
//   module: {},
//   devServer: {
//       historyApiFallback: true,
//       proxy: [{
//           context: '/login',
//           target: 'https://www.apispace.com/',  // 代理跨域目标接口
//           changeOrigin: true,
//           secure: false,  // 当代理某些https服务报错时用
//           cookieDomainRewrite: 'www.domain1.com'  // 可以为false，表示不修改
//       }],
//       noInfo: true
//   }
// }

