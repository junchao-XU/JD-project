<template>
  <div>
    <div ref="content">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          v-for="swipe in swipeList"
          :key="swipe.id"
          style="height: 184px"
        >
          <img :src="swipe.icon" alt style="width: 100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getSwiperDataApi } from "@/api/home.js/";
export default {
  name: "SwipeList",
  data() {
    return {
      swipeList: [], //轮播图数据
      contentHight: 0, //轮播图的高度
      loading: false,
    };
  },
  async mounted() {
    // 请求论播图得数据
    try {
      let { data } = await getSwiperDataApi();
      this.swipeList = data.list;
    } catch (error) {
      console.log(error);
    }
    // 获得轮播图的高度
    this.$nextTick(() => {
      this.contentHight = this.$refs.content.offsetHeight;
      this.$emit("Hight", this.contentHight);
    });
  },
};
</script>

<style lang="less" scoped>
// 抡播图
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  height: 175px;
}
</style>
