import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/global.css'
import '@/assets/styles/reset.css'
import ElementUI from 'element-ui';
import Loading from '../src/components/Loading'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/fonts/font.css'
import Foot from '@/components/Foot.vue'
import cookie from '@/utils/cookie.js'
import VueCookies from 'vue-cookies'
Vue.use(ElementUI);
Vue.use('v-loading',Loading)
Vue.prototype.cookie = cookie;
Vue.use(VueCookies)
Vue.component("Foot", Foot);
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
},
}).$mount('#app')