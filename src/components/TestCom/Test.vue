<template>
  <div>
    <!-- 图片 -->
    <div class="up">
      <img class="upimage" src="../..\assets\pictures\心理测试背景.gif" alt="" />
    </div>
    <!-- 表格 -->
    <div>
      <div class="form">
        <div class="form_up">
          <div class="renge"><span>人</span>格测试</div>
          <div class="tongguo">
            通过TheBigFive（大五类人格特征）来描述人的人格与个性,大五类因素包括：严谨性、外向性、开放性、宜人性与神经质人格特质。
          </div>
          <button class="test1" @click="lala"><span>去测试</span></button>
        </div>
        <div class="middle">
          <div class="middle-left">
            <div class="ceshi"><span>抑</span>郁度测试</div>
            <div class="yiyu">
              《抑郁测试》（专业版）的编制主要以此为依据，从生理、精神两方面来评估你的抑郁情况。
            </div>
            <button class="test2"><span>去测试</span></button>
          </div>
        </div>
        <div class="middle-right">
          <div class="right-bar">
            <div class="yali"><span>压</span>力测试</div>
            <div class="xuejia">
              由心理学家Catherine Maillard
              编制，它可以帮助你了解自己的压力类型，以及合适的减压方式。
            </div>
            <button class="test3"><span>去测试</span></button>
          </div>
        </div>
        <div class="bottom-left">
          <div class="b-left-bar">
            <div class="jiaolvdu"><span>焦</span>虑度测试</div>
            <div class="biaoge">
              《焦虑自评量表》是世界上最著名的心理健康测试量表之一，也是当前使用最为广泛的精神障碍和心理疾病门诊检查量表。
            </div>
            <button class="test4"><span>去测试</span></button>
          </div>
        </div>
        <div class="bottom-right">
          <div class="b-r">
            <div class="zibeidu"><span>自</span>卑度测试</div>
            <div class="gexing">
              本测评将从家庭、个性、社交、能力等6个方面去分析你的自卑来源，并针对你的结果，提出改善方案，帮助你从觉察自卑到突破自卑。
            </div>
            <button class="test5"><span>去测试</span></button>
          </div>
        </div>
      </div>
    </div>
    <!-- 关于心理测试 -->
    <div class="xuanchuan">
      <img class="bimage" src="../..\assets\pictures\threecolors.png" alt="" />
      <div class="centerblock">
        <div class="guanyu">关于心理测试</div>
        <div class="liaojie">柠檬心理提供多方面的测试来使你更了解你自己</div>
        <div class="jianyi">测试完成后会提供详细分析和有效的建议</div>
      </div>
    </div>
    <!-- 下面 -->
    <ArticledetailBottom class="foots"></ArticledetailBottom>
  </div>
</template>

<script>
import ArticledetailBottom from "../../components/ArticleCom/ArticledetailBottom.vue";
export default {
  name: "Test",
  components: { ArticledetailBottom },
  methods:{
    lala(){
      if(this.$cookies.isKey("userName")){
        this.$router.push({ name: 'Rengetest'})
      }else{
        alert('请先登录用户！！')
        this.$router.push({ name: 'Test'})
      }

    }
  },
  mounted() {
    window.scrollTo(0,0);
  },
};
</script>

