<template>
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <a-layout style="height: 100%">
        <Cafecho_Sider></Cafecho_Sider>
        <a-layout>
            <Cafecho_Header></Cafecho_Header>

            <a-row :gutter="24" style="height: 100%">
                <a-col
                    :lg="{span:24}" :md="{span: 24}" :sm="{span: 0}" :xs="{span: 0}"
                    style="height: 100%"
                >
                    <a-layout-content style="background-color: #fafafa;height: 100%">
                        <div style="height: 200px; background-color: #ffffff">
                            <a-row style="padding-left: 75px;padding-top: 25px;">
                                <a-col flex="auto">
                                    <h1>{{ articleInfo.title }}</h1>
                                    <h4 style="white-space:pre-wrap;word-wrap:break-word;">{{ articleInfo.desc }}</h4>
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
                        <div class="IndexBox-1-PC">
                            <a-row>
                                <a-col>
                                    <a-card :bordered="false" class="BoxCard" hoverable>
                                        <div class="Cafecho-Content" style="white-space:pre-wrap;word-wrap:break-word;">
                                            <p v-html="articleInfo.content"></p>
                                        </div>
                                    </a-card>
                                </a-col>
                            </a-row>
                        </div>

                    </a-layout-content>

                </a-col>

                <a-col
                    :lg="{span:0}" :md="{span: 0}" :sm="{span: 24}" :xs="{span: 24}"
                    style="height: 100%"
                >
                    <a-layout-content style="background-color: #fafafa;height: 100%">
                        <div style="height: 200px; background-color: #ffffff">
                            <a-row style="padding-left: 15px;padding-top: 10px;">
                                <a-col flex="auto">
                                    <h1 style="white-space:pre-wrap;word-wrap:break-word;">{{ articleInfo.title }}</h1>
                                    <h4 style="white-space:pre-wrap;word-wrap:break-word;">{{ articleInfo.desc }}</h4>
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
                        <div class="IndexBox-1-PE">
                            <a-row>
                                <a-col>
                                    <a-card :bordered="false" class="BoxCard">
                                        <div class="Cafecho-Content" style="white-space:pre-wrap;word-wrap:break-word;">
                                            <p v-html="articleInfo.content"></p>
                                        </div>
                                    </a-card>
                                </a-col>
                            </a-row>
                        </div>

                    </a-layout-content>
                </a-col>
            </a-row>
            <a-layout-footer></a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>

import Cafecho_Sider from "@/components/common/Sider.vue";
import Cafecho_Header from "@/components/common/Header.vue";
import { get } from "@/plugin/axios/request";
import router from "@/router";
import { emitter } from "@/plugin/BusJs/bus";
import { reactive, ref, toRefs } from "vue";

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
    }).then((res: any) => {
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
        /*设置标题*/
        const Meta_Title: any = ref(articleInfo.title)
        emitter.emit('getMetaTitle', Meta_Title)
    })
}


getArticleInfo(aid)
toRefs(articleInfo)
</script>

<style scoped>
.IndexBox-1-PC {
    padding: 0px 150px;
}

.IndexBox-1-PE {
    padding: 0px 10px;
}

.BoxCard {
    border-radius: 10px;
}

.BoxCard span {
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