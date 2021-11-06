<template>
  <div>
    <div class="fix">
            <transition
        name="animate__animated animate__bounce"
        leave-active-class="animate__fadeOut"
        enter-active-class="animate__fadeInUp"
        appear
      >
      <video
        class="up"
        src="../../assets/video/393084729-1-208.mp4"
        autoplay="true"
        loop="true"
        v-if="one"
      ></video>
      </transition>

      <button class="close" @click="turndown" v-show="one">关闭</button>
    </div>
    <div v-show="!one">
      <div class="middle">
        <div class="depress">减压动画</div>
        <div class="worry">放下烦恼，沉浸其中</div>
      </div>
      <video
        class="down"
        src="../../assets/video/393084729-1-208.mp4"
        controls
        autoplay
      ></video>
      <div class="square">
        <img src="../../assets\pictures\Rectangle_25.png" alt="" />
      </div>
      <div class="pub">推荐图书</div>
      <div class="box">
        <div class="box1 same">
          <img src="../../assets\pictures\Group_167.png" alt="" />
          <div class="right">
            <div class="first">被讨厌的勇气</div>
            <div class="second">克服你内心的自卑，不再为琐事烦恼</div>
            <div class="third">
              被讨厌的勇气并不是要去吸引被讨厌的负向能量，而是，如果这是我生命想绽放出最美的光彩，那么即使有被讨厌的可能，我都要用自己的双手双脚往那里走去。因为拥有了被讨厌的勇气，于是有了真正幸福的可能。你是否常常对繁琐的生活感到乏味？你是否时时为复杂的人际关系感到疲惫？
            </div>
            <div class="download">
              <a href="https://book.douban.com/subject/26369699/"
                ><button class="but1">查看详情</button></a
              >
              <a
                href="http://product.dangdang.com/28518072.html?_ddclickunion=P-306226-0-s26369699|ad_type=0|sys_id=1#dd_refer=https%3A%2F%2Fbook.douban.com%2Flink2%2F%3Flowest%3D1300%26pre%3D0%26vendor%3Ddangdang%26srcpage%3Dsubject%26price%3D2480%26pos%3D1%26url%3Dhttp%253a%252f%252funion.dangdang.com%252ftransfer.php%253ffrom%253dp-306226-0-s26369699%2526backurl%253dhttp%253a%252f%252fproduct.dangdang.com%252fproduct.aspx%253fproduct_id%253d28518072%26cntvendor%3D5%26srcsubj%3D26369699%26type%3Dbkbuy%26subject%3D26369699"
                ><button class="but2">购买</button></a
              >
            </div>
          </div>
        </div>
        <div class="box2 same">
          <img src="../../assets\pictures\Group_168.png" alt="" />
          <div class="right">
            <div class="first">爱的艺术</div>
            <div class="second">恋爱也是一种艺术</div>
            <div class="third">
              爱情不是一种与人的成熟程度无关，只需要投入身心的感情。如果没有爱他人的能力，如果不能真正勇敢地、真诚地爱他人，那么人们在自己的爱情生活中也永远得不到满足。爱不仅是狭隘的男女爱情，爱是人格整体的展现，要发展爱的能力，就要努力发展自己的人格，并朝着有益的目标迈进。
            </div>
            <div class="download">
              <a href="https://book.douban.com/subject/3026879/"
                ><button class="but1">查看详情</button></a
              >
              <a
                href="http://item.kongfz.com/book/62535778.html?push_type=5&min_price=17.70"
                ><button class="but2">购买</button></a
              >
            </div>
          </div>
        </div>
        <div class="box3 same">
          <img src="../../assets\pictures\Group_168_1.png" alt="" />
          <div class="right">
            <div class="first">心流</div>
            <div class="second">沉浸其中，忘记自我</div>
            <div class="third">
              “心流”是指我们在做某些事情时，那种全神贯注、投入忘我的状态——这种状态下，你甚至感觉不到时间的存在，事情完成之后我们会有一种充满能量并且非常满足的感受。若能有效地运用心流，我们将能更高效更专注地完成工作和学习等事情中。
            </div>
            <div class="download">
              <a href="https://book.douban.com/subject/27186106/"
                ><button class="but1">查看详情</button></a
              >
              <a
                href="http://product.dangdang.com/25183660.html?_ddclickunion=P-306226-0-s27186106|ad_type=0|sys_id=1#dd_refer=https%3A%2F%2Fbook.douban.com%2Flink2%2F%3Flowest%3D1300%26pre%3D0%26vendor%3Ddangdang%26srcpage%3Dsubject%26price%3D4900%26pos%3D1%26url%3Dhttp%253a%252f%252funion.dangdang.com%252ftransfer.php%253ffrom%253dp-306226-0-s27186106%2526backurl%253dhttp%253a%252f%252fproduct.dangdang.com%252fproduct.aspx%253fproduct_id%253d25183660%26cntvendor%3D6%26srcsubj%3D27186106%26type%3Dbkbuy%26subject%3D27186106"
                ><button class="but2">购买</button></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="square">
        <img src="../../assets\pictures\Rectangle_25.png" alt="" />
      </div>
      <div class="t-v">推荐视频</div>
      <div class="middle-box">
        <div class="v1">
          <a href="https://www.bilibili.com/video/BV1t4411u7Tz/?spm_id_from=333.788.recommend_more_video.0"><img  class="m1" src="../../assets\pictures\image_4.png" alt=""></a>
          <span>为什么你总是无法专心学习和工作？</span>
        </div>
        <div class="v2">
          <a href="https://www.bilibili.com/video/BV1aE411p72r/?spm_id_from=333.788.recommend_more_video.6"><img  class="m1" src="../../assets\pictures\image_5.png" alt=""></a>
          <span>总是逃避各种事情？你比想象的更强大！</span>
        </div>
        <div class="v3">
          <a href="https://www.bilibili.com/video/BV1o54y1a7QU"><img  class="m1" src="../../assets\pictures\image_6.png" alt=""></a>
          <span>爱情的秘诀，不是讲道理</span>
        </div>
        <div class="v4">
          <a href="https://www.bilibili.com/video/BV1L4411w7yK"><img  class="m1" src="../../assets\pictures\image_4_1.png" alt=""></a>
          <span>好人真的一生平安？学会残忍，是你的保障</span>
        </div>
        <div class="v5">
          <a href="https://www.bilibili.com/video/BV1yT4y1P7Pf/?spm_id_from=333.788.recommend_more_video.9"><img  class="m1" src="../../assets\pictures\image_4_2.png" alt=""></a>
          <span>不要再浪费眼前的时间和机会</span>
        </div>
        <div class="v6">
          <div class="v6-t">更多视频，敬请期待</div>
        </div>
      </div>
      
      <div class="square">
        <img src="../../assets\pictures\Rectangle_25.png" alt="" />
      </div>
      <div class="FM">推荐FM</div>
      <div class="bottom">
        <img
          class="image"
          src="../../assets\pictures\壹心理-世界和我爱着你_1.png"
          alt=""
        />
        <div class="title">
          壹心理提供多场景多心情的电台，在你忧伤、抑郁、孤独的时候给予你力量
        </div>
        <a href="http://fm.xinli001.com/99405382"
          ><button class="go">前往</button></a
        >
      </div>
      <ArticledetailBottom class="b1b1"></ArticledetailBottom>
    </div>
  </div>
