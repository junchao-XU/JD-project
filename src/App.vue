<template>
  <div class="main">
    <!-- 一级路由挂载点 -->
    <router-view></router-view>

    <!-- 底部导航栏 -->
    <van-tabbar
      v-model="active"
      active-color="#ee0a24"
      inactive-color="#000"
      route
    >
      <van-tabbar-item replace to="/home">
        <span>首页</span>
        <template #icon>
          <i class="iconfont icon-shouye"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/shopping">
        <span>购物车</span>
        <template #icon>
          <i class="iconfont icon-gouwuchekong"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/user">
        <span>我的</span>
        <template #icon>
          <i class="iconfont icon-31wode"></i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less">
.main {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .iconfont {
    font-size: 45px;
  }
}
</style>
