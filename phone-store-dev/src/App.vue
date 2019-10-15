<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view v-if="isRouterAlive" name="default"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style>
</style>
