<template lang="html">
    <div>
        <p>count:{{count}}</p>
        <p>count的两倍：{{doubleCount}}</p>
        <button type="button" name="button" @click="increment">add 10</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import { mapState } from 'vuex';

console.log(mapState(['count']), '======---');
export default {
    data: () => {
        return{

        };
    },

    // 将store中的getters映射到局部计算属性中
    computed: {

        ...mapState(['count']),
        // mapGetters函数返回的是一个对像，使用对象展开运算符将此对象混入到外部对象中
        // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapGetters 传一个字符串数组。
        ...mapGetters([
            'doubleCount',
        ]),

        // 如果你想将一个getter属性另取一个名字，就像下面这么用
        // ...mapGetters({
        //     count: 'doubleCount',
        // }),
    },
    methods: {
        ...mapActions([
            'increment',
        ]),

    }
}
</script>

<style lang="css">
</style>
