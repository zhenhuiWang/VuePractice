// 导入模块
const Vue = require('vue');
const VueRouter = require('vue-router');

import Demo from './components/Demo.vue';
import Example from './components/Example.vue';
import Store from './components/Store.vue';

import Calculator from './components/Calculator.vue';
import EditBox from './components/EditBox.vue';
import Search from './components/Search.vue';
import SelectItem from './components/SelectItem.vue';
import Tab from './components/Tab.vue';
import Todo from './components/Todo.vue';
import Increment from './components/Increment.vue';


// 使用模块化机制需要调用
Vue.use(VueRouter);

// 定义路由
const routes = [
    {
        path: '/demo', // 当前路由对象的路径
        name: 'demo', // 当前路径名字
        component: Demo, //映射一个组件
    }, {
        path: '/example',
        name: 'example',
        component: Example,
        children: [
            {
                path: 'tab/:id',
                name: 'tab',
                component: Tab,
            },
            {
                path: 'editBox',
                name: 'editBox',
                component: EditBox,
            },
            {
                path: 'calculator',
                name: 'calculator',
                component: Calculator,
            },
            {
                path: 'editbox',
                name: 'editbox',
                component: EditBox,
            },
            {
                path: 'search',
                name: 'search',
                component: Search,
            },
            {
                path: 'selectItem',
                name: 'selectItem',
                component: SelectItem,
            },
        ],
    }, {
        path: '/store',
        name: 'store',
        component: Store,
        children: [
            {
                path: 'todo',
                name: 'todo',
                component: Todo,
            },
            {
                path: 'increment',
                name: 'increment',
                component: Increment,
            },
        ],

    }, {
        path: '/',
        redirect: '/demo', // 将根路径重定向到‘/demo’这个路径
    },
];

// 创建rooter实例，然后传routes配置
const router = new VueRouter({
    routes,
});
router.beforeEach((to, from, next) => {
    console.log(`离开的目标路由${from.path}`);
    console.log(`进入目标路由${to.path}`);
    next();
});
export default router;
