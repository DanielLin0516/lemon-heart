import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '@/components/ArticleCom/Article.vue'
import ArticleHome from '../components/ArticleCom/ArticleHome'
import Articlezhichang from '../components/ArticleCom/Articlezhichang'
import Articlekepu from '../components/ArticleCom/Articlekepu'
import Articlehunlian from '../components/ArticleCom/Articlehunlian'
import Articlejiating from '../components/ArticleCom/Articlejiating'
import Articlerenji from '../components/ArticleCom/Articlerenji'
import Articlejuecha from '../components/ArticleCom/Articlejuecha'
import PassageDetail from '../components/ArticleCom/PassageDetail'
import Book from '@/components/MoreCom/Book.vue'
import Login from '@/components/Login.vue'
import Qa from '@/components/QaCom/Qa.vue'
import Register from '@/components/Register.vue'
import Test from '@/components/TestCom/Test.vue'
import Home from '@/components/Home.vue'
import QAndA from '@/components/QaCom/QAndA.vue'
import PublishQ from '@/components/QaCom/PublishQ.vue'
import UserPage from '@/components/UserCom/UserPage.vue'
import Rengetest from '../components/TestCom/Rengetest.vue'
import Rengeresult from '../components/TestCom/Rengeresult.vue'
import cookie from '@/utils/cookie.js'

Vue.use(VueRouter)


const router = new VueRouter({
  routes: [{
    path: '/',
    component: Home,
  },
  {
    path: '/Home',
    component: Home,
  },
  {
    path: '/Article',
    component: Article,
    children: [
      {
        path: 'ArticleHome',
        component: ArticleHome,
      },
      {
        path: 'Articlezhichang',
        component: Articlezhichang,
      },
      {
        path: 'Articlekepu',
        component: Articlekepu,
      },
      {
        path: 'Articlehunlian',
        component: Articlehunlian,
      },
      {
        path: 'Articlejiating',
        component: Articlejiating,
      },
      {
        path: 'Articlerenji',
        component: Articlerenji,
      },
      {
        path: 'Articlejuecha',
        component: Articlejuecha,
      }
    ]
  },
  {
    name:'PassageDetail',
    path:'PassageDetail',
    component:PassageDetail,
  },
  {
    name:'Book',
    path: '/Book',
    component: Book,
  },
  {
    path: '/Qa',
    component: Qa,
  },
  {
    path: '/PublishQ',
    component: PublishQ,
  },
  {
    path: '/Qa/:id',
    component: QAndA,
  },
  {
    name:'Test',
    path: '/Test',
    component: Test,
  },
  {
    name:'Rengetest',
    path:'Rengetest',
    component:Rengetest,
  },
  {
    name:'Rengeresult',
    path:'Rengeresult',
    component:Rengeresult,
  },
  {
    path: '/Login',
    component: Login,
  },
  {
    path: '/Register',
    component: Register,
  },
  {
    path: '/UserPage',
    component: UserPage,
  }
  ],

});

// 路由守卫
router.beforeEach(function (to, from, next) {
  if (to.path == '/PublishQ') {
    if (!cookie.getCookie('userName')) {
      alert('请先登录');
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router;