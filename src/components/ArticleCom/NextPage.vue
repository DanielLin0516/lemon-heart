<template>
  <div>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      layout="prev, pager, next, jumper"
      :total="parseInt(total)"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "NextPage",
  created() {
    this.getUserList();
  },
  data() {
    return {
      sizes: 0,
      loading: true,
      Infs: [],
      currentPage: 1,
      pageSize: 1,
      total: 0,
      sizes:0,
      pagenow: [],
    };
  },
  methods: {
    getUserList() {
      this.total;
    },
    handleCurrentChange(newPage) {
      // 页码改变触发
      this.currentPage = newPage;
      axios.get("http://39.107.67.145:9000/passage/listAllByPage",{
        params: {
          pageNo: this.currentPage,
        }
      }).then(
        (response) => {
          console.log("成功请求", response.data.data);
          this.Inf = response.data.data;
          this.$bus.$emit("sendpage", response.data.data);

        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );


    },
  },
  created() {
    this.$bus.$on("getInf", (Inf) => {
      this.Infs = Inf.data;
      this.total =this.Infs.pages ;
    });
  },
  // beforeDestroy(){
  //   this.$bus.$off('getInf')
  // }
};
</script>

<style>
</style>