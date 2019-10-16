<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o" to="/">微淘首页</van-tabbar-item>
    <van-tabbar-item name="chat" icon="chat-o" info="12" to="/message">消息</van-tabbar-item>
    <van-tabbar-item name="bus" icon="shopping-cart-o" to="/cart" info="3">购物车</van-tabbar-item>
    <van-tabbar-item name="user" icon="user-o" to="/profile">我的有赞</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: "home"
    };
  }
};
</script>

<style>
.van-goods-action {
  width: 100%;
}
.van-row {
  width: 100%;
}
</style>