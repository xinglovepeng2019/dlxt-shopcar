import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 引入第三方包里的css文件
import 'bootstrap/dist/css/bootstrap.css'

axios.defaults.baseURL = "https://www.escook.cn"

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
