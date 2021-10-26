import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/global.css'
import '@/assets/styles/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/fonts/font.css'
import lottie from 'vue-lottie'
Vue.component('lottie',lottie)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
},
}).$mount('#app')
