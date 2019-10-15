<template>
  <div class="index">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in images" :key="item">
        <router-link to="/productIndex">
          <img :src="item" />
        </router-link>
      </van-swipe-item>
    </van-swipe>
    <!-- <van-grid :border="false" :column-num="3">
      <van-grid-item to="/productIndex" v-for="item in images" :key="item">
        <van-image :src="item" />
      </van-grid-item>
    </van-grid>-->
    <van-grid :column-num="4">
      <van-grid-item icon="hot" text="今日爆款" />
      <van-grid-item icon="good-job" text="最新上线" />
      <van-grid-item icon="music" text="电子设备" />
      <van-grid-item icon="wap-home" text="生活家居" />
      <van-grid-item icon="vip-card" text="优惠划算" />
      <van-grid-item icon="wechat" text="通信产品" />
      <van-grid-item icon="new-arrival" text="近期新品" />
      <van-grid-item icon="alipay" text="支付选项" />
    </van-grid>
    <van-divider :style="{ fontSize:'12px', padding: '0 16px' }">已经到底了</van-divider>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import { Grid, GridItem, Image, Swipe, SwipeItem, Divider } from "vant";
import apple2 from "@/assets/img/apple-2.jpg";
import apple3 from "@/assets/img/apple-3.jpg";
import bus1 from "@/assets/img/bus3-1.jpeg";
import bus2 from "@/assets/img/bus3-2.jpeg";
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Divider.name]: Divider
  },
  data() {
    return {
      images: [apple2, bus2, apple3, bus1]
    };
  }
};
</script>

<style>
.index {
  padding-bottom: 50px;
}
.van-swipe-item img {
  width: 100%;
  height: 50%;
}
</style>
