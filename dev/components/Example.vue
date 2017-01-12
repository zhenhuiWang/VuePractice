<template lang="html">
    <div>
        <p>
            <router-link :to="{name:'tab', params: {id: 1}}">go to example{{$route.params.id}}</router-link>
            <router-link to="/example/editbox" tag="li" active-class="active">go to example2</router-link>
            <router-link to="/example/calculator">go to example3</router-link>
            <router-link to="/example/search">go to example4</router-link>
            <router-link to="/example/selectItem">go to example5</router-link>
            <p>
                当前路径：{{$route.path}}
            </p>
            <p>
                路由名称： {{$route.name}}
            </p>
            <p>
                当前参数：{{ $route.params}}
            </p>
            <p>
                路由查询参数：{{$route.query}}
            </p>
        </p>
        <transition name="fade">
            <router-view class="example"></router-view>

        </transition>
    </div>



</template>

<script>
import Tab from './Tab.vue';
import EditBox from './EditBox.vue';
import Calculator from './Calculator.vue';
import Search from './Search.vue';
import SelectItem from './SelectItem.vue';

export default {
    data() {
        return {

        };
    },
    components: {
        Tab,
        EditBox,
        Calculator,
        Search,
        SelectItem,

    }
}
</script>

<style lang="scss" scoped>
    a{
        width: 100px;
        height: 50px;
        background-color: #eee;
    }
    .router-link-active{
        background-color: #ccc;

    }
</style>
