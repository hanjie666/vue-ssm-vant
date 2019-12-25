import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 全局引入UI库 vant
import '@/plugins/vant'
// 全局引入rem
import '@/config/rem'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
