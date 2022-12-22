<template>
  <div class="goods-detail">
    <!-- 导航栏 -->
    <div
      class="nav-bar z-index-max"
      style="background-color: rgba(216, 30, 6, 1)"
    >
      <div class="left">
        <div class="goods-detail-nav-left">
          <img
            src="http://imooc.hybrid.lgdsunday.club/img/back-2.79123819.svg"
            alt=""
          />
          <img
            src="http://imooc.hybrid.lgdsunday.club/img/back-white.ee5cdaa6.svg"
            alt=""
          />
        </div>
      </div>
      <div class="center">
        <p class="goods-detail-nav-title">商品详情</p>
      </div>
      <div class="right"></div>
    </div>
    <!-- 内容区域 -->
    <div class="goods-detail-content">
      <div class="parallax">
        <div class="parallax-slow" style="top: 0">
          <!-- 轮播图 -->
          <van-swipe class="my-swipe" height="364" @change="onChange">
            <van-swipe-item>
              <van-image
                src="http://imooc.res.lgdsunday.club/goods-swiper-1-1.webp.jpg"
                height="100%"
                width="100%"
              />
            </van-swipe-item>
            <template #indicator>
              <div class="custom-indicator">{{ current + 1 }}/4</div>
            </template>
          </van-swipe>
        </div>
        <!-- 详情 -->
        <div class="parallax-content z-index-2">
          <div class="goods-detail-content-desc">
            <div class="goods-detail-content-desc-item">
              <p class="goods-detail-content-desc-item-price">￥38000</p>
              <p class="goods-detail-content-desc-item-name">
                【二手95新】劳力士 日志型系列 奢侈品18K白金男腕表
                自动机械男士手表 116264 白色表盘
              </p>
            </div>
            <div class="goods-detail-content-desc-item">
              <p class="goods-detail-content-desc-item-select">
                已选
                <span class="single-row-text"
                  >【二手95新】劳力士 日志型系列 奢侈品18K白金男腕表
                  自动机械男士手表 116264 白色表盘</span
                >
              </p>
              <div class="goods-detail-content-desc-item-support">
                <ul class="detail-content-list">
                  <li>
                    <img
                      src="	http://imooc.hybrid.lgdsunday.club/img/support.4f37cf65.svg"
                      alt=""
                    />
                    <span>可配送海外</span>
                  </li>
                  <li>
                    <img
                      src="	http://imooc.hybrid.lgdsunday.club/img/support.4f37cf65.svg"
                      alt=""
                    />
                    <span>京东发货&售后</span>
                  </li>
                  <li>
                    <img
                      src="	http://imooc.hybrid.lgdsunday.club/img/support.4f37cf65.svg"
                      alt=""
                    />
                    <span>京准达</span>
                  </li>
                  <li>
                    <img
                      src="	http://imooc.hybrid.lgdsunday.club/img/support.4f37cf65.svg"
                      alt=""
                    />
                    <span>211限时达</span>
                  </li>

                  <li>
                    <img
                      src="	http://imooc.hybrid.lgdsunday.club/img/support.4f37cf65.svg"
                      alt=""
                    />
                    <span>可自提</span>
                  </li>
                  <li>
                    <img
                      src="	http://imooc.hybrid.lgdsunday.club/img/support.4f37cf65.svg"
                      alt=""
                    />
                    <span>不可使用优惠券</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="detail-img-list">
              <van-image
                src="http://imooc.res.lgdsunday.club/goods-detail-1-1.jpg"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="less" scoped>
.goods-detail {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  .nav-bar {
    width: 100%;
    height: 88px;
    position: fixed;
    top: 0px;
    line-height: 88px;
    display: flex;
    justify-content: space-between;
    padding-top: 44px;
    .left,
    .right {
      display: flex;
      height: 100%;
      width: 52px;
      padding: 0 16px;
      img {
        width: 100%;
        align-self: center;
      }
      .goods-detail-nav-left {
        position: relative;
        width: 100%;
        img {
          position: absolute;
          left: 0;
          top: 50%;
          margin-top: -26px;
        }
      }
    }
    .center {
      display: flex;
      height: 100%;
      flex-grow: 1;
      .goods-detail-nav-title {
        width: 100%;
        height: 100%;
        font-size: 32px;
        font-weight: 700;
        text-align: center;
        color: #fff;
      }
    }
  }

  .goods-detail-content {
    overflow: hidden;
    height: 100%;
    .parallax {
      width: 100%;
      height: 100%;
      overflow: hidden;
      overflow-y: scroll;
      .parallax-slow {
        width: 100%;
        position: relative;
        .my-swipe .van-swipe-item {
          color: #fff;
          font-size: 20px;
          text-align: center;
        }
      }
    }
  }
  .custom-indicator {
    position: absolute;
    right: 0;
    bottom: 80px;
    padding: 12px 36px;
    font-size: 40px;
    color: #fff;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50px 0 0 50px;
    font-weight: 700;
  }
  .z-index-max {
    z-index: 9999999;
  }
  .z-index-2 {
    z-index: 2;
  }
}
</style>
