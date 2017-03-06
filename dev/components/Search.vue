<template lang="html">
     <div id="search">
         <div class="bar">
             <input type="text" v-model="filterText" placeholder="Enter your search terms">
         </div>
         <ul>
             <li v-for="(product, index) in filterResult" :key="index">
                 <a :href="product.href">
                     <img :src="product.src" alt="">
                 </a>
                 <p>{{product.text}}</p>
             </li>
         </ul>
     </div>
</template>

<script>
export default {
    data() {
        return {
            productLists: [
                {
                    href: 'http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables',
                    src: 'http://cdn.tutorialzine.com/wp-content/uploads/2016/03/css-variables-100x100.jpg',
                    text: 'What You Need To Know About CSS Variables',

                },
                {
                    href: 'http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/',
                    src: 'http://cdn.tutorialzine.com/wp-content/uploads/2016/02/great-looking-pricing-tables-100x100.jpg',
                    text: 'Freebie: 4 Great Looking Pricing Tables',

                },
                {
                    href: 'http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/',
                    src: 'http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-100x100.jpg',
                    text: '20 Interesting JavaScript and CSS Libraries for February 2016',
                },
                {
                    href: 'http://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/',
                    src: 'http://cdn.tutorialzine.com/wp-content/uploads/2016/02/quick-tip-responsive-headers-100x100.png',
                    text: 'Quick Tip: The Easiest Way To Make Responsive Headers',
                },
                {
                    href: 'http://tutorialzine.com/2016/01/learn-sql-in-20-minutes/',
                    src: 'http://cdn.tutorialzine.com/wp-content/uploads/2016/01/learn-sql-20-minutes-100x100.png',
                    text: 'Learn SQL In 20 Minutes',
                },
                {
                    href: 'http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/',
                    src: 'http://cdn.tutorialzine.com/wp-content/uploads/2015/12/creating-your-first-desktop-app-with-electron-100x100.png',
                    text: 'Creating Your First Desktop App With HTML, JS and Electron',
                },

            ],
            filterText: '',
        };
    },

    computed: {
        filterResult: function() {
            return this.productLists.filter(product => {
                return product.text.toUpperCase().includes(this.filterText.toUpperCase());
            });
        },
    },
};
</script>

<style lang="scss" scoped>
#search{
    height: 700px;
    .bar{
        background-color: #5c9bb7;
        background-image: -webkit-linear-gradient(top, #5c9bb7, #5392ad);
        background-image: -moz-linear-gradient(top, #5c9bb7, #5392ad);
        background-image: linear-gradient(top, #5c9bb7, #5392ad);
        box-shadow: 0 1px 1px #ccc;
        border-radius: 2px;
        width: 400px;
        padding: 14px;
        margin: 45px auto 20px;
        position: relative;
        input{
            background: #fff no-repeat 13px 13px;
            border: none;
            width: 100%;
            line-height: 19px;
            padding: 11px 0;
            border-radius: 2px;
            box-shadow: 0 2px 8px #c4c4c4 inset;
            text-align: left;
            font-size: 14px;
            font-family: inherit;
            color: #738289;
            font-weight: bold;
            outline: none;
            text-indent: 40px;
        }
    }
    ul{
        list-style: none;
        width: 428px;
        margin: 0 auto;
        text-align: left;
        li{
            border-bottom: 1px solid #ddd;
            padding: 10px;
            overflow: hidden;
            img{
                width: 60px;
                height: 60px;
                float: left;
                border: none;
            }
            p{
                margin-left: 75px;
                font-weight: bold;
                padding-top: 12px;
                color: #6e7a7f;
            }
        }
    }
}


</style>
