import Vue from 'vue'
import App from './App' //引入app.vue
import router from './router/index' //引入router下的index.js，配置的路由
import iView from 'iview' // 引入iview依赖
import 'iview/dist/styles/iview.css' // 引入iview css样式
import store from './store'
//import vuex from 'vuex
//import VueResource from 'vue-resource' //引入http请求模块vue1.0版本使用，2.0推荐使用axios
//Vue.use(VueResource) //使用VueResource--  可以在任何组件使用http请求。this.$HTTP.GET({})
Vue.config.productionTip = false //设置为 false 以阻止 vue 在启动时生成生产提示。
    //import axios from 'axios'
    // Vue.prototype.$axios = axios.create({ //如果全局配置以后，组件使用$axios会用配置的域名，否则 就用本地项目的ip
    //     baseURL: 'http://vue.iwiew.project', //域名，nginx监听到跳转后台127.0.0.1：80
    //     timeout: 1000,
    // }); //声明使用axios   http插件，我们可以把acios抽取到文件，引入使用，更简洁
Vue.use(iView) //使用iview组件 
    //路由之--全局守卫，to代表你要去的路由地址，from代表从哪个路由离开，next代表一个函数
router.beforeEach((to, from, next) => {
    if (to.path == "/mi") {
        alert("请先登陆")
    } else {
        next(); //next 函数代表正常展示信息，函数也可以根据需要处理
    }
})

new Vue({ //注意！！！！配置对象的属性名都是固定好的，所以，名字不能随便起
        el: '#app',
        /* el挂载----->'#app 引用index，html那个页面 */
        router, //vue实力中声明使用上面import引入的路由
        components: { App }, //声明上面引入的App.vue组件,
        template: '<App/>', //"template模板"将App渲染在挂载的元素标签上"，
        //然后把其他需要展示的组建，给vvm实力，vvm实现渲染在挂在的index.html页面上
        store, //挂载vuex,所有组件会有$store这个属性。！！！名字不能随便起只能叫store
    })
    //引入配置的路由，vue实力加载路由.js,自动跳转到配置的路径，
    //            比如      path: '/',
    //                      name: 'login',
    //                      component: login，
    // app.vue作为根组件，配置  <router-view></router-view>来展示页面
    //