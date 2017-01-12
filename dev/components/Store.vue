<template lang="html">
    <div>
        <router-link :to="{name: 'increment'}">go to example1</router-link>
        <router-link :to="{name: 'todo'}">go to example2</router-link>
        <transition name="fade">
            <router-view class="example"></router-view>
        </transition>
    </div>
</template>

<script>
import Todo from './Todo.vue';
import Increment from './Increment.vue';

export default {
    data: () =>{
        return{

        };
    },
    components: {
        Todo,
        Increment,
    }
}
</script>

<style lang="css">
</style>
