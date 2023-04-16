<template>
    <a-layout style="height: 100%">
        <Cafecho_Sider></Cafecho_Sider>
        <a-layout>
            <Cafecho_Header></Cafecho_Header>

            <a-layout-content style="background-color: #fafafa">
                <div style="height: 200px; background-color: #ffffff">
                    <a-row style="padding-left: 75px;padding-top: 25px;">
                        <a-col flex="auto">
                            <h1>{{ articleInfo.title }}</h1>
                            <h4>{{ articleInfo.desc }}</h4>
                            <a-col>
                                <a-space>
                                    <a-avatar>
                                        <img
                                                :src="articleInfo.User.avaterurl"
                                                alt="avatar"
                                        />
                                    </a-avatar>
                                    <h4>{{ articleInfo.User.username }}</h4>
                                </a-space>
                            </a-col>
                        </a-col>
                    </a-row>
                </div>
                <br/>
                <div class="IndexBox-1">
                    <a-row>
                        <a-col>
                            <a-card :bordered="false" class="BoxCard" hoverable>
                                <div class="Cafecho-Content" v-html="articleInfo.content"></div>
                            </a-card>
                        </a-col>
                    </a-row>
                </div>

            </a-layout-content>

            <a-layout-footer></a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>

import Cafecho_Sider from "@/components/common/Sider.vue";
import Cafecho_Header from "@/components/common/Header.vue"
import {get} from "@/plugin/axios/request"
import router from "@/router";
import {reactive, toRefs} from "vue";

const aid = router.currentRoute.value.params.aid

interface articleInfo {

    Category: {
        id: any,
        name: string,
    },
    User: {
        username: string,
        email: string,
        avaterurl: string,
        role: any,
    },
    aid: any,
    title: string,
    desc: string,
    content: any,

}

let articleInfo = reactive<articleInfo>({
    Category: {
        id: undefined,
        name: '',
    },
    User: {
        username: '',
        email: '',
        avaterurl: '',
        role: 1,
    },
    aid: undefined,
    title: '',
    desc: '',
    content: '',
})

const getArticleInfo = (aid: any) => {
    get({
        url: '/api/v1/article/' + aid,
    }).then(res => {
        articleInfo.Category.id = res.data.data.Category.id
        articleInfo.Category.name = res.data.data.Category.name

        articleInfo.User.username = res.data.data.User.username
        articleInfo.User.email = res.data.data.User.email
        articleInfo.User.avaterurl = res.data.data.User.avaterurl
        articleInfo.User.role = res.data.data.User.role

        articleInfo.aid = res.data.data.aid
        articleInfo.title = res.data.data.title
        articleInfo.desc = res.data.data.desc
        articleInfo.content = res.data.data.content
        toRefs(articleInfo)
    })
}

getArticleInfo(aid)
toRefs(articleInfo)
</script>

<style scoped>
.IndexBox-1 {
    padding: 0px 200px;
}

.IndexBox-1 .BoxCard {
    border-radius: 5px;
}

.IndexBox-1 .BoxCard span {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.IndexBox-2 {
    padding: 25px 250px;
}

.Cafecho-Content p img {
    width: 50%;
}
</style>