</template>

<script>
import ArticledetailBottom from '../../components/ArticleCom/ArticledetailBottom'
export default {
  name: "Book",
      components:{ArticledetailBottom},
  data() {
    return {
      one: true,
    };
  },
  methods: {
    turndown() {
      this.one = false;
    },
  },
};
</script>

<style scoped>
video.up {
  width: 1920px;
  position: absolute;
  top: 0px;
}
.close {
  width: 100px;
  height: 50px;
  background: rgb(5, 197, 240);
  position: absolute;
  border-radius: 20px;
  top: 0px;
  right: 0px;
  cursor: pointer;
}
video.down {
  height: 592px;
  width: 1400px;
  position: relative;
  left: 260px;
}
.depress {
  width: 192px;
  height: 53px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 48px;
  margin-bottom: 12px;
  margin-top: 93px;
  position: relative;
  left: 864px;
}
.worry {
  position: relative;
  left: 852px;
  width: 216px;
  height: 34px;
  color: rgba(0, 0, 0, 1);
  font-family: PingFangSC-ExtraLight;
  font-size: 24px;
  margin-bottom: 40px;
}
.square {
  margin-top: 149px;
  margin-left: 873px;
  width: 42px;
  height: 42px;
}
.square img {
  height: 100%;
  width: 100%;
}
.pub {
  width: 144px;
  height: 40px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 36px;
  margin-left: 903px;
  margin-top: -22px;
  margin-bottom: 41px;
}
.box {
  width: 1400px;
  height: 1415px;
  border: 0.6px solid rgba(0, 0, 0, 1);
  box-sizing: border-box;
  margin: 0 auto;
}
.box1 {
  height: 470.4px;
  border-bottom: 0.6px solid rgba(0, 0, 0, 1);
}
.box2 {
  height: 471.4px;
  border-bottom: 0.6px solid rgba(0, 0, 0, 1);
}
.same img {
  width: 249px;
  height: 330px;
  margin-left: 100px;
  margin-top: 71px;
  float: left;
}
.right {
  float: left;
  margin-top: 71px;
  margin-left: 100px;
}
.first {
  height: 39px;
  color: rgba(71, 71, 71, 1);
  font-family: PingFang-Regular;
  font-size: 28px;
  margin-bottom: 10px;
}
.second {
  /* width: 288px; */
  height: 25px;
  color: rgba(97, 97, 97, 1);
  font-family: PingFang SC;
  font-size: 18px;
  margin-bottom: 40px;
}
.third {
  width: 540px;
  height: 200px;
  color: rgba(130, 130, 130, 1);
  font-family: PingFang SC;
  font-size: 18px;
  line-height: 220.000005%;
}
.download {
  margin-left: 600px;
}
.but1 {
  width: 137px;
  height: 40px;
  border-radius: 20px;
  border: 0.6px solid rgba(0, 0, 0, 1);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  cursor: pointer;
  margin-right: 30px;
}
.but2 {
  width: 137px;
  height: 40px;
  border-radius: 20px;
  border: 0.6px solid rgba(0, 0, 0, 1);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  cursor: pointer;
}
.FM {
  margin-left: 903px;
  width: 124px;
  height: 40px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 36px;
  margin-top: -25px;
}
.bottom {
  width: 1400px;
  height: 400px;
  border: 0.6px solid rgba(0, 0, 0, 1);
  box-sizing: border-box;
  margin: 41px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image {
  width: 150px;
  height: 37px;
  margin-bottom: 22px;
}
.title {
  width: 792px;
  height: 26px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 24px;
  margin-bottom: 36px;
}
.go {
  width: 110px;
  height: 40px;
  border-radius: 20px;
  border: 0.6px solid rgba(0, 0, 0, 1);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  cursor: pointer;
}
.middle-box{
   width: 1400px;
  height: 660px;
  border: 0.6px solid rgba(0, 0, 0, 1);
  box-sizing: border-box;
  margin:70px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content:space-around; 
}
.t-v{
  width: 144px;
  height: 40px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 36px;
  margin-left: 903px;
  margin-top: -25px;
}
.m1{
  width: 355px;
  height: 205px;
  margin-right: 20px;
  background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
}
.v1{
  display: flex;
  flex-direction: column;
  z-index: 1;
}
.v1 span{
  margin-top: 25px;
}
.v2{
  position: relative;
  display: flex;
  flex-direction: column;
}
.v2 span{
  margin-top: 25px;
}
.v3{
  display: flex;
  flex-direction: column;
}
.v3 span{
  margin-top: 25px;
}
.v4{
  display: flex;
  flex-direction: column;
}
.v4 span{
  margin-top: 25px;
}
.v5{
  display: flex;
  flex-direction: column;
}
.v5 span{
  margin-top: 25px;
}
.v6{
width: 355px;
  height: 205px;
  border: 0.6px solid rgba(0, 0, 0, 1);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -25px;

}
.b1b1{
  margin-left: 0;
  top: 0px;
  margin-top: 50px;
}
button:hover{
  background-color: black;
  color: white;
}
</style>
