<template>
  <lottie
    :options="defaultOptions"
    :height="400"
    :width="400"
    v-on:animCreated="handleAnimation"
  />
</template>
<script>
import Lottie from "vue-lottie";
const  animationData =  "../anim/data.json";
export default {
  name: "Qa",
  components: {
    lottie: Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
  },
};
</script>
<style>
</style>