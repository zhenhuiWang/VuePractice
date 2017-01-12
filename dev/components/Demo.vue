<template lang="html">
    <div id="demo">
        <div class="item">===computed methods watch 三种方法对比===</div>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
        <p>{{ now() }}</p>
        <p>{{ fullName }}</p>


        <div class="item">===class与sytle的绑定===</div>
        <div :class="[{ active: isActive }, static]"></div>
        <div :class="classObject">55555</div>


        <div class="item">===条件渲染===</div>
        <div v-show="ok">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </div>
        <div v-if="ok">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </div>
        <div v-else>
            <p>Paragraph 3</p>

        </div>
        <div v-if="type === 'A'">
            A
        </div>
        <div v-else-if="type === 'B'">
            B
        </div>
        <div v-else>
            C
        </div>

        <div class="item">===迭代渲染===</div>
        <ul>
            <li v-for="(item,index) in items" :key="item.id">{{ item.message }} {{index}}</li>
        </ul>
        <ul>
            <li v-for="(value, key, index) in object">{{index}},{{value}},{{key}}</li>
        </ul>
        <span v-for="n in 10">{{n}}</span>
        <span v-for="n in evenNumbers">{{n}}</span>

        <div class="item">===事件处理===</div>

        <button @click="counter += 1">add 1</button>
        <span>这个按钮被点击了{{ counter }}</span>
        <button @click="greet">greet</button>

        <div class="item">===表单控件绑定===</div>
        <input v-model="message" placeholder="edit me">
        <p>message is : {{message}}</p>

        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{checked}}</label>


    </div>

</template>

<script>
export default {
    data() {
        return {
            message: 'Hello',
            firstName: 'Foo',
            lastName: 'Bar',
            // fullName: 'Foo Bar',
            isActive: true,
            static: 'static',
            ok: false,
            type: 'A',
            counter: 0,
            classObject:{
                active: true,
                no: false,
            },
            items:[
                {
                    message: 'A'
                },
                {
                    message: 'B'
                },
                {
                    message: 'C'
                }
            ],
            object: {
                name: 'Janet',
                age: 18,
                sex: 'female',
            },
            numbers: [0,1,2,3,4,5],
            name: 'janet',
            checked: false,

        }
    },
    //计算有缓存
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        },
        fullName:{
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // set: function (newValue) {
            //     var names = newValue.split(' ')
            //     this.firstName = names[0]
            //     this.lastName = names[names.length - 1]
            // }
        },
        evenNumbers: function () {
            return this.numbers.filter(number => number % 2 === 0);
        }

    },
    //没有缓存
    methods: {
        now: function () {
            return Date.now()
        },
        greet: function (e) {
            alert(`hello ${this.name}`);
            alert(e.target.tagName);
        }
    },
    watch: {
        firstName: function(val) {
            this.fullName = val + '' + this.lastName;
        },
        lastName: function(val) {
            this.fullName = this.firstName + '' + val;
        }
    }
}
</script>

<style lang="scss" scoped>
p {
    font-size: 18px;
}
.item{
    color: red;
    font-size: 20px;

}
.static{
    width: 100px;
    height: 100px;
    background-color: pink;
    &.active{
        width: 50px;
    }
}
</style>
