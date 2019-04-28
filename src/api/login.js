export default {

    login() {
        alert("333")
        const data = {};
        return fetch({
            url: '/login',
            method: 'POST',
            data
        });
    },

}