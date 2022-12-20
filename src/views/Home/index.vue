<template>
  <div class="home">
    <!-- 顶部搜索区域 -->
    <div class="nav-bar z-index-max">
      <!-- 左侧更多按钮 -->
      <div class="left">
        <i class="iconfont icon-gengduo"></i>
      </div>
      <!-- 中间搜索部分 -->
      <div class="center">
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
          <span class="search-hint">大前端开发，混合京东商城系统</span>
        </div>
      </div>
      <!-- 右侧消息部分 -->
      <div class="right">
        <i class="iconfont icon-xiaoxi"></i>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="home-content">
      <!-- 论播图 -->
      <div>
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
      <!-- 活动模块 -->
      <div class="activity z-index-2">
        <van-row class="activity-list">
          <van-col span="8" v-for="activity in activityList" :key="activity.id">
            <img :src="activity.icon" alt="" />
          </van-col>
        </van-row>
      </div>
      <!-- 分类列表 -->
      <div class="mode-options">
        <div
          class="mode-options-item"
          v-for="classify in classifyList"
          :key="classify.id"
        >
          <img :src="classify.imgUrl" alt="" />
          <p class="mode-options-item-title">{{ classify.title }}</p>
        </div>
      </div>
      <!-- 秒杀模块 -->
      <div class="seconds">
        <div class="seconds-wrap">
          <p class="seconds-wrap-title">京东秒杀</p>
          <div class="count-down">
            <span class="count-down-end-time">16点场</span>
            <van-count-down :time="time" class="count-down-surplus" />
          </div>
        </div>
        <div class="seconds-content">
          <div
            class="seconds-item"
            v-for="seconds in secondsList"
            :key="seconds.id"
          >
            <img :src="seconds.icon" alt="" />
            <p class="seconds-item-price">￥{{ seconds.price }}</p>
            <p class="seconds-item-old-price">￥{{ seconds.oldPrice }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getSwiperDataApi,
  getactivitysDataApi,
  getclassifyDataApi,
  getSecondsDataApi,
} from "@/api/home.js";
export default {
  name: "Home",
  data() {
    return {
      swipeList: JSON.parse(localStorage.getItem("DATA_1")) || [], //轮播图数据
      activityList: JSON.parse(localStorage.getItem("DATA_2")) || [], //活动列表数据
      classifyList: JSON.parse(localStorage.getItem("DATA_3")) || [], //分类列表数据
      secondsList: [], //秒杀列表数据
      time: new Date("16:00:00"),
    };
  },
  async created() {
    // 请求论播图得数据
    try {
      let { data } = await getSwiperDataApi();
      this.swipeList = data.list;
      localStorage.setItem("DATA_1", JSON.stringify(this.swipeList));
    } catch (error) {
      console.log(error);
    }

    // 请求活动列表得数据
    try {
      let { data } = await getactivitysDataApi();
      this.activityList = data.list;
      localStorage.setItem("DATA_2", JSON.stringify(this.activityList));
    } catch (error) {
      console.log(error);
    }

    // 请求获取分类列表得数据
    try {
      let { data } = await getclassifyDataApi();
      this.classifyList = data;
      localStorage.setItem("DATA_3", JSON.stringify(this.classifyList));
    } catch (error) {
      console.log(error);
    }

    //请求获取秒杀列表得数据
    try {
      let { data } = await getSecondsDataApi();
      console.log(data.data.list);
      this.secondsList = data.data.list;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="less" scoped>
.home {
  overflow: hidden;
  overflow-y: auto;
  height: 100%;

  // 搜索导航栏
  .nav-bar {
    position: fixed;
    background-color: rgba(255, 255, 255, 0);
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

  // 内容区域
  .home-content {
    // 抡播图
    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      text-align: center;
    }

    // 活动模块
    .activity {
      margin-top: -18px;
      position: relative;
      .activity-list,
      /deep/.van-col {
        max-height: 200px;
        img {
          width: 100%;
        }
      }
    }

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
        img {
          width: 80px;
          height: 80px;
        }
        .mode-options-item-title {
          font-size: 12px;
          margin: 0;
        }
      }
    }

    // 秒杀模块
    .seconds {
      margin: 16px;
      background-color: #fff;
      border-radius: 20px;
      .seconds-wrap {
        display: flex;
        padding: 16px;
        align-items: center;
        .seconds-wrap-title {
          font-size: 32px;
          display: inline-block;
        }
        .count-down {
          display: flex;
          font-size: 28px;
          margin-left: 16px;
          .count-down-end-time {
            background-color: #d81e06;
            padding: 4px 8px;
            color: #fff;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            font-weight: bold;
            line-height: 50px;
          }
          .count-down-surplus {
            padding: 4px 8px;
            color: #d81e06;
            border: 1px solid #d81e06;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            line-height: 50px;
          }
        }
      }
      .seconds-content {
        padding: 16px 0;
        display: flex;
        overflow: hidden;
        overflow-x: scroll;
        .seconds-item {
          padding: 0 24px;
          text-align: center;
          img {
            width: 132px;
            height: 132px;
          }
          .seconds-item-price {
            color: #d81e06;
            font-size: 32px;
          }
          .seconds-item-old-price {
            color: #999;
            font-size: 28px;
            text-decoration: line-through;
          }
        }
      }
    }
  }
  // 最高级显示
  .z-index-max {
    z-index: 99999999;
  }
  //第二显示
  .z-index-2 {
    z-index: 2;
  }
}
</style>
