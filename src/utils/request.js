import axios from "axios";
const request = axios.create({
  baseURL: "http://api.imooc.hybrid.lgdsunday.club",
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use((config) => {
  const token = "595fe950-7ebd-11ed-aa1f-dd279271aa3a";
  // 都是GET请求,不需要做请求类型判断
  config.params = {
    token: token,
  };
  return config;
});

// 响应拦截器
request.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default request;
