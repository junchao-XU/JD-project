<template>
  <div>
    <!-- 列表 -->
    <div class="goods">
      <div
        class="goods-item"
        v-for="goods in goodsList"
        :key="goods.id"
        @click="detailsFun(goods)"
      >
        <div class="goods-item-pading">
          <img :src="goods.img" alt="" :style="{ height: higth() + 'px' }" />
          <div class="goods-item-desc">
            <p
              class="goods-item-desc-name"
              :class="{ 'goods-item-desc-name-hint': goods.isHave }"
            >
              <span class="goods-item-name-direct" v-if="goods.isDirect"
                >直营</span
              >
              <span class="goods-item-name-no-have" v-if="!goods.isHave"
                >缺货</span
              >
              {{ goods.name }}
            </p>
            <div class="goods-item-desc-data">
              <p class="goods-item-desc-data-price">￥{{ goods.price }}</p>
              <p class="goods-item-desc-data-volume">
                销量: {{ goods.volume }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getgoodsDataApi } from "@/api/home.js";
export default {
  name: "GoodsList",
  data() {
    return {
      goodsList: [], //列表数据
    };
  },
  async created() {
    // 获取列表数据
    try {
      let { data } = await getgoodsDataApi();
      this.goodsList = data.data.list;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    // 列表随机高度
    higth() {
      return Math.floor(Math.random() * (230 - 180 + 1)) + 180;
    },
    detailsFun(goods) {
      if (!goods.isHave) return this.$toast.fail("此商品卖空啦");
      this.$router.push({ name: "goodsd", query: { goodsId: goods.id } });
    },
  },
};
</script>

<style lang="less" scoped>
// 分类列表
.mode-options {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  padding-bottom: 28px;
  .mode-options-item {
    width: 20%;
    text-align: center;
    margin-top: 20px;
    .mode-options-item-title {
      font-size: 12px;
      margin: 0;
    }
  }
}
</style>
