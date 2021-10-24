import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '@/components/Article.vue'
import Book from '@/components/Book.vue'
import Login from '@/components/Login.vue'
import Qa from '@/components/Qa.vue'
import Register from '@/components/Register.vue'
import Test from '@/components/Test.vue'
import Home from '@/components/Home.vue'
import ArticleHome from '../pages/ArticleHome'
import Articlezhichang from '../pages/Articlezhichang'
import Articlekepu from '../pages/Articlekepu'
import Articlehunlian from '../pages/Articlehunlian'
import Articlejiating from '../pages/Articlejiating'
import Articlerenji from '../pages/Articlerenji'
import Articlejuecha from '../pages/Articlejuecha'


Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path:'/Home',
      component:Home,
    },
    {
      path:'/Article',
      component:Article,
      children:[
      {
        path:'ArticleHome',
        component:ArticleHome,
      },
      {
        path:'Articlezhichang',
        component:Articlezhichang,
      },
      {
        path:'Articlekepu',
        component:Articlekepu,
      },
      {
        path:'Articlehunlian',
        component:Articlehunlian,
      },
      {
        path:'Articlejiating',
        component:Articlejiating,
      },
      {
        path:'Articlerenji',
        component:Articlerenji,
      },
      {
        path:'Articlejuecha',
        component:Articlejuecha,
      }
    ]
    },
    {
      path:'Book',
      component:Book,
    },
    {
      path:'Qa',
      component:Qa,
    },
    {
      path:'Test',
      component:Test,
    },
    {
      path:'Login',
      component:Login,
    },
    {
      path:'Register',
      component:Register,
    }
  ]
})

export default router