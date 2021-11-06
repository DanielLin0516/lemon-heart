<template>
  <div>
    <div class="pictures-top">
      <div class="square">
        <img src="../../assets/pictures/Rectangle_25.png" alt="" />
      </div>
      <div class="pictures-text">
        <span>精选文章</span>
      </div>
      <div class="border-black">
        <div class="border-1">
          <img src="../../assets/pictures/unsplash_Av_NirIguEc.png" alt="" />
        </div>
        <div class="border-1-text">
          <span>致讨好型人格：你不必通过讨好换取爱</span>
        </div>
        <div class="border-1-text2">
          <span># 心理科普</span>
        </div>
        <div class="border-2">
          <img
            src="../../assets/pictures/思考图片素材IDVCG41pha295000017_1.png"
            alt=""
          />
        </div>
        <div class="border-2-text">
          <span>“我把自己活成了一座孤岛”：心中有爱，才会享受孤独</span>
        </div>
        <div class="border-2-text2">
          <span># 自我情绪</span>
        </div>
        <div class="border-3">
          <img
            src="../../assets/pictures/思考图片素材IDVCG211128975283_1.png"
            alt=""
          />
        </div>
        <div class="border-3-text">
          <span>你不经意中的人生“自我设限”，如何突破？</span>
        </div>
        <div class="border-3-text2">
          <span># 自我情绪</span>
        </div>
      </div>

      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        router
        active-text-color="black"
      >
        <el-menu-item index="/Article/ArticleHome">全部</el-menu-item>
        <el-menu-item index="/Article/Articlezhichang">职场技能</el-menu-item>
        <el-menu-item index="/Article/Articlekepu">心理科普</el-menu-item>
        <el-menu-item index="/Article/Articlehunlian">婚恋情感</el-menu-item>
        <el-menu-item index="/Article/Articlejiating">家庭关系</el-menu-item>
        <el-menu-item index="/Article/Articlerenji">人际社交</el-menu-item>
        <el-menu-item index="/Article/Articlejuecha">自我觉察</el-menu-item>
      </el-menu>
    </div>
    <div class="fixed" :class="yuanlaide">
      <div class="fixedline"></div>
      <span class="jingcai">精彩问答</span>
      <router-link to="/Qa"><div class="tiwen">去提问</div></router-link>
      <i class="el-icon-arrow-right"></i>
      <transition
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__swing"
      >
        <router-link to="/Qa"
          ><div class="wenda1 wen">
            {{this.random[0].questionTitile}}
          </div></router-link
        >
      </transition>
      <router-link to="/Qa"
        ><div class="wenda2 wen">
          {{this.random[1].questionTitile}}
        </div></router-link
      >
      <router-link to="/Qa"
        ><div class="wenda3 wen">
          {{this.random[2].questionTitile}}
        </div></router-link
      >
    </div>
    <div class="router">
      <transition
        name="animate__animated animate__bounce"
        leave-active-class="animate__bounceOutLeft"
      >
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import "animate.css";
import axios from 'axios';
export default {
  name: "Article",
  data() {
    return {
      yuanlaide: "yuanlai",
      random:[],
    };
  },
  methods: {
    onScroll() {
      // 计算滚动的距离
      let scrolled =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 计算A区的高度
      let header_height = null;
      let header_height1 = null;
      if (document.getElementsByClassName("pictures-top")[0]) {
        header_height =
          document.getElementsByClassName("pictures-top")[0].offsetHeight;
        header_height1 = document.getElementsByClassName("white")[0].offsetTop +400
      }
      //  console.log(
      //   "滚动的距离:" + scrolled,
      //   "头部的高度:" + header_height,
      //   "下面的white高度:" + header_height1
      // ); 
      // 当滚动的距离等于A区的高度的时候，即是临界点，马上通过auto_fixed变量，给B区添加一个
      // class，让B区浮起来
      if (scrolled >= header_height - 150) {
        if (scrolled <= header_height1) {
          this.yuanlaide = "houlai";
          // console.log("1");
        }else{
        this.yuanlaide = "yuanlai";
        // console.log("2");
      } }else{
        this.yuanlaide = "yuanlai";
        // console.log("2");
      }
    },
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener("scroll", this.onScroll);
    });
    axios.get('http://39.107.67.145:9000/question/listRandomThree').then(
      response =>{
        console.log('成功请求next',response.data.data)
        this.random = response.data.data
    },error => {
      console.log('请求失败next',error)
    })
  },
};
</script>

