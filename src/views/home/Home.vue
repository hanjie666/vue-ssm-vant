<template>
    <div id="home">
        <!-- 头部地理位置和搜索框 -->
        <div class="head">
            <!-- 轮播图 -->
            <Swiper></Swiper>
        </div>
        <van-notice-bar
                text="通知内容"
                left-icon="volume-o"
        />
        <!-- tip -->
        <Tip></Tip>
        <div STYLE="padding-top: 1rem">
            <Nav></Nav>
        </div>
    </div>
</template>

<script>
    import { Dialog } from 'vant';
    import Nav from './components/nav/Nav'
    import Tip from "./components/tip/Tip";
    import Swiper from "./components/swiper/Swiper";
    export default {
        name: 'home',
        components: {
            [Dialog.Component.name]: Dialog.Component
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                username: '',
                password: '',
                active: 'home',
                show: false
            }
        },
        methods:{
            addWeChat(){
                this.show = true
            }
        },
        components: {
            Nav,
            Tip,
            Swiper
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    #home {
        padding-bottom: 3rem;
    .head {
        margin-top: -3rem;
        width: 100%;
        background-image: url("http://518taole.7-orange.cn/backImage.png");
    }
    }
    .van-divider {
        background-color: #f5f5f5;
        margin: 0;
    }
</style>
