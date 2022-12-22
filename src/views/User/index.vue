<template>
  <div>
    <van-nav-bar title="个人中心" />
    <div class="my-content">
      <div class="my-content-desc">
        <van-image
          width="52px"
          height="52px"
          round
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="my-content-desc-login">登录/注册</p>
      </div>
      <div>
        <van-cell title="全部订单" is-link />
        <van-cell title="我的预约" is-link />
        <van-cell title="应用推荐" is-link />
        <van-cell title="用户福利" is-link />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
};
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar {
  padding-top: 44px;
}
.my-content {
  width: 100%;
  height: 100%;
  .my-content-desc {
    margin-top: 16px;
    background-color: #fff;
    height: 136px;
    display: flex;
    align-items: center;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    padding: 16px;
    .my-content-desc-login {
      font-size: 32px;
      margin-left: 10px;
    }
  }
}
</style>
