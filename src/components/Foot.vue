<template>
    <div>
        <div class="Foots">
            <div class="lemon-logo">
                <router-link to="/Home">
                    <img src="../assets/pictures/Group_15.png" alt="">
                </router-link>
            </div>
            <div class="bottom-text">
                <router-link to="/Home">柠檬心理</router-link>
            </div>
            <div class="box1">
                <div>
                    <router-link to="/Article/ArticleHome">精选文章</router-link>
                </div>
                <div>
                    <router-link to="/Article/ArticleHome">心理科普</router-link>
                </div>
                <div>
                    <router-link to="/Article/ArticleHome">人际社交</router-link>
                </div>
                <div>
                    <router-link to="/Article/ArticleHome">恋爱关系</router-link>
                </div>
            </div>
            <div class="box2">
                <div>
                    <router-link to="/Qa">心理问答</router-link>
                </div>
                <div>
                    <router-link to="/Qa">精彩问答</router-link>
                </div>
                <div>
                    <router-link to="/Qa">邀请解答</router-link>
                </div>
            </div>
            <div class="box3">
                <div>
                    <router-link :to="{name: 'Test' }">心理测试</router-link>
                </div>
                <div>
                    <router-link :to="{name: 'Test' }">焦虑度测试</router-link>
                </div>
                <div>
                    <router-link :to="{name: 'Test' }">自卑度测试</router-link>
                </div>
                <div>
                    <router-link :to="{name: 'Test' }">人格测试</router-link>
                </div>
            </div>
            <class class="box4">
                <div>
                    <router-link :to="{name:'Book'}">心理图书</router-link>
                </div>
                <div>
                    <router-link :to="{name:'Book'}">推荐图书</router-link>
                </div>
            </class>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Foot',
    }
</script>

<style lang="less" scoped>
    .Foots-up-img {
        z-index: 1;
    }

    .Foots {
        width: 1920px;
        height: 480px;
        background-color: rgba(177, 243, 243, 1);
        position: relative;
    }

    .lemon-logo img {
        width: 51px;
        position: absolute;
        top: 185.6px;
        left: 175.9px;
    }

    .bottom-text {
        position: absolute;
        color: rgba(0, 0, 0, 1);
        font-family: Alibaba PuHuiTi;
        font-weight: 300;
        font-size: 24px;
        letter-spacing: 18%;
        left: 232px;
        top: 197px;
    }

    .bottom-text a {
        color: rgba(0, 0, 0, 1);
        font-family: Alibaba PuHuiTi;
        font-weight: 300;
        font-size: 24px;
        letter-spacing: 18%;
    }

    .box1 {
        position: absolute;
        left: 573px;
        top: 140px;
    }

    .box1 a {
        display: inline-block;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        line-height: 130.765629%;
        margin-bottom: 36px;
    }

    .box2 {
        position: absolute;
        top: 140px;
        left: 857px;
    }

    .box2 a {
        display: inline-block;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        line-height: 130.765629%;
        margin-bottom: 36px;
    }

    .box3 {
        position: absolute;
        top: 140px;
        left: 1141px;
    }

    .box3 a {
        display: inline-block;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        line-height: 130.765629%;
        margin-bottom: 36px;
    }

    .box4 {
        position: absolute;
        top: 140px;
        left: 1425px;
    }

    .box4 a {
        display: inline-block;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 18px;
        line-height: 130.765629%;
        margin-bottom: 36px;
    }
</style>