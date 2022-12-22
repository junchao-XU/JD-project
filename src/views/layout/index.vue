<template>
  <div class="main">
    <!-- 2级路由挂载点 -->
    <router-view></router-view>

    <!-- 底部导航栏 -->
    <div class="bootom z-index-max" v-if="$route.path !== '/goodsd'">
      <van-tabbar
        v-model="active"
        active-color="#ee0a24"
        inactive-color="#000"
        route
      >
        <van-tabbar-item replace :to="{ name: 'home' }">
          <span>首页</span>
          <template #icon>
            <i class="iconfont icon-shouye"></i>
          </template>
        </van-tabbar-item>
        <van-tabbar-item replace :to="{ name: 'shopping' }">
          <span>购物车</span>
          <template #icon>
            <i class="iconfont icon-gouwuchekong"></i>
          </template>
        </van-tabbar-item>
        <van-tabbar-item replace :to="{ name: 'user' }">
          <span>我的</span>
          <template #icon>
            <i class="iconfont icon-31wode"></i>
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less">
img {
  border-style: 0 !important;
  width: 100%;
}
.main {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .iconfont {
    font-size: 45px;
  }
  .z-index-max {
    z-index: 99999999;
  }
  .bootom {
    padding: 50px;
  }
}
</style>
