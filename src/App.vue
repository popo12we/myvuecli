<template>
  <div>
    <h1 @click="fn">hello1</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import "./tool";
export default {
  methods: {
    fn() {
      this.$router.push("/home");
    }
  }
};
</script>

<style>
</style>
