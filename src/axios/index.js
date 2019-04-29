import axios from 'axios';
//配置axios=----http请求,
const instance = axios.create({
    baseURL: 'http://vue.iwiew.project', //域名，nginx监听到跳转后台127.0.0.1：80
    timeout: 1000,
});
// 给axios实例对象instance添加请求拦截器
instance.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    //alert("开始请求!");
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    if (response.code == 200) {
        //alert("ok200")
    }
    return response;
}, function(error) {
    // 对响应错误做点什么
    alert("网络连接错误，请检查您的网络!");
    return Promise.reject(error);
});

//对外暴露一个axios实例instance
export default instance