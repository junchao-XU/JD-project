<template>
  <div class="goods-detail">
    <!-- 导航栏 -->
    <div
      class="nav-bar z-index-max"
      style="background-color: rgba(216, 30, 6, 1)"
    >
      <div class="left" @click="$router.back()">
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
            <van-swipe-item
              v-for="(swipe, index) in goodsObj.swiperImgs"
              :key="index"
            >
              <van-image :src="swipe" height="100%" width="100%" />
            </van-swipe-item>
            <template #indicator>
              <div class="custom-indicator">
                {{ current + 1 }}/{{ goodsObj.swiperImgs?.length }}
              </div>
            </template>
          </van-swipe>
        </div>
        <!-- 详情 -->
        <div class="parallax-content z-index-2">
          <div class="goods-detail-content-desc">
            <div class="goods-detail-content-desc-item">
              <p class="goods-detail-content-desc-item-price">
                ￥{{ goodsObj.price }}
              </p>
              <p class="goods-detail-content-desc-item-name">
                {{ goodsObj.name }}
              </p>
            </div>
            <div class="goods-detail-content-desc-item">
              <p class="goods-detail-content-desc-item-select">
                已选
                <span class="single-row-text"> {{ goodsObj.name }}</span>
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
                v-for="(detail, index) in goodsObj.detailImgs"
                :key="index"
                :src="detail"
                width="100%"
                ref="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="goods-detail-buy">
      <div class="goods-detail-buy-add" @click="addFun">加入购物车</div>
      <div class="goods-detail-buy-now">立即购买</div>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
import { getgoodsDetailApi } from "@/api/home";
export default {
  data() {
    return {
      current: 0,
      goodsObj: {},
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    addFun() {
      this.$router.push({ name: "shopping" });
      this.$store.commit("GETGOODSDATE", this.goodsObj);
    },
  },
  async activated() {
    try {
      let { data } = await getgoodsDetailApi(this.$route.query.goodsId);
      this.goodsObj = data.goodsData;
      this.swiperImgs = this.goodsObj.swiperImgs;
      this.$nextTick(() => {
        const imagelist = this.$refs.image;
        let imgPath = [];
        imagelist.forEach((item, index) => {
          imgPath.push(item.src);
          item.$el.onclick = function () {
            ImagePreview({
              images: imgPath,
              startPosition: index,
            });
          };
        });
      });
    } catch (error) {
      console.log(error);
    }
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
      .parallax-content {
        height: 100%;
        position: relative;
        .goods-detail-content-desc {
          width: 100%;
          background-color: #eee;
          .goods-detail-content-desc-item {
            background-color: #fff;
            padding: 18px;
            margin-bottom: 18px;
            .goods-detail-content-desc-item-price {
              font-size: 44px;
              color: #d81e06;
              font-weight: 500;
            }
            .goods-detail-content-desc-item-name {
              margin-top: 18px;
              font-size: 36px;
              font-weight: 500;
            }
          }
          .goods-detail-content-desc-item {
            background-color: #fff;
            padding: 18px;
            margin-bottom: 18px;
            .goods-detail-content-desc-item-select {
              color: #999;
              display: flex;
              font-size: 30px;
              height: 100px;
              align-items: center;
              border-bottom: 2px solid #e5e5e5;
              .single-row-text {
                color: #333;
                font-size: 36px;
                font-weight: bolder;
                width: 80%;
                margin-left: 8px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
              }
            }
            .goods-detail-content-desc-item-support {
              margin-top: 18px;
              ul {
                display: flex;
                flex-wrap: wrap;
                li {
                  display: flex;
                  align-items: center;
                  padding: 12px 0;
                  margin-right: 18px;
                  font-size: 26px;
                  img {
                    width: 26px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .goods-detail-buy {
    background-color: #fff;
    border-top: 2px solid #e5e5e5;
    height: 100px;
    width: 100%;
    line-height: 80px;
    text-align: right;
    div {
      display: inline-block;
      width: 224px;
      padding: 10px 0;
      text-align: center;
      color: #fff;
      font-size: 30px;
    }
    .goods-detail-buy-add {
      background-color: #d81e06;
    }
    .goods-detail-buy-now {
      background-color: #b8860b;
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
