<template>
    <div>
        <div id="divContainer">
            <div id="line3"></div>
            <div id="qatitle">{{title}}</div>
            <div id="qabady">{{content}}</div>
            <div id="commentNum">{{comNum}}</div>
            <img id="commentPic" v-lazy='require("@/assets/pictures/comment.png")'>
            <div id="likeNum">{{likeNum}}</div>
            <img id="likePic" v-lazy='require("@/assets/pictures/like.png")'>
            <div id="date">{{date}}</div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'QaArtcleList',
        props: {
            title: {},
            content: {},
            comNum: {},
            likeNum: {},
            date: {},
        }
    }
</script>

<style lang="less" scoped>
    #divContainer {
        position: relative;
        height: 243px;
        width: 100%;
        color: rgba(0, 0, 0, 1);
    }

    #line3 {
        width: 906px;
        height: 0.1px;
        transform: rotate(-0.126481deg);
        border: 1px solid rgba(203, 203, 203, 1);
    }

    #qatitle {
        position: absolute;
        top: 51px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 24px;
        line-height: 130.265629%;
    }

    #qabady {
        position: absolute;
        top: 113px;
        color: rgba(130, 130, 130, 1);
        font-family: PingFang SC;
        font-size: 18px;
        line-height: 130.265629%;
    }

    #commentNum {
        position: absolute;
        top: 179px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang SC;
        font-size: 18px;
        line-height: 130.765629%;
    }

    #commentPic {
        position: absolute;
        top: 183px;
        left: 21px;
        width: 16px;
        height: 16px;
    }

    #likeNum {
        position: absolute;
        top: 179px;
        left: 75px;
        color: rgba(97, 97, 97, 1);
        font-family: PingFang SC;
        font-size: 18px;
        line-height: 130.765629%;
    }

    #likePic {
        position: absolute;
        top: 183px;
        left: 106px;
        width: 16px;
        height: 16px;
    }

    #date {
        position: absolute;
        top: 179px;
        right: 0px;
        color: rgba(189, 189, 189, 1);
        font-family: PingFang SC;
        font-size: 14px;
        line-height: 130.265629%;
    }
</style>