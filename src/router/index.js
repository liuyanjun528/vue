import Vue from 'vue' //应为vue-router是vue的插件，所以也必须要引入vue
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/home/home'
import mi from '@/mi/mi'
Vue.use(Router) //声明使用router
    //配置路由器，向外暴露配置的router 实录
export default new Router({
    routes: [
        // {
        //     path: "/",
        //     name: "login",
        //     redirect: login  重定向
        // },

        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: "/home",
            name: "home",
            component: home,
            children: [ //定义嵌套路由，path后面的/永远表示跟路径，可以这么写 path：/home/home22
                //还有一种简洁的写法。直接path：'home22'
                // {
                //     path: 'home22',
                //     name: 'home22',
                //     component: home22

                // }

            ]

        },
        {
            path: "/mi",
            name: "mi",
            component: mi
        }
    ],
    mode: "history" //去除路径后面的#/


})