<template>
  <div class="coupons">
    <van-coupon-cell
      icon="gold-coin-o"
      title="我的优惠券"
      is-link
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <!-- 优惠券列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
import { CouponCell, Cell, Popup, CouponList } from "vant";

const coupon = [
  {
    available: 1,
    condition: "无使用门槛\n最多优惠12元",
    reason: "",
    value: 150,
    name: "日常生活用品",
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: "1.5",
    unitDesc: "元"
  },
  {
    available: 1,
    condition: "无使用门槛\n最多优惠30元",
    reason: "",
    value: 2000,
    name: "有赞奶茶商品",
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: "20",
    unitDesc: "元"
  }
];
export default {
  components: {
    [CouponCell.name]: CouponCell,
    [Cell.name]: Cell,
    [Popup.name]: Popup,
    [CouponList.name]: CouponList
  },
  data() {
    return {
      showList: false,
      chosenCoupon: -1,
      coupons: coupon,
      disabledCoupons: coupon
    };
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange() {
      this.coupons.push(coupon);
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>