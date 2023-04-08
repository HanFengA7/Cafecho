<template>
    <a-layout-header class="header" style="background: rgb(250 250 250); padding: 0">
        <div>
            <a-button danger @click="methods.SignOutLogin">
                <template #icon>
                    <ImportOutlined/>
                </template>
            </a-button>
            <a-avatar :size="45" shape="square" style="margin: 25px">
                <template #icon>
                    <UserOutlined/>
                </template>
            </a-avatar>
        </div>
    </a-layout-header>
</template>

<script lang="ts" setup>
import router from "@/router/index";
import {ImportOutlined, UserOutlined} from "@ant-design/icons-vue";

const methods = {
    SignOutLogin() {
        window.sessionStorage.clear();
        router.push("/login");
    },
}
</script>

<style scoped>
.header {
    justify-content: flex-end;
    align-items: center;
    display: flex;
    background-color: #f8f8f8;
    padding: 0;
}
</style>