<style scoped>
.animate__bounceOutLeft {
  animation-duration: 0.3s;
}
.pictures-top {
  height: 950px;
  position: relative;
}
.square img {
  position: absolute;
  top: 102px;
  left: 259px;
  width: 47px;
}
.pictures-text span {
  position: absolute;
  top: 113.1px;
  left: 291px;
  width: 144px;
  height: 47.5px;
  /* background: rgba(71, 71, 71, 1); */
  color: rgba(71, 71, 71, 1);
  font-family: PingFang SC;
  font-size: 36px;
}
.border-black {
  width: 1400px;
  height: 500px;
  border: 0.6px solid rgba(0, 0, 0, 1);
  box-sizing: border-box;
  position: relative;
  top: 191px;
  left: 260px;
  margin-bottom: 260px;
}
.border-1 img {
  width: 405px;
  height: 367px;
  position: absolute;
}
.border-2 img {
  width: 515px;
  height: 246px;
  position: absolute;
  left: 405px;
  top: 251px;
  z-index: 99;
}

.border-3 img {
  position: absolute;
  width: 530px;
  height: 252px;
  left: 860px;
  right: 0;
  top: 0px;
  z-index: 1;
}
.border-1-text span {
  position: absolute;
  width: 346px;
  height: 68px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 24px;
  line-height: 139.999998%;
  left: 31px;
  top: 383px;
}
.border-1-text2 span {
  color: rgba(97, 97, 97, 1);
  font-family: PingFang-Regular;
  font-size: 18px;
  width: 98px;
  height: 23px;
  position: absolute;
  left: 35px;
  top: 475px;
}
.border-2-text span {
  width: 348px;
  height: 68px;
  text-align: right;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 24px;
  line-height: 139.999998%;
  position: absolute;
  top: 82px;
  left: 491px;
}
.border-2-text2 span {
  width: 98px;
  height: 23px;
  color: rgba(97, 97, 97, 1);
  font-family: PingFang-Regular;
  font-size: 18px;
  position: absolute;
  left: 741px;
  top: 170px;
}
.border-3-text span {
  position: absolute;
  left: 954px;
  top: 351px;
  width: 375px;
  height: 68px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 24px;
  line-height: 139.999998%;
}
.border-3-text2 span {
  position: absolute;
  top: 439px;
  left: 954px;
  width: 98px;
  height: 23px;
  color: rgba(97, 97, 97, 1);
  font-family: PingFang-Regular;
  font-size: 18px;
}

.el-menu-demo {
  position: relative;
  top: 0px;
  left: 259px;
  display: inline-block;
}
.router {
  position: relative;
  left: 259px;
  top: -80px;
  display: inline-block;
}
.fixed {
  background-color: opacity;
  width: 331.4px;
  height: 337px;
  right: 235px;
}
.yuanlai {
  top: 950px;
  position: absolute;
}
.houlai {
  top: 185px;
  position: fixed;
  right: 235px;
  z-index: 999;
}
.xiamianyuanlai {
  position: absolute;
  top: 1377px;
}
.fixed-active {
  position: fixed;
  background-color: opacity;
  width: 331.4px;
  height: 337px;
  top: 0px;
  right: 235px;
}
.fixedline {
  width: 0.6px;
  height: 337px;
  background-color: black;
  float: left;
}
.jingcai {
  position: relative;
  top: 0px;
  left: 24.4px;
  width: 96px;
  height: 34px;
  color: rgba(71, 71, 71, 1);
  font-family: PingFang SC;
  font-size: 24px;
}
.tiwen {
  top: 0;
  position: absolute;
  left: 268.4px;
  width: 60px;
  height: 22px;
  color: rgba(97, 97, 97, 1);
  font-family: PingFang SC;
  font-size: 15px;
}
.wenda1 {
  position: absolute;
  top: 58px;
  left: 24.4px;
}
.wenda2 {
  position: absolute;
  top: 156px;
  left: 24.4px;
}
.wenda3 {
  position: absolute;
  top: 254px;
  left: 24.4px;
}
.wen {
  width: 307px;
  height: 48px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 18px;
  line-height: 130.799997%;
}
.el-icon-arrow-right {
  position: absolute;
  font-size: 8px;
  width: 8px;
  height: 1px;
  right: 0;
}
</style>