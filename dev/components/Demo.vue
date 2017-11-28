<template lang="html">
    <div id="demo">
        <div class="item">===computed methods watch 三种方法对比===</div>
        <p>Original message: "{{ reversedMessage }}"</p>
        <p>Computed reversed message: "{{ reversedMessage2() }}"</p>
        <p>{{ now() }}</p>
        <p>{{ fullName }}</p>
        <ul v-for='(value, key, index) in object'>
            <li>{{value}} {{key}} {{index}}</li>
        </ul>

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
        <button @click="greet()">greet</button>
        <button @click.once="greet">greet only once</button>
        <a href="http://www.baidu.com" target="_blank" @click.prevent="doThis">baidu</a>
        <input type="text" name="" value="" @keyup.enter="doThis">
        <div class="item">===表单控件绑定===</div>
        <input v-model="message" placeholder="edit me">
        <p>message is : {{message}}</p>

        <input type="checkbox" id="checkbox" value="checkbox" v-model="checked">
        <label for="checkbox">{{checked}}</label>

        <input type="checkbox" id="jack" value="Jack" v-model="checkedM">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="checkbox1" v-model="checkedM">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="checkbox" v-model="checkedM">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedM }}</span>

        <input type="radio" id="one" value="One" v-model="picked">
         <label for="one">One</label>
         <br>
         <input type="radio" id="two" value="Two" v-model="picked">
         <label for="two">Two</label>
         <br>
         <span>Picked: {{ picked }}</span>
         <select v-model="selected">
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <span>Selected: {{ selected }}</span>

          <div class="item">===内容分发===</div>
          <Sloter>
              <p>这是一些初始内容</p>
              <p>这是更多的初始内容</p>
          </Sloter>
          <Layout>
              <h1 slot="header">this is header1</h1>
              <p>paragaph</p>
              <p>paragaph</p>
              <p slot="footer">this is footer1</p>
          </Layout>
          <Layout :is="currentView">
              <h1 slot="header">this is header2</h1>
              <p>paragaph</p>
              <p>paragaph</p>
              <template scope='props'>
                  <p slot="footer">this is footer2</p>
                  <span>{{props.text}}</span>
              </template>
          </Layout>
    </div>

</template>

<script>
import Sloter from './Sloter.vue';
import Layout from './Layout.vue';
export default {
    data() {
        return {
            message: 'Hello',
            firstName: 'Foo',
            lastName: 'Bar',
            // fullName: 'Foo Bar',
            isActive: true,
            static: 'static',
            picked: true,
            ok: false,
            type: 'A',
            counter: 0,
            classObject: {
                active: true,
                no: false,
            },
            checkedM: [],
            selected: '',
            items: [
                {
                    message: 'A',
                },
                {
                    message: 'B',
                },
                {
                    message: 'C',
                },
            ],
            object: {
                name: 'Janet',
                age: 18,
                sex: 'female',
            },
            arrayLike: {
                0: 'a',
                1: 'b',
                2: 'c',
                length: 3,
            },
            numbers: [0, 1, 2, 3, 4, 5],
            name: 'janet',
            checked: false,
            currentView: 'Layout',
        };
    },
    filters: {
        reversedessage: function (value) {
            return value.split('').reverse()
            .join('');
        },
    },
    // 计算有缓存
    computed: {
        reversedMessage () {
            return this.message.split('').reverse()
            .join('');
        },
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            // set: function (newValue) {
            //     var names = newValue.split(' ')
            //     this.firstName = names[0]
            //     this.lastName = names[names.length - 1]
            // }
        },
        evenNumbers: function () {
            return this.numbers.filter(number => number % 2 === 0);
        },
    },
    // 没有缓存
    methods: {
        reversedMessage2 () {

            return this.message.split('').reverse()
            .join('');
        },
        now() {
            return Date.now();
        },
        greet: function (e) {
            alert(`hello ${this.name}`);
            alert(e.target.tagName);
            console.log(Array.from(this.arrayLike));
        },
        doThis: function (e) {
            alert(`hello ${this.name}`);
            console.log(this.$refs.container);
        },
    },
    watch: {
        firstName: function(val) {
            this.fullName = val + '' + this.lastName;
        },
        lastName: function(val) {
            this.fullName = this.firstName + '' + val;
        },
    },
    components: {
        Sloter,
        Layout,
    },
    mounted() {
        console.log('mounted');
    },
    created() {
        console.log('created');
    },

};
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
