import axj from '@/axios/index';


export default {

    login() {
        //alert("333")
        const data = {};
        return axj({
            url: '/login/user/1',
            method: 'GET',
            data
        });
    },

}