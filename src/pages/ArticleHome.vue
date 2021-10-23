<template>
  <div>
    <!-- <div class="pictures" v-for="Info in Inf" :key="Info.id"> -->
    <!-- <a href="">        
        <img :src="Info.passageImg" alt="">
      </a>    
      <div class="texts">
        <a href="">
          <p>{{Info.passageTitle}}</p>
        </a>
      </div>
      
    </div> -->
  <div style="width: 400px">
    <p>
    </p>
    <el-skeleton style="width:400px" :loading="loading" animated :count="6">
      <template slot="template">
        <el-skeleton-item
          variant="image"
          style="width: 400px; height: 267px;"
        />
        <div style="padding: 14px;">
          <el-skeleton-item variant="h3" style="width: 50%;" />
          <div
            style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
          >
            <el-skeleton-item variant="text" style="margin-right: 16px;" />
            <el-skeleton-item variant="text" style="width: 30%;" />
          </div>
        </div>
      </template>
      <template>
        <el-card
          :body-style="{ padding: '0px', marginBottom: '1px' }"
          v-for="Info in Inf"
          :key="Info.id"
        >
          <img :src="Info.passageImg" class="image multi-content" />
          <div style="padding: 14px;">
            <span>{{ Info.passageTitle }}</span>
            <div class="bottom card-header">

            </div>
          </div>
        </el-card>
      </template>
    </el-skeleton>
  </div>
  </div>
</template>

<script>
export default {
  name: "ArticleHome",
  data() {
    return {
      loading: true,
      Inf: [],
    };
  },
  mounted() {
    this.$bus.$on("getInf", (Inf) => {
      console.log("我是组件", Inf);
      this.Inf = Inf;
      console.log(this.Inf[0], "@@@@");
      this.loading = false;
    });
  },
};
</script>

<style>
.pictures {
  width: 100%;
  position: relative;
}
img {
  width: 220px;
}
.texts {
  position: relative;
  top: -199px;
  left: 256px;
}
</style>