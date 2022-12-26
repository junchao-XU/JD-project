import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 路由表
const routes = [
  // 路由重定向
  {
    path: "/",
    redirect: "/layout/home",
  },
  {
    path: "/layout",
    component: () => import("@/views/layout"),
    children: [
      {
        path: "home",
        name: "home",
        meta: { keepAlive: true }, //用于路由缓存
        component: () => import("@/views/Home"),
      },
      {
        path: "shopping",
        name: "shopping",
        meta: { keepAlive: true }, //用于路由缓存
        component: () => import("@/views/Shopping"),
      },
      {
        path: "user",
        name: "user",
        component: () => import("@/views/User"),
      },
    ],
  },
  {
    path: "/goodsd",
    name: "goodsd",
    meta: { keepAlive: true }, //用于路由缓存
    component: () => import("@/views/goodsDetails"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
