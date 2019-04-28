import axios from 'axios';
//配置axios=----http请求
const instance = axios.create({
    baseURL: 'vue.iwiew.project', //域名，nginx监听到跳转后台127.0.0.1：80
    timeout: 1000,
});
export default instance