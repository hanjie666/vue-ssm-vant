<template>
    <div id="nav">
        <van-grid :column-num="3"
                  :border="false">
            <van-grid-item
                    v-for="nav in nav_list"
                    :key="nav.id"
                    :icon="nav.icon_url"
                    :text="nav.name"
                    @click="goto(nav.url)"
            />
        </van-grid>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        data () {
            return {
                nav_list:[
                    {
                        id: 0,
                        name:"快递代拿",
                        url: 'daina',
                        icon_url: "https://img.ddimg.mobi/faed0c89b1ac61561979943620.jpg",
                    },
                    {
                        id: 1,
                        name:"网课代刷",
                        url: 'wangke',
                        icon_url: "https://img.ddimg.mobi/febc9219e5f061561980283162.jpg",
                    },
                    {
                        id: 2,
                        name:"个人中心",
                        icon_url: "https://img.ddimg.mobi/57742da7f00ab1562725189267.jpg",
                        url: 'mine'
                    },
                    {
                        id: 3,
                        name:"个人中心",
                        icon_url: "http://demoucampus.unipus.cn/resources/site/img/logo_u.png",
                        url: 'mine'
                    },

                ]
            }
        },
        methods:{
            goto(url){
                this.$router.push(url)
            }
        }
    }
</script>

<style scoped>

</style>
