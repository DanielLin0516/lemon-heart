<template>
  <div>
    <!-- 题目 -->
    <div class="top" v-for="t in test" :key="t.index">
      <div class="first">{{ t.title }}</div>
      <div class="choice">
        <label></label><input type="radio"  v-model.number="t.answer" value="1" /><span
          >完全不符合</span
        >
        <input type="radio"  v-model.number="t.answer" value="2" /><span
          >大部分不符合</span
        >
        <input type="radio"  v-model.number="t.answer" value="3" /><span
          >有点不符合</span
        >
        <input type="radio"  v-model.number="t.answer" value="4" /><span
          >有点符合</span
        >
        <input type="radio"  v-model.number="t.answer" value="5" /><span
          >大部分符合</span
        >
        <input type="radio"  v-model.number="t.answer" value="6" /><span
          >完全符合</span
        >
      </div>
    </div>
     <router-link :to="{name:'Rengeresult'}"> <button class="send" @click="count"> 查看分析</button></router-link> 
    
  </div>
</template>

<script>
export default {
  name: "TestTotal",
  data() {
    return {
      test: [
        {
          choice: 1,
          answer: "1",
          title: "1.我常感到害怕",
        },
        {
          choice: 2,
          answer: "1",
          title: "2.一旦确定了目标，我会坚持努力实现它",
        },
        {
          choice: 3,
          answer: "1",
          title: "3.我觉得大部分人基本是心怀善意的",
        },
        {
          choice: 4,
          answer: "1",
          title: "4.我头脑经常充满生动的画面",
        },
        {
          choice: 5,
          answer: "1",
          title: "5.我对人多的聚会感到乏味",
        },
        {
          choice: 6,
          answer: "1",
          title: "6.有时我觉得自己一无是处",
        },
        {
          choice: 7,
          answer: "1",
          title: "7.我常常是仔细考虑之后才做出决定",
        },
        {
          choice: 8,
          answer: "1",
          title: "8.我不太关心别人是否受到不公正的待遇",
        },
        {
          choice: 9,
          answer: "1",
          title: "9.我是个勇于冒险，突破常规的人",
        },
        {
          choice: 10,
          answer: "1",
          title: "10.在热闹的聚会上，我常常表现主动并尽情玩耍",
        },
        {
          choice: 11,
          answer: "1",
          title: "11.别人一句漫不经心的话，我常会联系在自己身上",
        },
        {
          choice: 11,
          answer: "1",
          title: "11.别人认为我是个慎重的人",
        },
        {
          choice: 13,
          answer: "1",
          title: "13.我时常觉得别人的痛苦与无关",
        },
        {
          choice: 14,
          answer: "1",
          title: "14.我喜欢冒险",
        },
        {
          choice: 15,
          answer: "1",
          title: "15.我尽量避免参加人多的聚会和嘈杂的环境",
        },
        {
          choice: 16,
          answer: "1",
          title: "16.在面对压力时，我有种快要崩溃的感觉",
        },
        {
          choice: 17,
          answer: "1",
          title: "17.我喜欢一开头就把事情计划好",
        },
        {
          choice: 18,
          answer: "1",
          title: "18.我是那种只照顾好自己，不替别人担忧的人",
        },
        {
          choice: 19,
          answer: "1",
          title: "19.我对许多事情有着很强的好奇心",
        },
        {
          choice: 20,
          answer: "1",
          title: "20.有我在的场合一般不会冷场",
        },
        {
          choice: 21,
          answer: "1",
          title: "21.我常担忧一些无关紧要的事情",
        },
        {
          choice: 22,
          answer: "1",
          title: "22.我工作或学习很勤奋",
        },
        {
          choice: 23,
          answer: "1",
          title: "23.虽然社会上有些骗子，但我觉得大部分人还是可信的",
        },
        {
          choice: 24,
          answer: "1",
          title: "24.我身上具有别人没有的冒险精神",
        },
        {
          choice: 25,
          answer: "1",
          title: "25.在一个团体中，我希望处于领导地位",
        },
        {
          choice: 26,
          answer: "1",
          title: "26.常感到内心不踏实",
        },
        {
          choice: 27,
          answer: "1",
          title: "27.我是个倾尽全力做事的人",
        },
        {
          choice: 28,
          answer: "1",
          title: "28.当别人向我诉说不幸时，我常感到难过",
        },
        {
          choice: 29,
          answer: "1",
          title: "29.我渴望学习一些新东西，即使它们与我的日常生活无关",
        },
        {
          choice: 30,
          answer: "1",
          title: "30.别人多认为我是一个热情和友好的人",
        },
        {
          choice: 31,
          answer: "1",
          title: "31.我常担心有什么不好的事情要发生",
        },
        {
          choice: 32,
          answer: "1",
          title: "32.在工作上，我常只求能应付过去便可",
        },
        {
          choice: 33,
          answer: "1",
          title:
            "33.尽管人类社会存在着一些阴暗的东西（如战争、罪恶、欺诈），我仍然相信人性总的来说是善良的。",
        },
        {
          choice: 34,
          answer: "1",
          title: "34.我的想象力相当丰富",
        },
        {
          choice: 35,
          answer: "1",
          title: "35.我喜欢参加社交与娱乐聚会",
        },
        {
          choice: 36,
          answer: "1",
          title: "36.我很少感到忧郁或沮丧",
        },
        {
          choice: 37,
          answer: "1",
          title: "37.做事讲究逻辑和条理是我的一个特点",
        },
        {
          choice: 38,
          answer: "1",
          title: "38.我常为那些遭遇不幸的人感到难过",
        },
        {
          choice: 39,
          answer: "1",
          title: "39.我很愿意也很容易接受那些新事物、新观点、新想法",
        },
        {
          choice: 40,
          answer: "1",
          title: "40.我希望成为领导者而不是被领导者",
        },
      ],
      shenjingzhi: 0,
      yanjinxing: 0,
      yirenxing: 0,
      kaifangxing: 0,
      waixiangxing: 0,
    };
  },
  methods:{
    count() {
      this.shenjingzhi =
        parseInt(this.test[0].answer) +
        parseInt(this.test[5].answer) +
        parseInt(this.test[10].answer) +
        parseInt(this.test[15].answer) +
        parseInt(this.test[20].answer) +
        parseInt(this.test[25].answer) +
        parseInt(this.test[30].answer) +
        parseInt(7 - this.test[35].answer);
      this.yanjinxing =
        parseInt(this.test[1].answer) +
        parseInt(this.test[6].answer) +
        parseInt(this.test[11].answer) +
        parseInt(this.test[16].answer) +
        parseInt(this.test[21].answer) +
        parseInt(this.test[26].answer) +
        parseInt(7 - this.test[31].answer) +
        parseInt(this.test[36].answer);
      this.yirenxing =
        parseInt(this.test[2].answer) +
        parseInt(7 - this.test[7].answer) +
        parseInt(7 - this.test[12].answer) +
        parseInt(7 - this.test[17].answer) +
        parseInt(this.test[22].answer) +
        parseInt(this.test[27].answer) +
        parseInt(this.test[32].answer) +
        parseInt(this.test[37].answer);
      this.kaifangxing =
        parseInt(this.test[3].answer) +
        parseInt(this.test[8].answer) +
        parseInt(this.test[13].answer) +
        parseInt(this.test[18].answer) +
        parseInt(this.test[23].answer) +
        parseInt(this.test[28].answer) +
        parseInt(this.test[33].answer) +
        parseInt(this.test[38].answer);
      this.waixiangxing =
        parseInt(7 - this.test[4].answer) +
        parseInt(this.test[9].answer) +
        parseInt(7 - this.test[14].answer) +
        parseInt(this.test[19].answer) +
        parseInt(this.test[24].answer) +
        parseInt(this.test[29].answer) +
        parseInt(this.test[34].answer) +
        parseInt(this.test[39].answer);
      this.$bus.$emit("score",this.shenjingzhi,this.yanjinxing,this.yirenxing,this.kaifangxing,this.waixiangxing)
    },
  },

  beforeDestroy() {
    this.count()
  },
};
</script>

<style scoped>
.top {
  border-top: 1px solid rgba(203, 203, 203, 1);
  margin-top: 107px;
}
.first {
  padding-top: 60px;
  height: 31px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 28px;
}
.choice {
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 45px;
}
span {
  color: rgba(71, 71, 71, 1);
  font-family: PingFang SC;
  font-size: 18px;
  margin-right: 50px;
  margin-left: 10px;
  position: relative;
  top: 0px;
}
input {
  width: 15px;
  height: 15px;
  border: 1px solid rgba(0, 0, 0, 1);
  box-sizing: border-box;
  background: rgba(0, 0, 0, 1);
}
.send {
  display: flex;
  justify-content: center;
  width: 160px;
  height: 40px;
  border-radius: 23.5px;
  background: rgba(51, 51, 51, 1);
  color: white;
  font-family: PingFang-Regular;
  font-size: 18px;
  line-height: 150%;
  margin-top: 160px;
  position: relative;
  left: 457px;
  cursor: pointer;
}
.bot {
  margin-left: 0px;
}
</style>