import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入默认样式
import "@/style/index.css";
// 引入flexible.js适配文件
import "amfe-flexible";
// 引入mock
import "@/mock/mockServe";
// 引入vant组件库
import vant from "vant";
import "vant/lib/index.css";
// 全局注册vant组件库
Vue.use(vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
