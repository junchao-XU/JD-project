<template>
  <div>
    <div
      class="nav-bar z-index-max"
      :style="{ 'background-color': `rgba(255, 255, 255, ${color1})` }"
    >
      <!-- 左侧更多按钮 -->
      <div class="left">
        <i
          class="iconfont icon-gengduo"
          :style="{ color: color2 ? '#000' : '' }"
        ></i>
      </div>
      <!-- 中间搜索部分 -->
      <div class="center">
        <div
          class="search"
          :style="{ 'background-color': color2 ? '#ccc' : '' }"
        >
          <i
            class="iconfont icon-sousuo"
            :style="{ color: color2 ? '#fff' : '' }"
          ></i>
          <span class="search-hint" :style="{ color: color2 ? '#fff' : '' }"
            >大前端开发，混合京东商城系统</span
          >
        </div>
      </div>
      <!-- 右侧消息部分 -->
      <div class="right">
        <i
          class="iconfont icon-xiaoxi"
          :style="{ color: color2 ? '#000' : '' }"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contentHight"],
  name: "TopNav",
  data() {
    return {
      scroll: 0,
      color1: 0,
      color2: false,
    };
  },
  activated() {
    document.addEventListener("scroll", this.handleScroll, true);
  },
  deactivated() {
    document.removeEventListener("scroll", this.handleScroll, true);
  },
  watch: {
    scroll(newval, oldval) {
      if (this.scroll >= this.contentHight) {
        this.color1 = 1;
        this.color2 = true;
        return;
      }
      this.color2 = false;
      if (this.scroll <= 0) return (this.color1 = 0);
      if (newval > oldval) {
        this.color1 = (this.color1 * 100 + 0.01 * 100) / 100;
      } else if (newval < oldval) {
        this.color1 = (this.color1 * 100 - 0.01 * 100) / 100;
      }
    },
  },
  methods: {
    // 页面滚动的距离
    handleScroll(e) {
      this.scroll = e.target.scrollTop;
      this.$route.meta.top = document.scrollY;
    },
  },
};
</script>

<style lang="less" scoped>
// 搜索导航栏
.nav-bar {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 88px;
  line-height: 88px;
  padding-top: 44px;
  .left {
    display: flex;
    height: 100%;
    width: 42px;
    padding: 0 16px;
    .iconfont {
      color: #fff;
    }
  }
  .right {
    display: flex;
    height: 100%;
    width: 42px;
    padding: 0 16px;
    .iconfont {
      color: #fff;
      font-size: 50px;
    }
  }
  .center {
    display: flex;
    height: 100%;
    flex-grow: 1;
    .search {
      width: 100%;
      margin: 12px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      background-color: #fff;
      .iconfont {
        font-size: 30px;
        margin-left: 16px;
        color: #999;
      }
      .search-hint {
        font-size: 12px;
        color: #999;
        margin-left: 16px;
      }
    }
  }
}
</style>
