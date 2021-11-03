<template>
  <div>
    <div class="heihei">
      <div class="jingxuan">精选文章</div>
      <i class="el-icon-arrow-right"></i>
      <div class="category">{{ this.$route.query.passageCategory }}</div>
      <div class="bigTitle">
        {{ this.$route.query.passageTitle }}
        <div class="number">
          {{ n }}
          <div class="heart">
            <img src="../assets/pictures/关注_1.png" alt="" />
          </div>
        </div>
        <div class="image1">
          <img src="../assets/pictures/image1.png" alt="" />
        </div>
        <div v-for="cont in content" :key="cont.id" class="content">
          {{ cont }}
        </div>
        <!-- 点赞 -->
        <button @click="pressLike" class="dianzan">
          <img
            class="img1"
            src="..\assets\pictures\clarity_heart-line.png"
          /><span>{{ n }}</span
          ><img
            class="img2"
            src="..\assets\pictures\clarity_heart-solid.png"
            alt=""
          />
        </button>
        <ArticledetailBottom />
      </div>
    </div>
    <!-- 导航栏 -->
    <div>
      <div class="title" :class="yuanlaide">
        <span class="line"></span>
        <div class="xiangguan">相关文章</div>
        <router-link
          class="wenzhang"
          @click.native="clear"
          v-for="Infs in Inf"
          :key="Infs.id"
          :to="{
            name: 'PassageDetail',
            query: {
              passageCategory: Infs.passageCategory,
              passageTitle: Infs.passageTitle,
              passageContent: Infs.passageContent,
              id: Infs.id,
            },
          }"
          >{{ Infs.passageTitle }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ArticledetailBottom from "../pages/ArticledetailBottom.vue";
export default {
  name: "PassageDetail",
  components: { ArticledetailBottom },
  data() {
    return {
      yuanlaide: "yuanlai",
      content: "",
      n: 0,
      Inf: [],
    };
  },
  methods: {
    clear() {
      this.content = this.$route.query.passageContent.split("。");
      axios
        .get("http://39.107.67.145:9000/passage/pressLike", {
          params: {
            id: this.$route.query.id,
          },
        })
        .then(
          (response) => {
            this.n = response.data.data;
          },
          (error) => {
            console.log("请求失败", error);
          }
        );
    },
    getrandom() {
      axios.get("http://39.107.67.145:9000/passage/listAllByPage").then(
        (response) => {
          this.Inf = response.data.data.records;
          console.log("请求成功", "文章详情页");
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
    onScroll() {
      // 计算滚动的距离
      let scrolled =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 计算A区的高度
      let header_height = null;
      let header_height1 = null;
      if (document.getElementsByClassName("image1")[0]) {
        header_height =
          document.getElementsByClassName("image1")[0].offsetHeight;
        header_height1 =
          document.getElementsByClassName("Foots")[0].offsetTop - 250;
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
    // 点赞功能
    pressLike() {
      if (this.$cookies.isKey("uid")) {
        if (
          localStorage.getItem(
            this.$cookies.get("uid") +
              "_passageLike_" +
              this.$route.query.passageTitle
          )
        ) {
          alert("一个用户最多点一次赞！请勿重复点赞");
        } else {
          axios
            .get("http://39.107.67.145:9000/passage/pressLike", {
              params: {
                id: this.$route.query.id,
              },
            })
            .then(
              (response) => {
                this.n = response.data.data;
                console.log("点赞请求成功", response.data.data);
              },
              (error) => {
                console.log("请求失败", error);
              }
            );
          localStorage.setItem(
            this.$cookies.get("uid") +
              "_passageLike_" +
              this.$route.query.passageTitle,
            JSON.stringify(this.$route.query.passageTitle)
          );
        }
      } else {
        alert("请登录账号");
      }
    },
  },
  mounted() {
    this.getrandom();
    this.content = this.$route.query.passageContent.split("。");
    this.$nextTick(function () {
      window.addEventListener("scroll", this.onScroll);
    });
    window.scrollTo(0,0);
  },
  created() {
    axios
      .get("http://39.107.67.145:9000/passage/pressLike", {
        params: {
          id: this.$route.query.id,
        },
      })
      .then(
        (response) => {
          this.n = response.data.data;
        },
        (error) => {
          console.log("请求失败", error);
        }
      );
  },
};
</script>

<style scoped>
.heihei {
  position: relative;
  height: 1000px;
  width: 913px;
  background-color: opacity;
  left: 242px;
  top: 80px;
}
.jingxuan {
  width: 96px;
  height: 34px;
  color: rgba(97, 97, 97, 1);
  font-family: PingFang-Regular;
  font-size: 24px;
  position: relative;
  left: 0px;
  top: 0px;
  float: left;
}
.el-icon-arrow-right {
  color: rgba(97, 97, 97, 1);
  float: left;
}
.category {
  float: left;
  width: 250px;
  height: 34px;
  color: rgba(97, 97, 97, 1);
  font-family: PingFang-Regular;
  font-size: 24px;
}
.bigTitle {
  position: absolute;
  left: 0px;
  top: 66px;
  width: 100%;
  height: 53px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 48px;
}
.heart {
  /* position: absolute; */
  /* top: 139px; */
  /* left: 19px; */
  width: 16px;
  height: 16px;
  display: inline-block;
  margin-left: 8px;
}
.heart img {
  width: 100%;
}
.heart:hover {
  width: 18px;
  height: 18px;
}
.number {
  /* position: absolute; */
  margin-top: 16px;
  width: 100%;
  height: 24px;
  color: rgba(71, 71, 71, 1);
  font-family: PingFang SC;
  font-size: 18px;
  line-height: 130.765629%;
}
.image1 {
  width: 877px;
  height: 352px;
  margin-top: 20px;
  left: 0px;
}
.image1 img {
  width: 100%;
}
.content {
  width: 100%;
  font-family: PingFang-Regular;
  font-size: 24px;
  margin-top: 25px;
  margin-bottom: 50px;
}
.title {
  padding-left: 24.4px;
  width: 307px;
  right: 260px;
  border-left: 0.6px solid black;
}
.yuanlai {
  top: 405px;
  position: absolute;
}
.houlai {
  top: 185px;
  position: fixed;
  right: 260px;
  z-index: 999;
}
.xiangguan {
  width: 96px;
  height: 34px;
  color: rgba(71, 71, 71, 1);
  font-family: PingFang SC;
  font-size: 24px;
}
.wenzhang {
  width: 100%;
  display: block;
  margin-bottom: 20px;
  margin-top: 20px;
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 18px;
  line-height: 130.799997%;
}
.dianzan {
  width: 130px;
  height: 40px;
  border-radius: 23.5px;
  border: 0.6px solid rgba(0, 0, 0, 1);
  /* box-sizing: border-box; */
  background: rgba(255, 255, 255, 1);
  position: relative;
  left: 364px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
.dianzan:hover {
  background-color: rgba(71, 71, 71, 1);
}
.dianzan:hover span {
  color: white;
}
.dianzan:hover .img1 {
  display: none;
}
.dianzan:hover .img2 {
  display: block;
}
.img1 {
  width: 21.3px;
  height: 19.2px;
}
.img2 {
  width: 21.3px;
  height: 19.2px;
  display: none;
}
</style>