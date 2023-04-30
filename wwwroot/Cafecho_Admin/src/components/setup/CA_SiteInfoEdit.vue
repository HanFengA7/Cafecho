<template>
    <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            title="网站设置"
            @back="() => router.push('Index')"
    />
    <br>
    <a-card class="form-center-1">
        <a-form
                ref="formRef"
                :model="formState"
                :rules="rules"
                class="form-center-2"
                name="SiteInfoEditForm"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
        >
            <a-form-item name="sitename">
                <a-input v-model:value="formState.sitename" placeholder="网站名称">
                    <template #prefix>
                        <HomeOutlined/>
                    </template>
                    <template #suffix>
                        <a-tooltip title="输入网站名称">
                            <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)"/>
                        </a-tooltip>
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item name="slogan" style="margin-top: 10px;">
                <a-input v-model:value="formState.slogan" placeholder="网站标语" style="margin-top: 10px;">
                    <template #prefix>
                        <CrownOutlined/>
                    </template>
                    <template #suffix>
                        <a-tooltip title="输入网站标语">
                            <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)"/>
                        </a-tooltip>
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item name="logourl" style="margin-top: 10px;">
                <a-input v-model:value="formState.logourl" placeholder="Logo外链" style="margin-top: 10px;">
                    <template #prefix>
                        <PictureOutlined/>
                    </template>
                    <template #suffix>
                        <a-tooltip title="输入Logo外链">
                            <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)"/>
                        </a-tooltip>
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item name="blogger" style="margin-top: 10px;">
                <a-input v-model:value="formState.blogger" placeholder="博主">
                    <template #prefix>
                        <UserOutlined/>
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 10, offset: 10 }" style="margin-top: 10px;">
                <a-button html-type="submit" type="primary">更新</a-button>
            </a-form-item>
        </a-form>
    </a-card>
</template>

<script lang="ts" setup>
import router from "@/router";
import {reactive, ref, toRefs} from "vue";
import type {Rule} from 'ant-design-vue/es/form';
import {notification} from "ant-design-vue";
import {CrownOutlined, HomeOutlined, InfoCircleOutlined, PictureOutlined, UserOutlined} from "@ant-design/icons-vue";
import api from "@/plugin/axios/api/setup/siteinfo";

const formRef = ref();

interface FormState {
    sitename: string;
    slogan: string;
    logourl: string;
    blogger: string;
}

const formState = reactive<FormState>({
    sitename: "",
    slogan: "",
    logourl: "",
    blogger: ""
});

api.getSiteInfoApi().then(res => {
    formState.sitename = res.data.data[0].sitename
    formState.slogan = res.data.data[0].slogan
    formState.logourl = res.data.data[0].logourl
    formState.blogger = res.data.data[0].blogger
})

const rules: Record<string, Rule[]> = {
    sitename: [
        {required: true, message: '请输入网站名称', trigger: 'change'},
    ],
    slogan: [
        {required: true, message: '请输入网站标语', trigger: 'change'},
    ],
    logourl: [
        {required: true, message: '请输入LogoUrl', trigger: 'change'},
        {type: "url", message: 'Type url', trigger: 'blur'},
    ],
    blogger: [
        {required: true, message: '请输入博主', trigger: 'change'},
    ],
};

const onFinish = (values: FormState) => {
    api.editSiteInfoApi(values).then(res => {
        console.log(res.data)
        if (res.data.status != 200) {
            notification.error({
                message: 'Error',
                description: res.data.message,
            });
        }
        if (res.data.status == 200) {
            notification.success({
                message: 'Success',
                description: '更新网站信息成功！',
            });
        }
    })
};

const onFinishFailed = () => {
    notification.warn({
        message: 'Warn',
        description:
            '请勿提交非法数据！',
    });
};


toRefs(formState)
</script>

<style>
.form-center-1 {
    margin-left: 200px;
    margin-right: 200px;
}

.form-center-2 {
    margin-left: 200px;
    margin-right: 200px;
}
</style>