<template>
  <div class="address">
    <van-nav-bar title="添加收货地址" left-arrow @click-left="onClickLeft" />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import AreaList from "@/service/address";
import { AddressEdit, Toast, NavBar } from "vant";
export default {
  components: {
    [AddressEdit.name]: AddressEdit,
    [NavBar.name]: NavBar
  },
  data() {
    return {
      areaList: AreaList,
      searchResult: []
    };
  },
  methods: {
    onSave(content) {
      this.$router.push({
        name: "addressList",
        params: {
          name: content.name,
          tel: content.tel,
          address:
            content.province +
            content.city +
            content.county +
            content.addressDetail
        }
      });
    },
    onDelete() {
      Toast("删除");
      this.$router.go(-1);
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    onClickLeft() {
      this.$router.push({ path: "/addressList" });
    }
  }
};
</script>

<style>
</style>   