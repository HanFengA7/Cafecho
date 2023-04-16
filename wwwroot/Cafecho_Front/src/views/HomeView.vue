<template>
    <a-layout style="height: 100%">
        <Cafecho_Sider></Cafecho_Sider>
        <a-layout>
            <Cafecho_Header></Cafecho_Header>

            <a-layout-content style="background-color: #fafafa">
                <RouterView/>
            </a-layout-content>
            <a-layout-footer></a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>
import Cafecho_Sider from "@/components/common/Sider.vue";
import Cafecho_Header from "@/components/common/Header.vue"
import {RouterView} from "vue-router";
</script>

<style scoped>

</style>
