<template>
    <br/>
    <br/>
    <a-row :gutter="24">
        <a-col :lg="{span:24}" :md="{span: 24}" :sm="{span: 0}" :xs="{span: 0}">
            <a-timeline>
                <a-timeline-item v-for="(item,index) in articleListInfo" :key="item.aid">
                    <a-card>
                        <template #actions>
                            <span class="icon-hover"> <IconThumbUp/></span>
                            <span class="icon-hover"> <IconShareInternal/></span>
                            <span class="icon-hover"> <IconFire/></span>
                        </template>
                        <template #cover>
                            <a @click="router.push('Article/'+item.aid)">
                                <div :style="{height: '204px',overflow: 'hidden',}">
                                    <img
                                            :src=articleImgUrl(index)
                                            alt="dessert"
                                            style="height: 100%;width: 100%;object-fit: cover"
                                    />
                                </div>
                            </a>
                        </template>

                        <a-card-meta :description=item.desc
                                     :title=item.title>
                            <template #avatar>
                                <div :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }">
                                    <a-avatar :size="24" :style="{ marginRight: '8px' }">
                                        <img :src="item.User.avaterurl" alt="avatar"/>
                                    </a-avatar>
                                    <a-typography-text>{{ item.User.username }}</a-typography-text>
                                </div>
                            </template>
                        </a-card-meta>
                    </a-card>
                    <br/>
                    <br/>
                </a-timeline-item>
            </a-timeline>
            <a-pagination :default-current="queryParam.current" :total="pagination.total"
                          @change="methods.handleCurrentChange"/>
        </a-col>
    </a-row>


    <a-row :gutter="24">
        <a-col :lg="{span:0}" :md="{span: 0}" :sm="{span: 24}" :xs="{span: 24}">
            <a v-for="(item,index) in articleListInfo" :key="item.aid">
                <a-card>
                    <template #cover>
                        <a @click="router.push('Article/'+item.aid)">
                            <div :style="{height: '204px',overflow: 'hidden',}">
                                <img
                                    :src=articleImgUrl(index)
                                    alt="dessert"
                                    style="height: 100%;width: 100%;object-fit: cover"
                                />
                            </div>
                        </a>
                    </template>

                    <a-card-meta :description=item.desc
                                 :title=item.title
                                 style="white-space:pre-wrap;word-wrap:break-word;"
                    >
                        <template #avatar>
                            <div :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }">
                                <a-avatar :size="24" :style="{ marginRight: '8px' }">
                                    <img :src="item.User.avaterurl" alt="avatar" />
                                </a-avatar>
                                <a-typography-text>{{ item.User.username }}</a-typography-text>
                            </div>
                        </template>
                    </a-card-meta>
                </a-card>
                <br/>
                <br/>
            </a>

            <a-pagination :default-current="queryParam.current" :total="pagination.total"
                          @change="methods.handleCurrentChange"/>
        </a-col>
    </a-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { IconFire, IconShareInternal, IconThumbUp } from "@arco-design/web-vue/es/icon";
import api from "@/plugin/axios/api/article/articlelist";
import router from "@/router";

//文章列表数据
let articleListInfo: any = ref([])
//文章图片url
const articleImgUrl = (index: number) => {
    if (articleListInfo.value[index].img != "") {
        return articleListInfo.value[index].img
    } else {
        return 'https://api.hanfenga7.cn/RandomImg/V1/api.php?type=img&sj=' + index
    }
}
//分页参数
const pagination: any = ref({
    //数据总数
    total: 10,
});
//Param参数
const queryParam = ref<any>({
    title: '',
    pageSize: 10,
    current: 1,
});

const methods = {
    //获取文章列表
    getArticleList() {
        api.articleListApi(articleListInfo, queryParam).then(res => {
            articleListInfo.value = res.data.data
            pagination.value.total = res.data.total
        })
    },
    handleCurrentChange(current: any) {
        queryParam.value.current = current;
        //console.log(`current page: ${current}`)
        //onsole.log(queryParam.value.current)
        methods.getArticleList()
        //console.log(articleListInfo.value)
    }
}


methods.getArticleList()
</script>

<style scoped>
.IndexBox-1 {
    /*padding: 25px 400px;*/
    transform: translateY(-50%);
    padding: 0px 400px;
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
</style>