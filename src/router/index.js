import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 路由表
const routes = [
  // 路由重定向
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/views/Home"),
  },
  {
    path: "/shopping",
    component: () => import("@/views/Shopping"),
  },
  {
    path: "/user",
    component: () => import("@/views/User"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
