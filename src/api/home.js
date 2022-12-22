/**
 * @getSwiperDataApi   //获取论播图数据
 * @getSecondsDataApi   //获取秒杀列表数据
 * @getactivitysDataApi  //获取活动列表数据
 * @getclassifyDataApi   //获取分类列表数据
 * @getlimitedDataApi   //获取限量图片
 * @getgoodsDataApi   //获取列表数据
 */

import request from "@/utils/request";
import mockRequest from "@/utils/mockRequest";

// 轮播图   url:/swiper    method:get
export const getSwiperDataApi = () => {
  return request({
    url: "/swiper",
    method: "GET",
  });
};

// 秒杀列表  url:/seconds    method:get
export const getSecondsDataApi = () => {
  return mockRequest({
    url: "/miaosha",
    method: "GET",
  });
};

// 活动数据   url:/activitys   method:get
export const getactivitysDataApi = () => {
  return request({
    url: "/activitys",
    method: "GET",
  });
};

// 分类列表得数据   url:/banner   method:get
export const getclassifyDataApi = () => {
  return mockRequest({
    url: "/banner",
    method: "GET",
  });
};

// 限量图片   url:/xianliang   method:get
export const getlimitedDataApi = () => {
  return mockRequest({
    url: "/xianliang",
    method: "GET",
  });
};

// 列表数据   url:/goods   method:get
export const getgoodsDataApi = () => {
  return mockRequest({
    url: "/goods",
    method: "GET",
  });
};
