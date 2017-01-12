<template lang="html">
    <div class="app-container">
        <p>
            <router-link to="/demo">Demos</router-link>
            <router-link to="/example">Examples</router-link>
            <router-link to="/store">Store</router-link>
        </p>
        <div class="content-container">
            <transition name="opacity" mode="out-in">
                <router-view></router-view>
            </transition>

        </div>

    </div>

</template>

<script>
import Demo from './Demo.vue';
import Example from './Example.vue';
import Store from './Store.vue';


export default {
    data() {
        return {

        };
    },
    components: {
        Demo,
        Example,
        Store,

    }
}
</script>

<style lang='scss' scoped>
@import "../style/reset";
.app-container{
    margin-left: 10px;
    .content-container{
        margin-top: 40px;
    }
    .router-link-active{
        background-color: #19b586;
    }
    a{
        width: 100px;
        height: 50px;
        background-color: pink;
        padding: 10px;
    }
}
.opacity-enter-active, .opacity-leave-active{
    transition: opacity 0.4s ease;
}
.opacity-enter, .opacity-leave-active{
    opacity: 0;
}
</style>
