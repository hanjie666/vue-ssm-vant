<template>
    <div id="tip">
        <div @click="goToVip">
            <img class="adImg"
                 :src="home_ad">
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                home_ad:'http://518taole.7-orange.cn/homead2.gif',
            }
        },
        methods:{
            goToVip(){

            }
        }
    }
</script>

<style lang="less" scoped>
    #tip {
        position: relative;
    }
    .adImg {
        margin-top: 0rem;
        width: 100%;
        height: 6.2rem;
        margin-bottom: -0.2rem;
    }
</style>
