import Vue from 'vue'
import './assets/css/border.css'
import './assets/css/reset.css'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
