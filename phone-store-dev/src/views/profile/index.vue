<template>
  <div class="profile">
    <img class="user-poster" :src="src" />
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" info="99+" />待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" info="99+" />待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group class="user-group">
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="star-o" title="我的收藏" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
      <van-cell icon="free-postage" title="我的收货地址" is-link to="/addressList" />
      <Coupons></Coupons>
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="setting-o" title="账号管理" is-link />
      <van-cell icon="volume-o" title="通用设置" is-link />
      <van-cell icon="exchange" title="切换账号" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from "vant";
import Coupons from "@/views/profile/coupons";
import ProfilePng from "@/assets/img/profile.png";
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    Coupons
  },
  data() {
    return {
      src: ProfilePng
    };
  }
};
</script>

<style lang="less">
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
.profile {
  padding-bottom: 50px;
}
</style>