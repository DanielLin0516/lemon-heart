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
export default {
  name: "NextPage1",
  created() {
    this.getUserList();
  },
  data() {
    return {
      sizes: 0,
      loading: true,
      Inf: [],
      currentPage: 1,
      pageSize: 1,
      total: 0,
      sizes: 0,
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
      for (var i = (this.currentPage - 1) * 6; i < this.currentPage * 6; i++) {
        if(i == this.Inf.length) break;
        this.pagenow.push(this.Inf[i]);
      }
      this.$bus.$emit('sendNewArray',this.pagenow)
      this.pagenow = []
    },
  },
  created() {
    this.$bus.$on("getInf", (Inf) => {
      this.Inf = Inf.data;
      console.log(this.Inf.length);
      this.total = Math.ceil(this.Inf.length / 6);
      for (var i = (this.currentPage - 1) * 6; i < this.currentPage * 6; i++) {
        if(i == this.Inf.length) break;
        this.pagenow.push(this.Inf[i]);
      }
      console.log(this.pagenow.length,'11123')
      this.$bus.$emit('sendNewArray',this.pagenow)
      this.pagenow = []
    });
  },
};
</script>

<style>
</style>