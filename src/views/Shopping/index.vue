<template>
  <div class="shopping">
    <van-nav-bar
      title="购物车
    "
    />
    <div class="shopping-content">
      <div class="shopping-content-list">
        <!-- 单个商品 -->
        <ShoppingItem></ShoppingItem>
      </div>
      <div class="shopping-content-total">
        <div class="shopping-content-total-check">
          <van-checkbox v-model="checked" checked-color="#ee0a24"
            >全选</van-checkbox
          >
          <div class="shopping-content-total-price">
            <p class="shopping-content-total-price-total">
              合计: <span>￥0.00</span>
            </p>
            <p class="shopping-content-total-price-all">
              总额: <span>￥0.00</span>&nbsp;&nbsp;立减<span>￥0.00</span>
            </p>
          </div>
          <div class="shopping-content-total-settlement">去结算(0)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingItem from "./Item";
export default {
  components: { ShoppingItem },
  name: "Shopping",
  data() {
    return {
      checked: true,
      value: 0,
    };
  },
};
</script>

<style lang="less" scoped>
.shopping {
  height: 100%;
  display: flex;
  flex-direction: column;
  /deep/ .van-nav-bar {
    padding-top: 44px;
    position: fixed;
    width: 100%;
  }
  .shopping-content {
    background-color: #fff;
    border-top: 5px solid #e5e5e5;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    height: 100%;
    .shopping-content-list {
      height: 100%;
      overflow: hidden;
      overflow-y: auto;
      background-color: #e5e5e5;
      margin-bottom: 100px;
      margin-top: 133px;
    }
    .shopping-content-total {
      height: 100px;
      // border: 1px solid #ccc;
      position: fixed;
      bottom: 100px;
      background-color: #fff;
      width: 100%;
      line-height: 40px;
      .shopping-content-total-check {
        align-items: center;
        display: flex;
        /deep/ .van-checkbox {
          font-size: 12px;
          margin-left: 16px;
        }
      }
      .shopping-content-total-price {
        flex: 1;
        -webkit-box-flex: 2;
        column-gap: 2;
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        span {
          font-weight: bold;
        }
        .shopping-content-total-price-total {
          font-size: 32px;
          margin-bottom: 12px;
        }
        .shopping-content-total-price-all {
          font-size: 12px;
        }
      }
    }
  }
  .shopping-content-total-settlement {
    width: 240px;
    height: 100px;
    background-color: #d81e06;
    font-size: 35px;
    text-align: center;
    line-height: 100px;
    color: #fff;
  }
}
</style>
