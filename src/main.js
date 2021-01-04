import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import echarts from 'echarts'
import '@/assets/css/common.css'
Vue.config.productionTip = false

Vue.prototype.$echarts = echarts 
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
