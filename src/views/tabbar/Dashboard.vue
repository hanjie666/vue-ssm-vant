<template>
    <div id="dashboard">
        <van-tabbar v-model="active"
                    :safe-area-inset-bottom=true
                    class="active_tab"
                    active-color="#75a342">
            <!-- 给购物车的Tabbar加个ID 方便做加入购物车的小球动画 -->
            <van-tabbar-item v-for="(item,index) in tabbars"
                             :key="index"
                             @click="tab(index,item.name)">
                <span :class="currIndex == index ? active:''">{{item.title}}</span>
                <template slot="icon"
                          slot-scope="props">
                    <img :src="props.active ? item.active : item.normal">
                </template>
            </van-tabbar-item>
        </van-tabbar>
        <!-- 缓存界面选择加载 -->
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
    </div>
</template>

<script>
    export default {
        name: "Tabbar",
        mounted () {
        },
        created () {
            //通过路由跳转绑定Tabbar的选中
            this.tabbarSelected(this.$route.name);
        },
        watch: {
            // 监听路由变化,保证路由跳转Tabbar选中正常
            $route: {
                handler (val, oldval) {
                    this.tabbarSelected(val.name);
                }
            },
            deep: true
        },
        data() {
            return {
                active: 0,
                currIndex: 0,
                tabbars: [
                    {
                        name: "home",
                        title: "首页",
                        normal: require("@/images/tabbar/home_default.png"),
                        active: require("@/images/tabbar/home_selected.png")
                    },
                    {
                        name: "wangke",
                        title: "网课",
                        normal: require("@/images/tabbar/eat_default.png"),
                        active: require("@/images/tabbar/eat_selected.png"),
                    },
                    {
                        name: "mine",
                        title: "我的",
                        normal: require("@/images/tabbar/mine_default.png"),
                        active: require("@/images/tabbar/mine_selected.png")
                    }
                ]
            }
        },
        methods: {
            // 1.点击tabbar触发的方法
            tab (index, val) {
                this.currIndex = index;
                this.$router.push(val);
            },
            tabbarSelected (item) {
                const mapType = {
                    home: 0,
                    wangke: 1,
                    mine: 2
                }
                this.active = mapType[item]
            }
        }
    }
</script>

<style lang="less" scoped>
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
    @keyframes mymove {
        0% {
            transform: scale(1);
        }
        25% {
            transform: scale(0.8);
        }
        50% {
            transform: scale(1.1);
        }
        75% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }
    @-moz-keyframes mymove {
        0% {
            transform: scale(1);
        }
        25% {
            transform: scale(0.8);
        }
        50% {
            transform: scale(1.1);
        }
        75% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }
    @-webkit-keyframes mymove {
        0% {
            transform: scale(1);
        }
        25% {
            transform: scale(0.8);
        }
        50% {
            transform: scale(1.1);
        }
        75% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }
    @-o-keyframes mymove {
        0% {
            transform: scale(1);
        }
        25% {
            transform: scale(0.8);
        }
        50% {
            transform: scale(1.1);
        }
        75% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }
    .moveToCart {
        animation: mymove 0.5s ease-in-out;
    }
</style>
