import Vue from 'vue'; 
import App from './app.vue';
import router from './router/router'; //router配置
import store from './vuex/store'; //vuex配置
import './libs/rem'
import './style.less';

new Vue({
    el: '#app',
    router:router,
    store:store,
    render: h => {
        return h(App);
    }
});