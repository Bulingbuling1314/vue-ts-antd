// 默认利用axios的cancelToken进行防重复提交。
// 如需允许多个提交同时发出。则需要在请求配置config中增加 neverCancel 属性，并设置为true
import axios from 'axios';

/* 创建axios实例 */
const service = axios.create({
  timeout: 5000 // 请求超时时间
});

/* request拦截器 */
service.interceptors.request.use((config: any) => {
  // 在这里可以统一修改请求头，例如 加入 用户 token 等操作
  //   if (store.getters.sessionId) {
  //     config.headers['X-SessionId'] = getSessionId(); // 让每个请求携带token--['X-Token']为自定义key
  //   }
  return config;
}, (error: any) => Promise.reject(error));

/* respone拦截器 */
service.interceptors.response.use((response: any) => {
  // 获取返回数据，并处理。按自己业务需求修改。下面只是个demo
  const res = response.data;
  if (res.code !== 200) {
    return Promise.reject('error');
  } else {
    return res;
  }
},
  (error: any) => {
    // 异常处理
    return Promise.reject(error);
  }
);

export default service;
