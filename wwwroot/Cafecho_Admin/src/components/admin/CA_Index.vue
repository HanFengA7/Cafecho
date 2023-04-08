<template>
    <a-row>
        <a-col :span="3">
            <a-avatar :size="128">
                <template #icon>
                    <UserOutlined/>
                </template>
            </a-avatar>
        </a-col>
        <a-col :span="20">
            <h2 style="margin-top: 30px;">下午好, {{ UserInfo.username }} , 快写文章！</h2>
        </a-col>
    </a-row>
    <a-divider/>
    <br/>
    <a-result status="404" sub-title="Sorry, the page you visited does not exist." title="404">
        <template #extra>
            <a-button type="primary">Back Home</a-button>
        </template>
    </a-result>
</template>

<script lang="ts" setup>
import {UserOutlined,} from "@ant-design/icons-vue";
import {ref} from "vue";
import axios from "@/plugin/axios/axios";

const UserInfo = ref({
    id: '',
    username: "",
    email: "",
    avaterurl: '',
    role: [],
});


axios.get(
    'api/v1/AuthTokenInfo/' + window.sessionStorage.getItem("token"),
).then(res => {
    UserInfo.value.id = res.data.UserInfo[0].ID
    UserInfo.value.username = res.data.UserInfo[0].username
    UserInfo.value.email = res.data.UserInfo[0].email
    UserInfo.value.avaterurl = res.data.UserInfo[0].avaterurl
    UserInfo.value.role = res.data.UserInfo[0].role
})


</script>

<style scoped>

</style>