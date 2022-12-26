<template>
  <div ref="homeSorll" class="home">
    <!-- 顶部搜索区域 -->
    <TopNav :contentHight="contentHight"></TopNav>
    <!-- 内容区域 -->
    <div class="home-content">
      <!-- 论播图 -->
      <SwipeList @Hight="contentHight = $event"></SwipeList>
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
            <van-count-down
              :time="time"
              class="count-down-surplus"
              v-if="timeShow"
              @finish="finish"
            />
            <span class="count-down-surplus" v-else-if="timerNow"
              >活动进行中</span
            >
            <span class="count-down-surplus" v-else>活动已结束</span>
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
      <!-- 限量活动 -->
      <div class="activity2 z-index-2">
        <div class="activity-ping-gou-jie">
          <img :src="limited" alt="" />
        </div>
      </div>
      <!-- 列表 -->
      <GoodsList></GoodsList>
    </div>
  </div>
</template>

<script>
import {
  getactivitysDataApi,
  getclassifyDataApi,
  getSecondsDataApi,
  getlimitedDataApi,
} from "@/api/home.js";

import GoodsList from "./component/GoodsList";
import SwipeList from "./component/SwipeList";
import TopNav from "./component/TopNav";

import dayjs from "dayjs";

export default {
  name: "Home",
  components: { GoodsList, SwipeList, TopNav },
  data() {
    return {
      activityList: [], //活动列表数据
      classifyList: [], //分类列表数据
      secondsList: [], //秒杀列表数据
      time:
        new Date(`${dayjs(new Date()).format("YYYY-MM-DD")} 16:00:00`) -
        new Date(), //倒计时时间
      timeShow: true, //控制倒计时结束显示
      limited: "", //限量图片
      contentHight: 0,
    };
  },
  // 离开路由
  beforeRouteLeave(to, from, next) {
    this.$nextTick(() => {
      this.scrollTop = this.$refs.homeSorll.scrollTop;
    });
    //保存滚动条元素div的scrollTop值
    next();
  },
  // 进入路由
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$nextTick(() => {
        vm.$refs.homeSorll.scrollTop = vm.scrollTop;
      });
      // 为div元素重新设置保存的scrollTop值
    });
  },

  async created() {
    // 请求活动列表得数据
    try {
      let { data } = await getactivitysDataApi();
      this.activityList = data.list;
    } catch (error) {
      console.log(error);
    }

    // 请求获取分类列表得数据
    try {
      let { data } = await getclassifyDataApi();
      this.classifyList = data;
    } catch (error) {
      console.log(error);
    }

    //请求获取秒杀列表得数据
    try {
      let { data } = await getSecondsDataApi();
      this.secondsList = data.data.list;
    } catch (error) {
      console.log(error);
    }

    // 获取限量图片
    try {
      let { data } = await getlimitedDataApi();
      this.limited = data.data.imgUrl;
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    // 活动进行中
    timerNow() {
      return (
        dayjs(new Date()).format("HH") <
          dayjs(new Date("2022-12-23 17:00:00")).format("HH") &&
        dayjs(new Date()).format("HH") >=
          dayjs(new Date("2022-12-23 16:00:00")).format("HH")
      );
    },
  },
  methods: {
    finish() {
      // 控制秒杀时间的显示
      this.timeShow = false;
    },
  },
};
</script>

<style lang="less">
.home {
  overflow: hidden;
  overflow-y: auto;
  height: 100%;

  // 内容区域
  .home-content {
    // 活动模块
    .activity {
      margin-top: -18px;
      position: relative;
      .activity-list,
      /deep/.van-col {
        max-height: 200px;
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

    // 限量活动
    .activity2 {
      position: relative;
      .activity-ping-gou-jie {
        img {
          width: 100%;
        }
      }
    }

    // 列表
    .goods {
      position: relative;
      margin: 16px;
      column-count: 2;
      column-gap: 20px;
      .goods-item {
        background-color: #fff;
        width: 100%;
        margin-bottom: 16px;
        border-radius: 10px;
        overflow: hidden;
        .goods-item-pading {
          padding: 16px;
          img {
            width: 100%;
            height: auto;
          }
          .goods-item-desc {
            margin-top: -10px;
            .goods-item-desc-name {
              font-size: 28px;
              overflow: hidden;
              text-overflow: ellipsis;
              word-break: break-word;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              display: -webkit-box;
              line-height: 36px;
              .goods-item-name-direct {
                padding: 0 8px;
                background-color: #d81e06;
                color: #fff;
                border-radius: 5px;
                margin-right: 4px;
                font-size: 24px;
              }
              .goods-item-name-no-have {
                padding: 0 8px;
                background-color: #909090;
                color: #fff;
                border-radius: 5px;
                font-size: 24px;
              }
            }
            .goods-item-desc-name-hint {
              color: #999;
            }
            .goods-item-desc-data {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 8px;
              .goods-item-desc-data-price {
                font-size: 32px;
                color: #d81e06;
                font-weight: 500;
              }
              .goods-item-desc-data-volume {
                font-size: 28px;
                color: #999;
              }
            }
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
