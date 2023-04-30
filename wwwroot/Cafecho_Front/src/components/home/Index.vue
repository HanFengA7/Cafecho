<template>
    <div style="height: 300px; background-color: #ffffff">
        <a-row>
            <a-space>
                <a-col flex="100px">
                    <div>
                        <div style="padding: 45px;">
                            <a-avatar :size="200" style="box-shadow: 0 12px 15px rgb(140 152 164 / 10%);">
                                <img :src="SiteInfo.logourl" alt="avatar"/>
                            </a-avatar>
                        </div>
                    </div>
                </a-col>
                <a-col flex="auto">
                    <h1>{{ SiteInfo.blogger }}</h1>
                    <h4>{{ SiteInfo.slogan }}</h4>
                    <a-col>
                        <a-space>
                            <a-button shape="round">
                                <IconGithub/>
                            </a-button>
                            <a-button shape="round">
                                <IconQqCircleFill/>
                            </a-button>
                        </a-space>
                    </a-col>
                </a-col>
            </a-space>
        </a-row>
    </div>


    <div class="IndexBox-1">

        <a-row :gutter="{ md: 8, lg: 24, xl: 32 }">
            <a-col :span="6">
                <a @click="CTest">
                    <a-card :bordered="false" class="BoxCard" hoverable>
                                    <span>
                                    <a-avatar :size="40" shape="square">
                                        <IconHeart/>
                                    </a-avatar>
                                    <a-typography-text>关 于</a-typography-text>
                                    </span>
                    </a-card>
                </a>
            </a-col>
            <a-col :span="6">
                <a @click="CTest">
                    <a-card :bordered="false" class="BoxCard" hoverable>
                                    <span>
                                    <a-avatar :size="40" shape="square">
                                        <IconMindMapping/>
                                    </a-avatar>
                                    <a-typography-text>计 划</a-typography-text>
                                    </span>
                    </a-card>
                </a>
            </a-col>
            <a-col :span="6">
                <a @click="CTest">
                    <a-card :bordered="false" class="BoxCard" hoverable>
                                    <span>
                                    <a-avatar :size="40" shape="square">
                                        <IconUserGroup/>
                                    </a-avatar>
                                    <a-typography-text>朋 友</a-typography-text>
                                    </span>
                    </a-card>
                </a>
            </a-col>
        </a-row>
    </div>

    <div class="IndexBox-2">
        <a-row :gutter="24">
            <a-col :span="20">
                <ArticleList></ArticleList>
            </a-col>
            <a-col :span="4">
                <div></div>
            </a-col>
        </a-row>
    </div>

</template>

<script lang="ts" setup>

import {IconGithub, IconHeart, IconMindMapping, IconQqCircleFill, IconUserGroup} from "@arco-design/web-vue/es/icon";
import ArticleList from "@/components/article/ArticleList.vue";
import {emitter} from "@/plugin/BusJs/bus";
import {ref} from "vue";
import api from "@/plugin/axios/api/common/siteinfo"
import {Message} from '@arco-design/web-vue';

const SiteInfo: any = ref({
    sitename: "",
    slogan: "",
    logourl: "",
    blogger: ""
})

api.getSiteInfoApi().then(res => {
    /*网站信息*/
    SiteInfo.value = res.data.data[0]
    console.log(SiteInfo)
    /*设置标题*/
    let Meta_Title: any = ref(res.data.data[0].sitename)
    emitter.emit('getMetaTitle', Meta_Title)
})

const CTest = () => {
    Message.info('正在建设中...')
}




</script>

<style scoped>
.IndexBox-1 {
    /*padding: 25px 400px;*/
    transform: translateY(-50%);
    padding: 0 400px;
}

.IndexBox-1 .BoxCard {
    background-color: #dfe0e23b;
    border-radius: 10px;
}

.IndexBox-1 .BoxCard span {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.IndexBox-2 {
    padding: 25px 250px;
}
</style>