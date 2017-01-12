<template lang="html">
    <div id="selectItem">
        <ul>
            <li
            v-for="(button, index) in buttonNames"
            :key="index"
            @click.stop="select(button.types, index)">
                <button type="button" name="button" :class="{active: index === activeIndex}">
                    {{button.name}}
                </button>
            </li>
        </ul>
        <div class="show-items">
            <ul>
                <li v-for="(image, index) in showImages" :key="index">
                    <img :src="image.src" alt="">
                </li>
            </ul>

        </div>
    </div>

</template>

<script>
const imageItems = [
    {
        src: './images/A0.png',
        type: ['classA'],
    },
    {
        src: './images/A1.png',
        type: ['classA'],
    },
    {
        src: './images/A2.png',
        type: ['classA'],
    },
    {
        src: './images/A3.png',
        type: ['classA'],

    },
    {
        src: './images/A4.png',
        type: ['classA'],

    },
    {
        src: './images/A5.png',
        type: ['classA'],

    },
    {
        src: './images/A6.png',
        type: ['classA'],

    },
    {
        src: './images/B0.png',
        type: ['classB'],
    },
    {
        src: './images/B1.png',
        type: ['classB'],
    },
    {
        src: './images/B2.png',
        type: ['classB'],
    },
    {
        src: './images/B3.png',
        type: ['classB'],
    },
    {
        src: './images/B4.png',
        type: ['classB'],
    },
    {
        src: './images/B5.png',
        type: ['classB'],
    },
    {
        src: './images/B6.png',
        type: ['classB'],
    },
    {
        src: './images/B7.png',
        type: ['classB'],
    },
    {
        src: './images/B8.png',
        type: ['classB'],
    },
    {
        src: './images/C0.png',
        type: ['classC'],
    },
    {
        src: './images/C1.png',
        type: ['classC'],
    },
    {
        src: './images/C2.png',
        type: ['classC'],
    },
    {
        src: './images/C3.png',
        type: ['classC'],
    },
    {
        src: './images/C4.png',
        type: ['classC'],
    },
    {
        src: './images/C5.png',
        type: ['classC'],
    },
    {
        src: './images/C6.png',
        type: ['classC'],
    },
    {
        src: './images/C7.png',
        type: ['classC'],
    },
    {
        src: './images/C8.png',
        type: ['classC'],
    },
    {
        src: './images/C9.png',
        type: ['classC'],
    },
    {
        src: './images/C10.png',
        type: ['classC'],
    },
];

const buttonNames = [
    {
        name: 'classA',
        types: ['classA'],

    },
    {
        name: 'classB',
        types: ['classB'],
    },
    {
        name: 'classC',
        types: ['classC'],
    },
    {
        name: 'classA+B',
        types: ['classA', 'classB'],
    },
    {
        name: 'classB+C',
        types: ['classB', 'classC'],
    },
    {
        name: 'classA+C',
        types: ['classA', 'classC'],
    },
    {
        name: 'classA+B+C',
        types: ['classA', 'classB', 'classC'],
    },
];

export default {
    data() {
        return {
            buttonNames,
            showType: buttonNames[0].types,
            activeIndex: 0,
        }
    },
    computed: {
        showImages: function() {
            return imageItems.filter(imageItem => {
                return imageItem.type.every(item => {
                    return this.showType.includes(item);
                })
            }).sort(() => Math.random() > 0.5 ? 1 : -1);
        }
    },

    methods: {
        select: function(type, index){
            this.showType = type;
            this.activeIndex = index;
        }
    }
}
</script>

<style lang="scss" scoped>
#selectItem{
    ul{
        li{
            display: inline-block;
            button{
                width: 100px;
                height: 50px;
                display: inline-block;
                background-color: #5c9bb7;
                line-height: 50px;
                border: 1px solid black;
                text-align: center;
                cursor:pointer;
                &.active{
                    background-color: pink;
                }
            }
        }
    }

}
</style>
