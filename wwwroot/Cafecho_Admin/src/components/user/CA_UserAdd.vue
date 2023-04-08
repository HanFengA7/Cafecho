<template>
    <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            title="添加用户"
            @back="() => router.push('Index')"
    />
    <br>
    <a-card class="form-center-1">
        <a-form
                ref="formRef"
                :model="formState"
                :rules="rules"
                class="form-center-2"
                name="UserAddForm"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
        >
            <!--用户名-->
            <a-form-item name="username">
                <a-input v-model:value="formState.username" placeholder="用户名">
                    <template #prefix>
                        <UserOutlined/>
                    </template>
                    <template #suffix>
                        <a-tooltip title="输入用户名">
                            <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)"/>
                        </a-tooltip>
                    </template>
                </a-input>
            </a-form-item>
            <!--电子邮箱-->
            <a-form-item name="email" style="margin-top: 10px;">
                <a-input v-model:value="formState.email" placeholder="电子邮箱" style="margin-top: 10px;">
                    <template #prefix>
                        <DiffOutlined type="email"/>
                    </template>
                    <template #suffix>
                        <a-tooltip title="输入电子邮箱">
                            <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)"/>
                        </a-tooltip>
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item name="avaterurl" style="margin-top: 10px;">
                <a-input v-model:value="formState.avaterurl" placeholder="头像外链" style="margin-top: 10px;">
                    <template #prefix>
                        <PictureOutlined type="avater"/>
                    </template>
                    <template #suffix>
                        <a-tooltip title="输入头像外链">
                            <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)"/>
                        </a-tooltip>
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item name="password" style="margin-top: 10px;">
                <a-input-password v-model:value="formState.password" placeholder="密码">
                    <template #prefix>
                        <LockOutlined/>
                    </template>
                </a-input-password>
            </a-form-item>
            <a-form-item name="checkpassword" style="margin-top: 10px;">
                <a-input-password v-model:value="formState.checkpassword" placeholder="确认密码">
                    <template #prefix>
                        <LockOutlined/>
                    </template>
                </a-input-password>
            </a-form-item>
            <a-form-item name="role" style="margin-top: 10px;">
                <a-select v-model:value="formState.role" :options="RoleOptions" placeholder="用户权限">
                </a-select>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 10, offset: 10 }" style="margin-top: 10px;">
                <a-button html-type="submit" type="primary">创建</a-button>
                <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
            </a-form-item>
        </a-form>
    </a-card>
</template>

<script lang="ts" setup>
import router from "@/router";
import {reactive, ref, toRefs} from "vue";
import type {Rule} from 'ant-design-vue/es/form';
import {message, notification} from "ant-design-vue";
import {DiffOutlined, InfoCircleOutlined, LockOutlined, PictureOutlined, UserOutlined} from "@ant-design/icons-vue";
import api from "@/plugin/axios/api/user/useradd";

const formRef = ref();

interface FormState {
    username: string;
    email: string;
    avaterurl: string;
    password: string;
    checkpassword: string;
    role: any;
}

const RoleOptions = [{value: 1, label: '管理员'}, {value: 2, label: '订阅者'}]
const formState = reactive<FormState>({
    username: "",
    password: "",
    checkpassword: "",
    email: "",
    avaterurl: "",
    role: [],
});

let validatePass = async (_rule: Rule, value: string) => {
    if (value === '') {
        return Promise.reject('Please input the password');
    } else {
        if (formState.checkpassword !== '') {
            formRef.value?.validateFields('checkpassword');
        }
        return Promise.resolve();
    }
};
let validatePass2 = async (_rule: Rule, value: string) => {
    if (value === '') {
        return Promise.reject('Please input the password again');
    } else if (value !== formState.password) {
        return Promise.reject("Two inputs don't match!");
    } else {
        return Promise.resolve();
    }
};

const rules: Record<string, Rule[]> = {
    username: [
        {required: true, message: 'Please input Activity Username', trigger: 'change'},
        {min: 3, max: 15, message: 'Length should be 3 to 15', trigger: 'blur'},
    ],
    email: [
        {required: true, message: 'Please input Email', trigger: 'change'},
        {type: "email", message: 'Type email', trigger: 'blur'},
    ],
    avaterurl: [
        {required: true, message: 'Please input AvaterUrl', trigger: 'change'},
        {type: "url", message: 'Type url', trigger: 'blur'},
    ],
    password: [
        {required: true, validator: validatePass, trigger: 'change'},
        {min: 8, message: 'Length should be 8', trigger: 'blur'},
    ],
    checkpassword: [
        {validator: validatePass2, trigger: 'change'},
        {min: 8, message: 'Length should be 8', trigger: 'blur'},
    ],
    role: [
        {required: true, message: 'Please input', trigger: 'change'},
    ]

};

const onFinish = (values: FormState) => {
    api.userAddApi(values).then(res => {
        if (res.data.status != 200) {
            notification.error({
                message: 'Error',
                description: res.data.message,
            });
        }
        if (res.data.status == 200) {
            notification.success({
                message: 'Success',
                description: '添加用户成功！',
            });
            formRef.value.resetFields();
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

const resetForm = () => {
    formRef.value.resetFields();
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