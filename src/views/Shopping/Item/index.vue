<template>
  <div class="shopping-content-list-item">
    <div class="shopping-content-list-item-checkbox">
      <van-checkbox v-model="checked" checked-color="#ee0a24" />
    </div>
    <img :src="goodsObj.img" alt="" class="shopping-content-list-item-img" />
    <div class="shopping-content-list-item-desc">
      <p class="shopping-content-list-item-desc-name">
        {{ goodsObj.name }}
      </p>
      <div class="shopping-content-list-item-desc-data">
        <p class="shopping-content-list-item-desc-data-price">
          ￥{{ goodsObj.price }}
        </p>
        <div class="number-manager">
          <van-stepper v-model="value" integer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingItem",
  props: {
    goodsObj: Object,
  },
  data() {
    return {};
  },
  computed: {
    checked: {
      get() {
        return this.goodsObj.isDirect;
      },
      set(val) {
        this.$store.commit("SETDONE", { isDirect: val, id: this.goodsObj.id });
      },
    },
    value: {
      get() {
        return this.goodsObj.count || 1;
      },
      set(val) {
        this.$emit("setValue", val);
      },
    },
  },
  // watch: {
  //   value: {
  //     handler() {
  //       this.$emit("setValue", this.value);
  //     },
  //   },
  // },
};
</script>

<style lang="less" scoped>
.shopping-content-list-item {
  background-color: #fff;
  padding: 16px;
  display: flex;
  border-bottom: 4px solid #e5e5e5;
  border-top: 4px solid #e5e5e5;
  .shopping-content-list-item-checkbox {
    text-align: center;
    width: 100px;
    height: 100%;
    /deep/ .van-checkbox {
      display: inline-block;
      margin-top: 80px;
    }
  }
  .shopping-content-list-item-img {
    width: 200px;
    height: 200px;
  }
  .shopping-content-list-item-desc {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 16px;
    .shopping-content-list-item-desc-name {
      font-size: 28px;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      line-height: 36px;
    }
    .shopping-content-list-item-desc-data {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .shopping-content-list-item-desc-data-price {
        font-size: 32px;
        color: #d81e06;
      }
    }
  }
}
</style>
