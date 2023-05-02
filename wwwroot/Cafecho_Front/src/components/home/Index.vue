<template>
  <!--PC [] start-->
    <a-row>
        <a-col :lg="{span:32}" :md="{span: 0}" :sm="{span: 0}" :xs="{span: 0}"
               style="height: 300px; width:100% ;background-color: #ffffff">
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
        </a-col>
    </a-row>
  <!--PC End-->

    <div class="IndexBox-1">
        <a-row>
            <a-col :lg="{span: 5 , offset: 1}" :md="{span: 0}" :sm="{span: 0}" :xs="{span: 0}">
                <a @click="router.push('/')">
                    <a-card :bordered="false" class="BoxCard" hoverable>
                                    <span>
                                    <a-avatar :size="40" shape="square">
                                        <IconHome/>
                                    </a-avatar>
                                    <a-typography-text>首 页</a-typography-text>
                                    </span>
                    </a-card>
                </a>
            </a-col>
            <a-col :lg="{span: 5 , offset: 1}" :md="{span: 0}" :sm="{span: 0}" :xs="{span: 0}">
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
            <a-col :lg="{span: 5 , offset: 1}" :md="{span: 0}" :sm="{span: 0}" :xs="{span: 0}">
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
            <a-col :lg="{span: 5 , offset: 1}" :md="{span: 0}" :sm="{span: 0}" :xs="{span: 0}">
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

    <a-row :gutter="24">
        <a-col :lg="{span:24}" :md="{span: 24}" :sm="{span: 0}" :xs="{span: 0}">
            <div class="IndexBox-2-PC">
                <a-row :gutter="24">
                    <a-col :lg="{span:20}" :md="{span: 20}" :sm="{span: 0}" :xs="{span: 0}">
                        <ArticleList></ArticleList>
                    </a-col>
                    <a-col :span="4">
                        <div></div>
                    </a-col>
                </a-row>
            </div>
        </a-col>
    </a-row>

    <a-row :gutter="24">
        <a-col :lg="{span:0}" :md="{span: 0}" :sm="{span: 24}" :xs="{span: 24}">
            <div class="IndexBox-2-PE">
                <a-row :gutter="24">
                    <a-col :lg="{span:0}" :md="{span: 0}" :sm="{span: 24}" :xs="{span: 24}">
                        <ArticleList></ArticleList>
                    </a-col>
                    <a-col :span="4">
                        <div></div>
                    </a-col>
                </a-row>
            </div>
        </a-col>
    </a-row>

</template>

<script lang="ts" setup>

import {
    IconGithub,
    IconHeart,
    IconHome,
    IconMindMapping,
    IconQqCircleFill,
    IconUserGroup
} from "@arco-design/web-vue/es/icon";
import ArticleList from "@/components/article/ArticleList.vue";
import {emitter} from "@/plugin/BusJs/bus";
import {ref} from "vue";
import api from "@/plugin/axios/api/common/siteinfo"
import {Message} from '@arco-design/web-vue';
import router from "@/router";

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
    padding: 0 150px;
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

.IndexBox-2-PC {
    padding: 25px 250px;
}

.IndexBox-2-PE {
    padding: 25px 25px;
}
</style>