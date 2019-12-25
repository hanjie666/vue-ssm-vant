<template>
    <swiper id="swiper"
            :options="swiperOption"
            ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(sowing,index) in sowing_list"
                      :key="sowing.public_id">
            <img :src="sowing.icon_url"
                 :alt="sowing.public_name">
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"
             slot="pagination"></div>
    </swiper>
</template>

<script>
    // 引入 swiper.css
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name: "Swiper",
        data () {
            return {
                sowing_list:[
                    {
                        public_id:'1',
                        icon_url: 'https://img.ddimg.mobi/0ec4a32cbd84b1575892960355.jpg',
                        public_name: '轮播'
                    },
                    {
                        public_id: '2',
                        icon_url: 'https://i.loli.net/2019/12/15/tvk57Uqao3nexwC.png',
                        public_name: '代拿'
                    }
                ],
                swiperOption: {
                    // 进来就加载
                    notNextTick: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    loop: true,
                    //配置自动播放
                    autoplay: {
                        delay: 3000,
                        // 最后一个是否停止
                        stopOnLastSlide: false,
                        // 用户操作swiper之后，是否禁止autoplay
                        disableOnInteraction: false,
                    },
                    observer: true,
                    observeParents: true,
                    // 配置速度
                    speed: 600,
                    // 滑动后回调函数
                    on: {
                        slideChangeTransitionEnd () {
                        },
                        //   preventLinksPropagation: false
                    }
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        mounted () {

        },
        computed: {
            // 拿到swiper对象
            swiper () {
                return this.$refs.mySwiper.swiper;
            }
        }
    }
</script>

<style scoped>
    #swiper {
        padding-top: 4rem;
        width: 95%;
        height: 10rem;
        border-radius: 1rem;
    }
    #swiper img {
        width: 100%;
        height: 100%;
    }
    /*
    穿透修改样式
    */
    #swiper >>> .swiper-pagination-bullet-active {
        background-color: #75a342;
    }

    #swiper >>> .swiper-pagination-bullet {
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 0;
    }
</style>
