import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/global.css'
import '@/assets/styles/reset.css'
import { Row,Col,Button,MenuItem,Menu,Skeleton,SkeletonItem,Card,Icon,Pagination,Alert } from 'element-ui'
import '@/assets/fonts/font.css'
import Foot from '@/components/Foot.vue'
import cookie from '@/utils/cookie.js'
import VueCookies from 'vue-cookies'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.component(Row);
Vue.component(Col.name,Col);
Vue.component(Button.name,Button);
Vue.component(MenuItem.name,MenuItem);
Vue.component(Skeleton.name,Skeleton);
Vue.component(Menu.name,Menu);
Vue.component(SkeletonItem.name,SkeletonItem);
Vue.component(Card.name,Card);
Vue.component(Icon.name,Icon);
Vue.component(Pagination.name,Pagination);
Vue.component(Alert.name,Alert);


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