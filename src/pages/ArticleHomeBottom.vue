<template>
  <div>
    <div class="white"></div>
    <div class="background">
      <div>
        <img class="center" src="..\assets\pictures\Rectangle_25.png" alt="" />
      </div>
      <span class="xinli">心理测试</span>
      <div>
        <img class="line1" src="..\assets\pictures\line1.png" alt="" />
      </div>
      <div>
        <span class="ren">人</span>
        <span class="ge">格</span>
        <span class="xingge">看看你属于哪种性格</span>
        <el-button class="button1" size="small">
          <div><router-link to="/Test">去测试</router-link></div>
        </el-button>
        <div>
          <img class="line2" src="..\assets\pictures\line1.png" alt="" />
        </div>
        <span class="jiao">焦</span>
        <span class="lv">虑测试</span>
        <span class="rensheng">别让焦虑摧毁你的人生</span>
        <el-button class="button2" size="small">
          <div><router-link to="/Test">去测试</router-link></div>
        </el-button>
        <div>
          <img class="line3" src="..\assets\pictures\line1.png" alt="" />
        </div>
        <span class="yi">抑</span>
        <span class="yu">郁测试</span>
        <span class="zhuangtai">测测你的抑郁情绪状态</span>
        <el-button class="button3" size="small">
          <div><router-link to="/Test">去测试</router-link></div>
        </el-button>
      </div>
      <div class="gengduo">
        <router-link to="/Test">更多心理测试</router-link>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="Foots">
      <div class="lemon-logo">
        <router-link to="/Home">
          <img src="../assets/pictures/Group_15.png" alt="" />
        </router-link>
      </div>
      <div class="bottom-text">
        <router-link to="/Home">柠檬心理</router-link>
      </div>
      <div class="box1">
        <div>
          <router-link to="/Article/ArticleHome">精选文章</router-link>
        </div>
        <div>
          <router-link to="/Article/ArticleHome">心理科普</router-link>
        </div>
        <div>
          <router-link to="/Article/ArticleHome">人际社交</router-link>
        </div>
        <div>
          <router-link to="/Article/ArticleHome">恋爱关系</router-link>
        </div>
      </div>
      <div class="box2">
        <div>
          <router-link to="/Qa">心理问答</router-link>
        </div>
        <div>
          <router-link to="/Qa">精彩问答</router-link>
        </div>
        <div>
          <router-link to="/Qa">邀请解答</router-link>
        </div>
      </div>
      <div class="box3">
        <div>
          <router-link to="/Test">心理测试</router-link>
        </div>
        <div>
          <router-link to="/Test">焦虑度测试</router-link>
        </div>
        <div>
          <router-link to="/Test">自卑度测试</router-link>
        </div>
        <div>
          <router-link to="/Test">人格测试</router-link>
        </div>
      </div>
      <div class="box4">
        <div>
          <router-link to="/Book">心理图书</router-link>
        </div>
        <div>
          <router-link to="/Book">推荐图书</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  width: 1920px;
  height: 690.4px;
  margin-left: -260px;
  margin-bottom: 2px black solid;
}
.white {
  margin-left: -258px;
  width: 1920px;
  height: 196.4px;
  border-bottom: 0.6px black solid;
}
.center {
  width: 47px;
  position: relative;
  left: 871px;
  top: 119px;
}
span.xinli {
  position: relative;
  top: 88px;
  left: 900px;
  color: rgba(71, 71, 71, 1);
  font-family: PingFang-Regular;
  font-size: 36px;
  height: 47px;
}
.line1 {
  position: relative;
  top: 178px;
  left: 373px;
  height: 180px;
  width: 0.6px;
}
.ren {
  position: relative;
  left: 413px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 48px;
  top: 24px;
}
.ge {
  top: 26px;
  position: relative;
  left: 414px;
  font-size: 24px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
}
.xingge {
  position: relative;
  left: 340px;
  top: 74px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 18px;
}
.button1 {
  position: relative;
  top: 122px;
  width: 108px;
  height: 40px;
  border: 1px black solid;
  left: 175px;
}
.line2 {
  position: relative;
  top: -58px;
  left: 854px;
  height: 180px;
  width: 0.6px;
}
.jiao {
  position: relative;
  top: -211px;
  left: 894px;
  width: 120px;
  height: 53px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 48px;
}
.lv {
  font-size: 24px;
  position: relative;
  top: -209px;
  left: 897px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
}
.rensheng {
  position: relative;
  top: -162px;
  left: 775px;
  width: 224px;
  height: 20px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 18px;
}
.button2 {
  position: relative;
  top: -115px;
  left: 590px;
  width: 108px;
  height: 40px;
  border: 1px black solid;
}
.line3 {
  position: relative;
  left: 1335px;
  top: -295px;
  height: 180px;
  width: 0.6px;
}
.yi {
  position: relative;
  left: 1375px;
  top: -449px;
  width: 120px;
  height: 53px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 48px;
}
.yu {
  position: relative;
  top: -445px;
  left: 1378px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 24px;
}
.zhuangtai {
  position: relative;
  top: -400px;
  width: 224px;
  height: 20px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 18px;
  left: 1256px;
}
.button3 {
  position: relative;
  top: -351px;
  width: 108px;
  height: 40px;
  border: 1px black solid;
  left: 1075px;
}
.gengduo a {
  text-decoration: underline;
  color: rgba(97, 97, 97, 1);
  font-family: PingFang SC;
  font-size: 21px;
  position: absolute;
}
.gengduo {
  position: relative;
  left: 895px;
  width: 150px;
  height: 25px;
  top: -260px;
}
.el-icon-arrow-right {
  position: relative;
  left: 130px;
  width: 9px;
  text-align: center;
  top: 0px;
  /* background: rgba(97, 97, 97, 1); */
}
.Foots {
  border-top: 2px black solid;
  margin-left: -260px;
  width: 1920px;
  height: 460px;
  background-color: rgba(177, 243, 243, 1);
  position: relative;
  top: -40px;
}
.lemon-logo img {
  width: 51px;
  position: absolute;
  top: 185.6px;
  left: 175.9px;
}
.bottom-text {
  position: absolute;
  color: rgba(0, 0, 0, 1);
  font-family: Alibaba PuHuiTi;
  font-weight: 300;
  font-size: 24px;
  letter-spacing: 18%;
  left: 232px;
  top: 197px;
}
.bottom-text a {
  color: rgba(0, 0, 0, 1);
  font-family: Alibaba PuHuiTi;
  font-weight: 300;
  font-size: 24px;
  letter-spacing: 18%;
}
.box1 {
  position: absolute;
  left: 573px;
  top: 140px;
}
.box1 a {
  display: inline-block;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 18px;
  line-height: 130.765629%;
  margin-bottom: 36px;
}
.box2 {
  position: absolute;
  top: 140px;
  left: 857px;
}
.box2 a {
  display: inline-block;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 18px;
  line-height: 130.765629%;
  margin-bottom: 36px;
}
.box3 {
  position: absolute;
  top: 140px;
  left: 1141px;
}
.box3 a {
  display: inline-block;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 18px;
  line-height: 130.765629%;
  margin-bottom: 36px;
}
.box4 {
  position: absolute;
  top: 140px;
  left: 1425px;
}
.box4 a {
  display: inline-block;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 18px;
  line-height: 130.765629%;
  margin-bottom: 36px;
}
</style>