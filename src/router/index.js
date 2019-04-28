import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/home/home'
import mi from '@/mi/mi'
Vue.use(Router)
    //配置路由
export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: "/home",
            name: "home",
            component: home
        },
        {
            path: "/mi",
            name: "mi",
            component: mi
        }
    ],
    mode: "history" //去除路径后面的#/

})