<template>
    <a-layout-sider
            :collapsed="collapsed"
            collapsible
            hide-trigger
    >
        <div class="logo"/>
        <a-menu
                :defaultOpenKeys="['2']"
                :defaultSelectedKeys="['1']"
                :style="{ width: '100%' }"
                @menuItemClick=""
        >
            <a-menu-item key="1" @click="router.push('/')">
                <IconHome/>
                首页
            </a-menu-item>
            <a-sub-menu key="2">
                <template #title>
                    <span><IconCalendar/>分类</span>
                </template>
                <a-menu-item key="1_1">Test1</a-menu-item>
                <a-menu-item key="1_2">Test2</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>

<script lang="ts" setup>
import {onBeforeMount, ref} from "vue";
import {IconCalendar, IconHome} from "@arco-design/web-vue/es/icon";
import {emitter} from "@/plugin/BusJs/bus";
import router from "@/router";

const collapsed = ref();
onBeforeMount(() => {
    emitter.on('getCollapsed', (v: any) => {
        collapsed.value = v.value
    })
})

</script>

<style scoped>

</style>