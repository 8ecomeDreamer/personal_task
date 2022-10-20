const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/as/': {//代理标识，一般是每个接口前的相同部分
        target: 'https://eolink.o.apispace.com', // 这里写的是访问接口的域名和端口号
        changeOrigin: true, // 允许跨域请求
        pathRewrite: { // 重写路径，替换请求地址中的指定路径
          '^/as': '/'
        },
        "headers": {
          "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Mobile Safari/537.36"
        }
      }
      
    }
  }

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

