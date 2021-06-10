import axios from 'axios'
// 创建了axios实例
const service = axios.create({
  // node语法,可以获取到当前是处于什么开发环境 process.env.
  // 抽到环境变量中 后期即便测试 上线项目的时候不需要修改源码
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
// 后期自己写请求拦截器 / 响应拦截器
export default service
