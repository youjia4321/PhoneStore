<template>
  <div class="header">
    <van-nav-bar>
      <van-icon name="scan" slot="left" size="25" />
      <van-search
        slot="title"
        placeholder="请输入搜索关键词"
        v-model="value"
        @search="onSearch"
        @cancel="onCancel"
      />
      <van-icon name="qr" slot="right" size="25" />
    </van-nav-bar>
  </div>
</template>

<script>
import { Search, Toast, NavBar, Icon } from "vant";
export default {
  components: {
    [Search.name]: Search,
    [Toast.name]: Toast,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {
      Toast("暂无后续逻辑~");
    },
    onCancel() {
      Toast("暂无后续逻辑~");
    }
  }
};
</script>

<style>
.van-search {
  height: 45px;
}
</style>