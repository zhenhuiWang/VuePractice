<template lang="html">
    <div id="box">
        <input type="text" v-model="message" v-show="show">
        <p @click="show = !show">{{message}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message: 'edit me',
            show: false,
        }
    }
}
</script>

<style lang="scss" scoped>
#box input {
    border: none;
    margin-top: 20px;
    width: 500px;
    line-height: 34px;
    border-radius: 3px;
    box-shadow: 0 2px 6px #bbb inset;
    text-align: center;
    font-size: 16px;
    font-family: inherit;
    color: #8d9395;
    font-weight: bold;
    outline: none;
}
#box p {
    font-size: 22px;
    font-weight: bold;
    color: #6d8088;
    height: 30px;
    cursor: default;
}
</style>
