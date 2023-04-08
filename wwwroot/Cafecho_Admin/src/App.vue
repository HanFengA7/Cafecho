<template>
    <a-config-provider :locale="zhCN">
        <RouterView/>
    </a-config-provider>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {RouterLink, RouterView,} from 'vue-router'
import zhCN from 'ant-design-vue/es/locale/zh_CN';

</script>

<style scoped>
</style>
