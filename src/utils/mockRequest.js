import axios from "axios";
const mockRequest = axios.create({
  baseURL: "/mock",
  timeout: 5000,
});

// 响应拦截器
mockRequest.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default mockRequest;
