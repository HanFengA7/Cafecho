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
          :selected-keys="selectedKeys"
          :style="{ width: '100%' }"
          @menuItemClick=""
        >
          <a-menu-item key="1" @click="router.push('/')">
            <IconHome />
            首页
          </a-menu-item>
          <a-menu-item key="2" @click="router.push('/About')">
            <IconHeart />
            关于
          </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { IconHeart, IconHome } from "@arco-design/web-vue/es/icon";
import { emitter } from "@/plugin/BusJs/bus";
import router from "@/router";

const collapsed = ref();
const selectedKeys = ref();

onBeforeMount(() => {
  emitter.on("getCollapsed", (v: any) => {
    collapsed.value = v.value;
  });
  emitter.on("getSelectedKeys", (v: any) => {
    selectedKeys.value = v.value;
  });
})
</script>

<style scoped>

</style>