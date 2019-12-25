<template>
    <div id="mine">
        <van-nav-bar :title="'我的'"
                     :fixed=true
                     :border=false
                     style="height:2.5rem" />
        <van-cell-group style="margin-top:2.4rem">
            <van-cell style="background-color: #3bba63;color:#FFF;"
                      label-class="labelClass"
                      is-link
                      center>
            </van-cell>
        </van-cell-group>

        <van-cell-group style="margin-top:0.4rem">
            <van-cell title="我的优惠券"
                      icon="gold-coin"
                      @click="goToPage('couponList')"
                      is-link />
            <van-cell title="我的收货地址"
                      icon="todo-list"
                      is-link
                      @click="goToPage('myAddress')" />
        </van-cell-group>

        <van-cell-group style="margin-top:0.4rem">
            <van-cell title="联系客服"
                      icon="phone"
                      value="客服时间 07:00-22:00"
                      is-link />
            <van-cell title="意见反馈"
                      icon="comment-circle"
                      is-link
                      @click="onFeedBack" />
        </van-cell-group>
        <div class="version">当前版本{{version}}</div>
    </div>
</template>

<script>
    import { Dialog, Toast } from 'vant'
    export default {
        name: "Mine",
        data(){
            return{
                version: '1.0.0'
            }
        },
        methods:{
            // 意见反馈
            onFeedBack () {
                Dialog.alert({
                    confirmButtonText: '记得点个小星❤️哦~',
                    title: '💘感谢您的关注💘',
                    message: 'GitHub上搜索 \nGeek-James/ddBuy \n🦉欢迎提出优化建议🙉'
                }).then(() => {
                    // on close
                });
            },
            goToPage (name) {
                this.$router.push({ name });
            },
        }

    }
</script>

<style lang="less" scoped>
#mine {
    width: 100%;
    background-color: #f5f5f5;
    margin-bottom: 3rem;
    .version {
        margin: 0 auto;
        text-align: center;
        font-size: 0.6rem;
        background-color: #ffffff;
        height: 2rem;
        color: grey;
        line-height: 2rem;
    }
    .van-nav-bar {
        background-color: #3bba63;
        font-size: 0.6rem;
    }
    .van-nav-bar__title {
        color: white;
    }
    .personMsg {
        display: flex;
        align-items: center;
        .sex {
            position: absolute;
            top: 3.5rem;
            left: 3.8rem;
            width: 0.1rem;
            height: 0.1rem;
            img {
                width: 1rem;
                height: 1rem;
            }
        }
        img {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
        }

        .personInfo {
            display: flex;
            flex-direction: column;
            margin-left: 0.8rem;
        }
    }

    .van-cell__left-icon {
        color: #45c763;
        font-size: 1.2rem;
    }
    /*转场动画*/
    .router-slider-enter-active,
    .router-slider-leave-active {
        transition: all 0.3s;
    }

    .router-slider-enter,
    .router-slider-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
}
</style>
