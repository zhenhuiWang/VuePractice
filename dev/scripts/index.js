import Vue from 'vue';
import App from '../components/App.vue';
import router from '../router';
import store from '../store/index';
const app = new Vue({
    router,
    store,  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件，通过this.$store访问
    components: {
        App,
    },
}).$mount('#app');
