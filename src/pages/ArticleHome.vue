<template>
  <div class="div1">
    <p></p>
    <el-skeleton style="width: 400px" :loading="loading" animated :count="6">
      <template slot="template">
        <el-skeleton-item
          variant="image"
          style="width: 8.98vw; height: 8.98vw"
          class="abc"
        />
        <div style="padding-top: 5px">
          <el-skeleton-item variant="text" style="width: 30%" />
          <div
            style="
              display: flex;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <!-- <el-skeleton-item variant="text" style="margin-right: 16px;" /> -->
          </div>
        </div>
      </template>
      <template>
        <el-card
          :body-style="{ padding: '0px', marginBottom: '25px' }"
          v-for="Info in Inf"
          :key="Info.id"
          style="border: none; box-shadow: none"
        >
          <router-link
            :to="{
              name: 'PassageDetail',
              query: {
                passageCategory: Info.passageCategory,
                passageTitle: Info.passageTitle,
                passageContent: Info.passageContent,
                id:Info.id
              },
            }"
          >
            <img
              :src="Info.passageImg"
              class="image multi-content"
              style="width: 11.5vw"
            />
          </router-link>
          <div style="padding: 14px">
            <router-link
              :to="{
                name: 'PassageDetail',
                query: {
                  passageCategory: Info.passageCategory,
                  passageTitle: Info.passageTitle,
                  passageContent: Info.passageContent,
                  id:Info.id
                },
              }"
            >
              <span class="passagetitle">
                {{ Info.passageTitle }}
              </span>
              <span class="passageSmallTitle">
                {{ Info.passageSmallTitle }}
              </span>
            </router-link>
            <span class="passageCategory">
              {{ Info.passageCategory }}
            </span>
            <div class="bottom card-header"></div>
          </div>
        </el-card>
      </template>
    </el-skeleton>
    <NextPage />
    <ArticleHomeBottom />
  </div>
</template>

<script>
import axios from "axios";
import ArticleHomeBottom from "../pages/ArticleHomeBottom.vue";
import NextPage from "../pages/NextPage.vue";
import "animate.css";
export default {
  name: "ArticleHome",
  components: { NextPage, ArticleHomeBottom },
  data() {
    return {
      loading: true,
      Inf: [],
      pagenow: [],
      total: 6,
    };
  },

  created() {
    axios.get("http://39.107.67.145:9000/passage/listAllByPage").then(
      (response) => {
        console.log("成功请求", response.data);
        this.$bus.$emit("getInf", response.data);
        this.loading = false;
        this.Inf = response.data.data.records;
      },
      (error) => {
        console.log("请求失败", error.message);
      }
    );
    this.$bus.$on("sendpage", (Inf) => {
      this.Inf = Inf.records;
      this.total = Inf.pages;
    });
    
  },
  
};
</script>

<style>
.div1 {
  width: 1620px;
}
.pictures {
  width: 100%;
  position: relative;
}
image multi-content {
  width: 300px;
}
ul.el-menu-demo.el-menu--horizontal.el-menu {
  width: 1200px;
}
.el-menu--horizontal > .el-menu-item {
  width: 150px;
}
.el-card__body {
  display: flex;
}
.passagetitle {
  color: rgba(0, 0, 0, 1);
  font-family: FZBaoSong-Z04S;
  font-size: 24px;
  position: absolute;
  /* top: 21px; */
  left: 266px;
  width: 600px;
  height: 26px;
}
.passageSmallTitle {
  position: absolute;
  /* top: 100px; */
  margin-top: 50px;
  left: 266px;
  color: rgba(0, 0, 0, 1);
  font-family: PingFang-ExtraLight-2;
  font-size: 20px;
  line-height: 130.765629%;
  width: 600px;
}
.passageCategory {
  position: absolute;
  margin-top: 167px;
  color: rgba(130, 130, 130, 1);
  font-family: PingFang-Regular;
  font-size: 18px;
  left: 266px;
}
</style>