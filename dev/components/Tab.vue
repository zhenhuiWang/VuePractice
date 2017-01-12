<template lang="html">
    <div class="container">
        <div id="tab">
            <div
            :class="{active: index === activeIndex}"
            v-for="(item, index) in items"
            :key="index"
            @click="now(index)" >{{item}}</div>
        </div>
        <p>you choose <b>{{items[activeIndex]}}</b></p>
    </div>


</template>

<script>
export default {
    data() {
        return{
            items: ['home', 'projects', 'services', 'contact'],
            activeIndex: 0,
        }
    },

    methods: {
        now: function (index) {
            this.activeIndex = index;
        },
    }
}
</script>

<style lang="scss" scoped>
#tab {
    display: inline-block;
    margin: 60px auto 45px;
    background-color: #5597b4;
    box-shadow: 0 1px 1px #ccc;
    border-radius: 2px;
    div{
        display: inline-block;
        padding: 18px 30px;
        color: #fff !important;
        font-weight: bold;
        font-size: 16px;
        text-transform: uppercase;
        &.active{
            background-color: #e35885;
        }
    }
}
p {
    font-size: 22px;
    font-weight: bold;
    color: #7d9098;
    b {
        color: #ffffff;
        display: inline-block;
        padding: 5px 10px;
        background-color: #c4d7e0;
        border-radius: 2px;
        text-transform: uppercase;
        font-size: 18px;
    }
}
</style>
