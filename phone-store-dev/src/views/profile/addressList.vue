<template>
  <div class="addres-list">
    <van-nav-bar title="我的收货地址" left-arrow @click-left="onClickLeft" />

    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
    <van-action-sheet v-model="show" title="修改地址">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          @click-right-icon="$toast('请输入用户名')"
        />

        <van-field v-model="mobile" type="text" label="联系方式" required />
        <van-field v-model="address" type="text" label="收货地址" required />
      </van-cell-group>
    </van-action-sheet>
  </div>
</template>

<script>
import {
  AddressList,
  NavBar,
  ActionSheet,
  CellGroup,
  Field,
  Button,
  Toast
} from "vant";
import DefaultList from "@/service/addressDefault";
export default {
  components: {
    [AddressList.name]: AddressList,
    [NavBar.name]: NavBar,
    [ActionSheet.name]: ActionSheet,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button
  },
  created() {
    if (this.$route.params.name !== undefined) {
      for (let i in this.list) {
        if (this.list[i].id === "3") {
          break;
        } else {
          this.list.unshift({
            id: 3,
            name: this.$route.params.name,
            tel: this.$route.params.tel,
            address: this.$route.params.address
          });
          this.chosenAddressId = 3;
          break;
        }
      }
    }
  },
  data() {
    return {
      show: false,
      username: "",
      mobile: "",
      address: "",
      chosenAddressId: "1",
      list: DefaultList["list"],
      disabledList: DefaultList["disabledList"]
    };
  },

  methods: {
    onAdd() {
      this.$router.push({
        path: "/addressAdd"
      });
    },

    onEdit(item) {
      this.show = true;
      this.username = item.name;
      this.mobile = item.tel;
      this.address = item.address;
    },
    onSelect(item) {
      Toast(item.name);
      this.$router.push({ path: "/profile" });
    },
    onClickLeft() {
      this.$router.push({ path: "/profile" });
    }
  }
};
</script>

<style>
.van-action-sheet {
  height: 300px;
}
</style>