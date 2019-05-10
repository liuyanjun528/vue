import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
    //创建好，需要引入到main。js中，全局使用，组件会由$store属性
const state = {
    count: 0, //初始化状态
}
const mutations = { //更改state的值
    JIA(state) {
        state.count++
    },
    JIAN(state) {
        state.count--
    }
}
const actions = { //由组件中的方法触发actions的函数，然后再执行mutations，改变store中状态的值
    jia({ commit }) {
        commit('JIA')
    },
    jian({ commit }) {
        commit('JIAN')
    }

}
const getters = {
    //定义一个计算属性，它是一个函数，操作计算state状态的值,值不需要传，直接写，vuex可以识别state
    //可以在这里计算一些值，比如count++等
    loveyou(state) {
        return state.count % 2 === 0 ? '偶数' : '奇数';
    }
}
export default new Vuex.Store({
    state, //包含多个状态的对象
    mutations, //包含执行actions对象多个方法的对象，来直接改变state的值
    actions, //包含多个方法，由组件触发，然后调用mutations的方法，间接改变state的值
    getters, //用来计算state中属性的值

})