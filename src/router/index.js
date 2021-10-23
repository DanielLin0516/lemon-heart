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
import Articlekepu from '../pages/Articlekepu'
import Articlerenji from '../pages/Articlerenji'
import Articleziwo from '../pages/Articleziwo'
import Articlelianai from '../pages/Articlelianai'
import Articlexueye from '../pages/Articlexueye'
import Articlejiating from '../pages/Articlejiating'


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
        path:'Articlekepu',
        component:Articlekepu,
      },
      {
        path:'Articlerenji',
        component:Articlerenji,
      },
      {
        path:'Articleziwo',
        component:Articleziwo,
      },
      {
        path:'Articlelianai',
        component:Articlelianai,
      },
      {
        path:'Articlexueye',
        component:Articlexueye,
      },
      {
        path:'Articlejiating',
        component:Articlejiating,
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