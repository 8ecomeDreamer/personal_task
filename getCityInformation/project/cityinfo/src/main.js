import Vue from 'vue'
import App from './App.vue'


// elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// baidu
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false

Vue.use(ElementUI)
// 引入百度api
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'Z4RMpCnkS3LjdHWi2IxcjSuhjQlIN8BH'
})


new Vue({
  render: h => h(App),
}).$mount('#app')