<style scoped>
.upimage {
  height: 100%;
  width: 100%;
}
.up {
  height: 439px;
}
.form {
  margin: 100px auto;
  width: 1400px;
  height: 1144px;
  /* background-color: darkkhaki; */
  border: 0.6px black solid;
}
.form_up {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 377.4px;
  border-bottom: 0.6px solid rgba(0, 0, 0, 1);
}
button {
  width: 108px;
  height: 40px;
  border-radius: 20px;
  border: 0.6px solid rgba(0, 0, 0, 1);
  box-sizing: border-box;
  background-color: white;
  cursor: pointer;
}
button span {
  color: rgba(71, 71, 71, 1);
  font-family: PingFang SC;
  font-size: 18px;
}
button:hover span {
  color: white;
}
button:hover {
  background-color: black;
}
span {
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 36px;
}
.renge {
  position: relative;
  top: -10px;
  width: 108px;
  height: 40px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 24px;
}
.tongguo {
  width: 710px;
  height: 76px;
  text-align: center;
  color: rgba(0, 0, 0, 1);
  font-family: PingFangSC-ExtraLight;
  font-size: 24px;
  line-height: 156.765628%;
  letter-spacing: -5%;
}
.test1 {
  position: relative;
  top: 25px;
}
.middle {
  border-right: 0.6px solid rgba(0, 0, 0, 1);
  width: 700px;
  height: 377.4px;
  /* background-color: #bfa; */
  border-bottom: 0.6px solid rgba(0, 0, 0, 1);
  float: left;
}
.ceshi {
  left: 332px;
  width: 132px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 24px;
}
.middle-left {
  position: relative;
  left: 72px;
  width: 572px;
  top: 91px;
}
.yiyu {
  width: 542px;
  height: 76px;
  color: rgba(0, 0, 0, 1);
  font-family: PingFangSC-ExtraLight;
  font-size: 24px;
  line-height: 156.765628%;
  letter-spacing: -5%;
  position: relative;
  top: 18px;
}
.test2 {
  position: relative;
  top: 40px;
}
.middle-right {
  height: 377.4px;
  width: 701px;
  /* background-color: black; */
  border-bottom: 0.6px solid black;
  position: relative;
  left: 700px;
}
.right-bar {
  position: absolute;
  top: 91px;
  left: 71.4px;
}
.xuejia {
  width: 542px;
  height: 76px;
  color: rgba(0, 0, 0, 1);
  font-family: PingFangSC-ExtraLight;
  font-size: 24px;
  line-height: 156.765628%;
  letter-spacing: -5%;
  top: 18px;
  position: relative;
}
.yali {
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
}
.test3 {
  position: relative;
  top: 40px;
}
.bottom-left {
  width: 700px;
  height: 388px;
  border-right: 0.6px rgba(0, 0, 0, 1) solid;
}
.jiaolvdu {
  font-family: FZBaoSong-Z04S;
}
.b-left-bar {
  position: relative;
  top: 64px;
  left: 72px;
}
.biaoge {
  width: 542px;
  height: 114px;
  color: rgba(0, 0, 0, 1);
  font-family: PingFangSC-ExtraLight;
  font-size: 24px;
  line-height: 156.765628%;
  letter-spacing: -5%;
  position: relative;
  top: 18px;
}
.test4 {
  position: relative;
  top: 40px;
}
.bottom-right {
  width: 700px;
  height: 388px;
  position: relative;
  left: 701px;
  top: -388px;
}
.b-r {
  position: relative;
  top: 64px;
  left: 71.4px;
}
.zibeidu {
  font-family: FZBaoSong-Z04S;
}
.gexing {
  width: 542px;
  height: 114px;
  color: rgba(0, 0, 0, 1);
  font-family: PingFangSC-ExtraLight;
  font-size: 24px;
  line-height: 156.765628%;
  letter-spacing: -5%;
  position: relative;
  top: 18px;
}
.test5 {
  position: relative;
  top: 40px;
}
.xuanchuan {
  margin-top: 193px;
  height: 851px;
  border-top: 1px solid rgba(203, 203, 203, 1);
  position: relative;
}
.bimage {
  height: 100%;
  bottom: 100%;
}
.centerblock {
  position: absolute;
  top: 179px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 708px;
}
.guanyu {
  width: 216px;
  height: 40px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 36px;
  margin-bottom: 33px;
}
.liaojie {
  width: 504px;
  height: 34px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 24px;
  margin-bottom: 6px;
}
.jianyi {
  width: 432px;
  height: 34px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 24px;
}
.foots {
  margin-left: 0;
  margin-top: -53px;
}
</style>