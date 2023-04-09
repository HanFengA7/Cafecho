<template>
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="文章列表"
        @back="() => router.push('Index')"
    />
    <br/>
    <a-row>
        <a-col :lg="6" :md="6" :sm="16" :xl="6" :xs="16">
            <a-input-search
                v-model:value="queryParam.title"
                allowClear
                enter-button
                placeholder="输入文章标题搜索文章"
                @search="GetList"
            />
        </a-col>
        <a-col :lg="6" :md="6" :sm="6" :xl="6" :xs="6">
            <a-button style="margin-left: 10px;" type="primary" @click="GoToAddArticle">
                <template #icon>
                    <EditOutlined/>
                </template>
                撰写文章
            </a-button>
        </a-col>
    </a-row>
    <a-table
        :bordered=true
        :columns="columns"
        :data-source="dataSource"
        :pagination="pagination"
        :row-key="(record) => record.aid"
        style="margin: 15px"
        @change="handleTableChange"
    >
        <template #bodyCell="{ column, text ,record }">
            <template v-if="column.dataIndex === 'Username'">
                <span>{{ record.User.username }}</span>
            </template>
            <template v-if="column.dataIndex === 'Category'">
                <span>{{ record.Category.name == "" ? "未设置分类" : record.Category.name }}</span>
            </template>
            <template v-if="column.dataIndex === 'tags'">
                <a-tag
                    v-for="tag in record.tags.split(',')"
                    :key="tag"
                    :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
                >
                    {{ tag }}
                </a-tag>
            </template>
            <template v-if="column.dataIndex === 'action'">
                <a-space :size="8">
                    <a-button type="primary" @click="EditArticle(record.aid)">
                        <template #icon>
                            <FormOutlined/>
                        </template>
                        编辑
                    </a-button>
                    <div v-if="record.ID != 1">
                        <a-popconfirm title="是否删除这篇文章" @confirm="DeleteArticle(record.aid)">
                            <a-button danger type="primary">
                                <template #icon>
                                    <DeleteOutlined/>
                                </template>
                                删除
                            </a-button>
                        </a-popconfirm>
                    </div>
                </a-space>
            </template>
        </template>
    </a-table>
</template>

<script lang="ts" setup>
import {useRouter} from "vue-router";
import {DeleteOutlined, EditOutlined, FormOutlined} from "@ant-design/icons-vue";
import {ref} from "vue";
import api from "@/plugin/axios/api/article/articlelist";
import {message} from "ant-design-vue";
import axios from "@/plugin/axios/axios";

//基础
const formRef = ref();
const router = useRouter()

//数据源
const dataSource: any = ref([])
//表头参数
const columns = [
    {
        title: "ID",
        dataIndex: "aid",
        key: "aid",
        width: '5%',
    },
    {
        title: '文章标题',
        dataIndex: 'title',
        width: '15%',
        align: 'center',
    },
    {
        title: '文章概要',
        dataIndex: 'desc',
        width: '15%',
        align: 'center',
    },
    {
        title: '作者',
        dataIndex: 'Username',
        width: '15%',
        align: 'center',
    },
    {
        title: '分类',
        dataIndex: 'Category',
        width: '15%',
        align: 'center',
    },
    {
        title: '标签',
        dataIndex: 'tags',
        width: '15%',
        align: 'center',
    },
    {
        title: '操作',
        dataIndex: 'action',
        width: '30%',
        align: 'center',
    }
];

//分页参数(1)
const pagination: any = ref({
    pageSizeOptions: ["10", "50", "100"],
    //数据总数
    total: 0,
    //是否可以改变pageSize
    showSizeChanger: true,
    // 只有一页时是否隐藏分页器
    hideOnSinglePage: false,
    //是否可以快速跳转至某页
    showQuickJumper: false,
});

//分页参数(2)
const queryParam = ref<any>({
    title: '',
    pageSize: 10,
    pageNum: 1,
});

//路由跳转 GoToAddArticle
const GoToAddArticle = () => {
    router.push('ArticleAdd')
}

/* *
* [获取列表数据] [开始]
 * */
const GetList = () => {
    api.articleListApi(dataSource, queryParam).then(res => {
        if (res.data.status !== 200) {
            return message.error("数据获取异常", 10);
        } else {
            dataSource.value = res.data.data;
            pagination.value.total = res.data.total;
        }
    })
};
/* *
* [获取列表数据] [结束]
 * */


/* *
* [编辑文章数据] [开始]
 * */
const EditArticle = (aid: any) => {
    router.push(`ArticleEdit/${aid}`)
}
/* *
* [编辑文章数据] [开始]
 * */


/* *
* [删除文章数据] [开始]
 * */
const DeleteArticle = async (id: any) => {
    let res: any
    res = await axios.delete('api/v1/article/' + id)
    if (res.data.status !== 200) {
        return message.error("删除数据异常！", 10);
    } else {
        return new Promise(resolve => {
            setTimeout(() => resolve(true), 3000);
        }).then(
            () => {
                GetList();
                message.success("成功删除文章！", 5);
                console.log(res.data)
            }
        );
    }
}
/* *
* [删除文章数据] [结束]
 * */


/* *
* [更改分页数据] [开始]
 * */
const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    const pager = {...pagination};
    pager.current = pagination.current;
    pager.pageSize = pagination.pageSize;
    queryParam.value.pageSize = pagination.pageSize;
    queryParam.value.pageNum = pagination.current;
    //console.log(queryParam.value.pageNum);

    if (pager.pageSize !== pagination.pageSize) {
        queryParam.value.pageNum = 1;
        pager.current = 1;
        //console.log(pagination);
    }
    pagination = pager;
    //console.log(pagination);
    GetList();
};
/* *
* [更改分页数据] [结束]
 * */

GetList()
</script>

<style scoped>

</style>