<template>
  <div class="msg">
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">倒计时</van-divider>
    <div class="timeout" style="text-align: center">
      <van-count-down
        ref="countDown"
        millisecond
        :time="30000"
        :auto-start="false"
        format="ss:SSS"
        @finish="finish"
      />
      <van-grid clickable :column-num="3">
        <van-grid-item text="开始" icon="play-circle-o" @click="start" />
        <van-grid-item text="暂停" icon="pause-circle-o" @click="pause" />
        <van-grid-item text="重置" icon="replay" @click="reset" />
      </van-grid>
    </div>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">消息通知</van-divider>
    <van-swipe-cell v-for="i in count" :key="i">
      <template slot="left">
        <van-button square type="primary" text="选择" />
      </template>
      <van-notice-bar text="全国人大外事委员会就美国国会众议院通过“2019年香港人权与民主法案”发表声明" left-icon="volume-o" />
      <template slot="right">
        <van-button square type="danger" text="删除" @click="del" />
        <van-button square type="primary" text="收藏" @click="collect" />
      </template>
    </van-swipe-cell>
    <van-swipe-cell>
      <template slot="left">
        <van-button square type="primary" text="选择" />
      </template>
      <van-cell :border="false" title="杜克成" value="我就是一个shabi" />
      <template slot="right">
        <van-button square type="danger" text="删除" @click="del" />
        <van-button square type="primary" text="收藏" @click="collect" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
import {
  NoticeBar,
  CountDown,
  Grid,
  GridItem,
  Divider,
  SwipeCell,
  Button,
  Cell,
  Dialog,
  Notify
} from "vant";
export default {
  components: {
    [NoticeBar.name]: NoticeBar,
    [CountDown.name]: CountDown,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Divider.name]: Divider,
    [SwipeCell.name]: SwipeCell,
    [Button.name]: Button,
    [Cell.name]: Cell
  },
  data() {
    return {
      count: 6
    };
  },
  methods: {
    start() {
      this.$refs.countDown.start();
    },
    pause() {
      this.$refs.countDown.pause();
    },
    reset() {
      this.$refs.countDown.reset();
    },
    finish() {
      this.$toast("倒计时结束");
    },
    del() {
      Dialog.confirm({
        message: "确认删除这条消息吗？"
      })
        .then(() => {
          // on confirm
          this.count -= 1;
          Notify({ type: "success", message: "删除成功" });
        })
        .catch(() => {
          // on cancel
          Notify({ type: "danger", message: "取消删除" });
        });
    },
    collect() {
      Dialog.confirm({
        message: "确认收藏这条消息吗？"
      })
        .then(() => {
          // on confirm
          Notify({ type: "success", message: "收藏成功" });
        })
        .catch(() => {
          // on cancel
          Notify({ type: "danger", message: "取消收藏" });
        });
    }
  }
};
</script>

<style>
.msg {
  padding-bottom: 50px;
}
</style>