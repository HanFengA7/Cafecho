<template>
    <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            title="编辑文章"
            @back="() => router.push('../ArticleList')"
    />
    <br>
    <a-card>
        <a-form
                ref="formRef"
                :model="formState"
                :rules="rules"
                name="ArticleAddForm"
                @finish="onFinish(aid)"
                @finishFailed="onFinishFailed"
        >
            <a-row>
                <a-col :span="12">
                    <a-form-item
                            label="文章标题"
                            name="title"
                            style="width: 550px"
                    >
                        <a-input v-model:value="formState.title"/>
                    </a-form-item>
                    <a-form-item
                            label="文章概要"
                            name="desc"
                            style="width: 550px;"
                    >
                        <a-textarea v-model:value="formState.desc" style="height: 85px"/>
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <a-form-item
                            label="文章标签"
                            name="tags"
                            style="width: 550px"
                    >
                        <a-select
                                v-model:value="TagsRef"
                                :token-separators="[',']"
                                mode="tags"
                                placeholder="填写一些文章的标签"
                                style="width: 100%"
                        ></a-select>
                    </a-form-item>
                    <a-form-item
                            label="文章分类"
                            name="cid"
                            style="width: 550px"
                    >
                        <a-select v-model:value="formState.cid" name="cid" placeholder="文章分类">
                            <a-select v-for="item in CategoryOptionsData.list" key="item.id" :value="item.id">
                                {{ item.name }}
                            </a-select>
                        </a-select>
                    </a-form-item>
                    <a-form-item
                            label="文章展图"
                            name="img"
                            style="width: 550px"
                    >
                        <a-input v-model:value="formState.img"/>
                    </a-form-item>
                </a-col>
            </a-row>

            <a-form-item
                    name="content"
            >
                <Editor v-model:value="formState.content" @getContent="getContent"></Editor>
            </a-form-item>
            <a-form-item
                    style="text-align: right"
            >
                <a-button html-type="submit" type="primary">发表文章</a-button>
            </a-form-item>
        </a-form>
    </a-card>
</template>

<script lang="ts" setup>
import router from "@/router";
import {reactive, ref, toRefs, watch} from "vue";
import axios from "@/plugin/axios/axios";
import Editor from "@/components/editor/index.vue";
import {notification} from "ant-design-vue";
import {Rule} from "ant-design-vue/es/form";


/* *
 * [文章数据区域] [开始]
 * */
const aid = router.currentRoute.value.params.aid
let uid: any
axios.get(
    'api/v1/AuthTokenInfo/' + window.sessionStorage.getItem("token"),
).then(res => {
    uid = res.data.UserInfo[0].ID
})
const formRef = ref();

interface FormState {
    uid: any;
    title: string;
    desc: string;
    tags: any;
    cid: any;
    img: string;
    content: string;
}

const formState = reactive<FormState>({
    uid: uid,
    title: '',
    desc: '',
    tags: 'undefined',
    cid: undefined,
    img: '',
    content: '',
});
axios.get(
    'api/v1/article/' + aid,
).then(res => {
    formState.title = res.data.data.title
    formState.desc = res.data.data.desc
    formState.cid = res.data.data.cid
    formState.img = res.data.data.img
    formState.content = res.data.data.content
    TagsRef.value = res.data.data.tags.split(',')
    //console.log(TagsRef)
})
/* *
 * [文章数据区域] [结束]
 * */


/* *
 * [文章标签] [开始]
 * */
let TagsRef = ref([]);
/*
const TagsHandleChange = (value:string[]) => {
    //数组转字符串
    let a = value.toString()
    console.log(a)
    //字符串转数组
    let b = a.split(',')
    console.log(b)
};
*/
/* *
 * [文章标签] [结束]
 * */


/* *
* [文章分类] [开始]
* */
const CategoryOptionsData = reactive({
    list: [{
        id: null,
        name: '不使用分类',
    }]
})
const GetCategoryData = () => {
    axios.get(
        'api/v1/category',
        {
            params: {
                //当前页数
                page_num: 1,
            }
        },
    ).then(res => {
        if (res.data.total != 0) {
            let tmp = []
            for (let i = 0; i < res.data.total; i++) {
                tmp.push({
                    id: res.data.data[i].id,
                    name: res.data.data[i].name
                })
            }
            CategoryOptionsData.list = tmp
        }
    })
}
/* *
 * [文章分类] [结束]
 * */


/* *
 * [文章表单规则] [开始]
 * */
const rules: Record<string, Rule[]> = {
    title: [
        {required: true, message: '请输入文章标题', trigger: 'change'},
    ],
    desc: [
        {required: true, message: '请输入文章概要', trigger: 'change'},
    ],
    content: [
        {required: true, message: '请输入文章内容', trigger: 'change'},
    ],
};
/* *
 * [文章表单规则] [结束]
 * */


/* *
 * [文章表单提交] [开始]
 * */
const getContent = (v: string) => {
    formState.content = v
    console.log(v)
}
//成功
const onFinish = (aid: any) => {
    formState.uid = uid
    formState.tags = TagsRef.value.toString()
    axios.put('api/v1/article/' + aid, formState).then(res => {
        if (res.data.status != 200) {
            notification.error({
                message: 'Error',
                description: res.data.message,
            });
        } else {
            notification.success({
                message: 'Success',
                description: '文章修改成功',
            });
            console.log(res.data)
            console.log(TagsRef.value)
        }
    })
};
//失败
const onFinishFailed = () => {
    notification.warn({
        message: 'Warn',
        description:
            '请勿提交非法数据！',
    });
    console.log(formState.content)
};
/* *
 * [文章表单提交] [结束]
 * */

watch(
    () => router.currentRoute.value,
    (newValue: any) => {
        console.log(newValue)
    },
    {
        immediate: true
    }
)

GetCategoryData()
toRefs(formState)

</script>

<style scoped>

</style>