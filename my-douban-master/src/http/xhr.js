// import apiParams from './apiParams'
import axios from 'axios'

// const instance = axios.create({
//   baseURL: apiParams.base_url,
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
//   },
//   responseType: 'json'
// })

axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // console.log(123)
    // this.$store.commit('startLoading')
    // setTimeout(function () {
    //   this.$store.commit('startLoading')
    // }, 1000)
    return config
  },
  error => {
    return Promise.reject('request error')
  }
)

axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    // console.log(456)
    // this.$store.commit('finishLoading')
    return response
  },
  error => {
    return Promise.reject('response error')
  }
)

// 移除拦截器
// axios.interceptors.request.ejcect(instance)
// axios.interceptors.response.ejcect(instance)

// 用法:
// get:http.get(url[,params]);
// post:http.post(url[,data[,params]]);
// delete:http.delete(url[,data[,params]]);
// put:http.put(url[,data[,params]]);
// patch:http.patch(url[,data[,params]]);
export default axios
