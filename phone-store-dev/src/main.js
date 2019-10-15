import Vue from 'vue'
import './assets/css/border.css'
import './assets/css/reset.css'
import App from './App.vue'
import router from "./router/index"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
