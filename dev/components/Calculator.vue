<template lang="html">
    <form id="main">
        <h1>Services</h1>
        <ul>
            <li
            :class="{active:category.checked}"
            v-for="(category, index) in categorys"
            :key="index"
            @click="category.checked = !category.checked"
            >{{category.name}}<span>${{category.price}}</span></li>
        </ul>
        <div class="total">
            "Total:" <span>$ {{sum}}</span>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            categorys: [
                {
                    name: 'Web Development',
                    price: 300,
                    checked: true,
                },
                {
                    name: 'Design',
                    price: 400,
                    checked: false,
                },
                {
                    name: 'Integration',
                    price: 250,
                    checked: false,
                },
                {
                    name: 'Training',
                    price: 220,
                    checked: false,
                },

            ],

        }
    },

    computed: {
        sum: function() {
            let price = 0;
            this.categorys.forEach(category => {
                if(category.checked){
                    price += category.price;
                }
            })
            return price;
        }
    }
}
</script>

<style lang="scss" scoped>
form {
    background-color: #61a1bc;
    border-radius: 2px;
    box-shadow: 0 1px 1px #ccc;
    width: 400px;
    padding: 35px 60px;
    margin: 50px auto;
    h1 {
        color: #fff;
        font-size: 64px;
        font-family: 'Cookie', cursive;
        font-weight: normal;
        line-height: 1;
        text-shadow: 0 3px 0 rgba(0,0,0,0.1);
    }
    ul {
        list-style: none;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        margin: 20px 0 15px;
        li {
            padding: 20px 30px;
            background-color: #e35885;
            margin-bottom: 8px;
            box-shadow: 0 1px 1px rgba(0,0,0,0.1);
            cursor: pointer;
            &.active{
                background-color: #8ec16d;
            }
            span{
                float: right;
            }
        }
    }
}

</style>
