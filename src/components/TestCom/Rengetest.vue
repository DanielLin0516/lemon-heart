<template>
  <div>
    <div class="up-img">
      <img src="../..\assets\pictures\人格测试gif1.gif" alt="">
    </div>
    <div class="middle-img" :class="yuanlaide">
      <img src="../..\assets\pictures\人格测试动图背景.gif" alt="">
    </div>
    <div class="center-Qa">
        <div class="up">
          <div class="clock"><img src="../..\assets\pictures\Time_Machine.png" alt=""></div>
          <span class="time">预计时间：3分钟</span>
        </div>
        <div class="fuhe">
          <span yinsi>请尽量选择符合和不符合，并且选择你最真实的情况，我们会保护你的隐私</span>
        </div>
        <TestToTal></TestToTal>
            <ArticledetailBottom class="bot"></ArticledetailBottom>
    </div>

  </div>
</template>

<script>
import ArticledetailBottom from '../../components/ArticleCom/ArticledetailBottom.vue'
import TestToTal from '../../components/TestCom/TestTotal.vue'
export default {
    name:'Rengetest',
    components:{TestToTal,ArticledetailBottom},
    data() {
      return {
        yuanlaide:'yuanlai'
      }
    },
    methods:{
      onScroll() {
      // 计算滚动的距离
      let scrolled =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 计算A区的高度
      let header_height = null;
      let header_height1 = null;
      if (document.getElementsByClassName("middle-img")[0]) {
        header_height =
          document.getElementsByClassName("middle-img")[0].offsetHeight;
        header_height1 =
          document.getElementsByClassName("bot")[0].offsetTop ;
      }
      //  console.log(
      //   "滚动的距离:" + scrolled,
      //   "头部的高度:" + header_height,
      //   "下面的Foots高度:" + header_height1
      // );
      // 当滚动的距离等于A区的高度的时候，即是临界点，马上通过auto_fixed变量，给B区添加一个
      // class，让B区浮起来
      if (scrolled >= header_height - 100) {
        if (scrolled <= header_height1) {
          this.yuanlaide = "houlai";
          // console.log("1");
        } else {
          this.yuanlaide = "yuanlai";
          // console.log("2");
        }
      } else {
        this.yuanlaide = "yuanlai";
        // console.log("2");
      }
    },
    },
    mounted(){
    this.$nextTick(function () {
      window.addEventListener("scroll", this.onScroll);
    });
    window.scrollTo(0,0);
    }
}
</script>

<style scoped>
.up-img{
  height: 439px;
}
img{
  height: 100%;
  width: 100%;
}
.middle-img{
  height: 725px;

}
.yuanlai{
  position: relative;
  top: 172px;
}
.houlai{
  position: fixed;
  top: 150px;
}
.up{
  display: flex;
  justify-content: center;
}
.center-Qa{
  position: absolute;
  width: 1150px;
  height: 300px;
  left: 409px;
  top: 660px;
}
.clock{
  width: 24px;
  height: 24px;
  float: left;
  position: relative;
  left: -10px;
}
.time{
  width: 183px;
  height: 34px;
  color: rgba(71, 71, 71, 1);
  font-family: PingFang-Regular;
  font-size: 24px;
  float: left;
}
.fuhe{
  width: 100%;
  height: 22px;
  color: rgba(130, 130, 130, 1);
  font-family: PingFang-Regular;
  font-size: 16px;
  display: flex;
  justify-content: center;
}
.bot{
  margin-left: -410px;
  margin-top: 200px;
}
</style>