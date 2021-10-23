<template>
  <div>
    <div class="container" :class="mood" >
      <el-row :gutter="10">
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
          <div class="grid-content bg-purple">
            <div class="logo">
              <router-link @click.native="ChangeColorHome" to='/Home'>
                <img src="./assets/pictures/Group_15.png">
              </router-link>
            </div>
          </div>
        </el-col>
        <el-col :xs="4" :sm="9" :md="9" :lg="9" :xl="9">
          <div class="grid-content bg-purple article title">
            <router-link to="/Home" @click.native="ChangeColorHome">柠檬心理</router-link>
          </div>
        </el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
          <div class="grid-content bg-purple article">
            <router-link to="/Article/ArticleHome" @click.native="ChangeColor">文章</router-link>
          </div>
        </el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
          <div class="grid-content bg-purple qa">
            <router-link to='/Qa'>问答</router-link>
          </div>
        </el-col>
        <el-col :xs="4" :sm="2" :md="2" :lg="2" :xl="2">
          <div class="grid-content bg-purple test">
            <router-link to='/Test'>心理测试</router-link>
          </div>
        </el-col>
        <el-col :xs="4" :sm="2" :md="2" :lg="2" :xl="2">
          <div class="grid-content bg-purple book">
            <router-link to='/Book'>心理图书</router-link>
          </div>
        </el-col>
        <el-col :xs="2" :sm="1" :md="1" :lg="1" :xl="1">
          <div class="grid-content bg-purple login">
            <router-link to="/Login">登录</router-link>
          </div>
        </el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
          <div class="grid-content bg-purple">
            <router-link to="/Register">
              <el-button round size='mini' class="register" :class="mood1">注册</el-button>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <div>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
  import Article from '@/components/Article.vue'
  import Book from '@/components/Book.vue'
  import Login from '@/components/Login.vue'
  import Qa from '@/components/Qa.vue'
  import Register from '@/components/Register.vue'
  import Test from '@/components/Test.vue'
  import Home from '@/components/Home.vue'
  export default {
    data() {
      return {
        mood:'active',
        mood1:''
      }
    },
    components: {
      Home,
      Article,
      Book,
      Login,
      Qa,
      Register,
      Test,
    },
    methods: {
      ChangeColor(){
        this.mood = 'active-1'
        this.mood1 = 'register-1'
      },
      ChangeColorHome(){
        this.mood = 'active'
        this.mood1 = ''
      }
      
    },
  }
</script>

<style lang='less' scoped>
  .container {
    width: 1920px;
    height: 80px;
    border-bottom: 0.6px solid rgba(0, 0, 0, 1);
    overflow: hidden;    
  }
  .active{
    background: rgba(177, 243, 243, 1); 
  }
  .active-1{
    background-color: rgb(253, 255, 255);
  }
  a {
    color: rgba(71, 71, 71, 1);
    line-height: 80px;
    font-family: PingFang SC;
    font-size: 20px;
  }

  a:hover{
    color:azure;
    font-size: 24px;
  }
  .title {
    font-family: Alibaba PuHuiTi;
    font-weight: 300;
    font-size: 24px;
    letter-spacing: 18%;
  }

  img {
    width: 35%;
    margin-left: 150px;
  }


  .login {
    padding-left: 10px;
  }

  .register {
    height: 40px;

  }
  .register-1{
    color:rgb(255, 255, 255) ;
    background-color: rgb(51, 51, 51);
  }
</style>