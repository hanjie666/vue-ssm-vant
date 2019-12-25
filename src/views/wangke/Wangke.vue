<template>
    <div>
        <div style="padding-top: 20px">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <van-image
                            fit="contain"
                            src="https://i.loli.net/2019/12/25/WnC5tGeahTOZzKQ.jpg"
                    />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div style="padding-top: 20px">
            <van-grid :column-num="2"
                      :border="false">
                <van-grid-item
                        v-for="nav in nav_list"
                        :key="nav.id"
                        :icon="nav.icon_url"
                        :text="nav.name"
                />
            </van-grid>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Wangke",
        data () {
            return {
                nav_list:[
                    {
                        id: 0,
                        name:"智慧树/知道",
                        icon_url: "https://img.haote.com/upload/info/20180806/1533538883994607.jpg",
                    },
                    {
                        id: 1,
                        name:"学习通/超星",
                        icon_url: "http://gdown.baidu.com/img/0/512_512/baaf66048e2ebaf1051096f31874e3e4.png",
                    },
                    {
                        id: 2,
                        name:"优学院",
                        icon_url: "http://pic2.orsoon.com/2017/0225/20170225111418518.png",
                    },
                    {
                        id: 3,
                        name:"U校园",
                        icon_url: "http://demoucampus.unipus.cn/resources/site/img/logo_u.png",
                    },
                    {
                        id: 4,
                        name: '中国大学MOOC',
                        icon_url: 'https://img3.doubanio.com/lpic/s28468893.jpg'
                    },
                    {
                        id: 5,
                        name: '智慧职教',
                        icon_url: 'https://img.haote.com/upload/info/20170907/1504764298969163.jpg'
                    }


                ]
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
