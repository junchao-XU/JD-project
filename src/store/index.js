import Vue from "vue";
import Vuex from "vuex";
import { Toast } from "vant";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Shoppings: JSON.parse(localStorage.getItem("SHOPPING")) || [], //加入购物车的商品
    goodsId: 0,
  },
  getters: {},
  mutations: {
    GETGOODSDATE(state, goodsObj) {
      let index = state.Shoppings.findIndex((item) => {
        return item.id == goodsObj.id;
      });
      if (index != -1) {
        state.Shoppings[index].count++;
        localStorage.setItem("SHOPPING", JSON.stringify(state.Shoppings));
        return Toast("此商品添加过了");
      }
      Vue.set(goodsObj, "count", 1);
      state.Shoppings.push(goodsObj);
      localStorage.setItem("SHOPPING", JSON.stringify(state.Shoppings));
    },
    GOODSID(state, goodsId) {
      state.goodsId = goodsId;
    },
    SETDONE(state, { isDirect, id }) {
      state.Shoppings.forEach((item) => {
        item.id == id ? (item.isDirect = isDirect) : item.isDirect;
      });
    },
  },
  actions: {},
  modules: {},
});
