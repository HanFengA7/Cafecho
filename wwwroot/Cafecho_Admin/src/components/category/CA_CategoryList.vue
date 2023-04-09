<template>
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="分类列表"
        @back="() => router.push('Index')"
    />
    <br/>
    <a-row>
        <a-col :lg="6" :md="6" :sm="16" :xl="6" :xs="16">
            <a-input-search
                v-model:value="queryParam.name"
                allowClear
                enter-button
                placeholder="输入分类名搜索分类信息"
                @search="GetList"
            />
        </a-col>
        <a-col :lg="6" :md="6" :sm="6" :xl="6" :xs="6">
            <a-button style="margin-left: 10px;" type="primary" @click="AddCategory">
                <template #icon>
                    <EditOutlined/>
                </template>
                添加分类
            </a-button>
        </a-col>
    </a-row>
    <a-table
            :bordered=true
            :columns="columns"
            :data-source="dataSource"
            :pagination="pagination"
            :row-key="(record: any) => record.id"
            style="margin: 15px"
            @change="handleTableChange"
    >
        <template #bodyCell="{ column, text ,record }">
            <template v-if="column.dataIndex === 'action'">
                <a-space :size="8">
                    <a-button type="primary" @click="EditCategory(record.id)">
                        <template #icon>
                            <FormOutlined/>
                        </template>
                        编辑
                    </a-button>
                    <div v-if="record.ID != 1">
                        <a-popconfirm title="是否删除这篇文章" @confirm="DeleteCategory(record.id)">
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

    <!--添加分类 Start-->
    <a-modal v-model:open="AddCategoryModelCard" :confirm-loading="AddCategoryModelCardLoading" title="添加分类"
             @ok="AddCategoryOK(CategoryInfo.id)">
        <a-form
            ref="formRef"
            :model="CategoryInfo"
            :rules="CategoryInfoRules"
        >
            <a-form-item name="name">
                <a-input v-model:value="CategoryInfo.name" placeholder="分类名">
                    <template #prefix>
                        <InboxOutlined/>
                    </template>
                    <template #suffix>
                        <a-tooltip title="输入分类名">
                            <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)"/>
                        </a-tooltip>
                    </template>
                </a-input>
            </a-form-item>
        </a-form>
    </a-modal>
    <!--添加分类 End-->

    <!--编辑分类 Start-->
    <a-modal v-model:open="EditCategoryModelCard" :confirm-loading="EditCategoryModelCardLoading" title="编辑分类信息"
             @ok="EditCategoryOK(CategoryInfo.id)">
        <a-form
            ref="formRef"
            :model="CategoryInfo"
            :rules="CategoryInfoRules"
        >
            <a-form-item name="name">
                <a-input v-model:value="CategoryInfo.name" placeholder="分类名">
                    <template #prefix>
                        <InboxOutlined/>
                    </template>
                    <template #suffix>
                        <a-tooltip title="输入分类名">
                            <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)"/>
                        </a-tooltip>
                    </template>
                </a-input>
            </a-form-item>
        </a-form>
    </a-modal>
    <!--编辑分类 End-->


</template>

<script lang="ts" setup>
import {useRouter} from "vue-router";
import {DeleteOutlined, EditOutlined, FormOutlined, InboxOutlined, InfoCircleOutlined} from "@ant-design/icons-vue";
import {reactive, ref, toRefs} from "vue";
import api from "@/plugin/axios/api/category/categorylist";
import {message} from "ant-design-vue";
import axios from "@/plugin/axios/axios";
import {Rule} from "ant-design-vue/es/form";

//基础
const formRef = ref();
const router = useRouter()

//数据源
const dataSource: any = ref([])
//表头参数
const columns = [
    {
        title: "CID",
        dataIndex: "id",
        key: "id",
        width: '15%',
    },
    {
        title: '分类名',
        dataIndex: 'name',
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


/* *
* [获取列表数据] [开始]
 * */
const GetList = () => {
    api.categoryListApi(dataSource, queryParam).then(res => {
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
* [分类数据] [开始]
 * */
let CategoryInfo = reactive({
    id: '',
    name: '',
});
const CategoryInfoRules: Record<string, Rule[]> = {
    name: [
        {required: true, message: '请输入分类名', trigger: 'change'},
        {min: 1, max: 30, message: 'Length should be 1 to 30', trigger: 'blur'},
    ],
};
/* *
* [分类数据] [结束]
 * */


/* *
* [添加分类数据] [开始]
 * */
const AddCategoryModelCard = ref<boolean>(false);
const AddCategoryModelCardLoading = ref<boolean>(false);
const AddCategory = (id: any) => {
    AddCategoryModelCard.value = true
}
const AddCategoryOK = (id: any) => {
    AddCategoryModelCardLoading.value = true;
    api.addCategoryApi(CategoryInfo).then(res => {
        if (res.data.status == 200) {
            message.success("成功添加分类！", 5);
        } else {
            message.warn(res.data.message, 5);
        }
        GetList();
    }).then(
        res => {
            setTimeout(() => {
                AddCategoryModelCard.value = false;
                AddCategoryModelCardLoading.value = false;
            }, 1000);
        }
    )
};
/* *
* [添加分类数据] [结束]
 * */


/* *
* [编辑分类数据] [开始]
 * */
const EditCategoryModelCard = ref<boolean>(false);
const EditCategoryModelCardLoading = ref<boolean>(false);
const EditCategory = (id: any) => {
    EditCategoryModelCard.value = true
    api.getCategoryApi(id).then(
        res => {
            CategoryInfo.id = res.data.data.id
            CategoryInfo.name = res.data.data.name
        }
    )
}
const EditCategoryOK = (id: any) => {
    EditCategoryModelCardLoading.value = true;
    api.editCategoryApi(CategoryInfo, id).then(res => {
        if (res.data.status == 200) {
            message.success("成功修改分类信息！", 5);
        } else {
            message.warn(res.data.message, 5);
        }
        GetList();
    }).then(
        res => {
            setTimeout(() => {
                EditCategoryModelCard.value = false;
                EditCategoryModelCardLoading.value = false;
            }, 1000);
        }
    )
};
/* *
* [编辑分类数据] [开始]
 * */


/* *
* [删除分类数据] [开始]
 * */
const DeleteCategory = async (id: any) => {
    let res: any
    res = await axios.delete('api/v1/category/' + id)
    if (res.data.status !== 200) {
        return message.error("删除数据异常！", 10);
    } else {
        return new Promise(resolve => {
            setTimeout(() => resolve(true), 3000);
        }).then(
            () => {
                GetList();
                message.success("成功删除分类！", 5);
            }
        );
    }
}
/* *
* [删除分类数据] [结束]
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
toRefs(CategoryInfo)
</script>

<style scoped>

</style>