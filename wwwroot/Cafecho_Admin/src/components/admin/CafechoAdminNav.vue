<template>
  <div class="logo">Cafecho Admin</div>
  <a-menu
    class="menu"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    :mode="mode"
    :theme="theme"
  >
    <a-menu-item key="1">
      <template #icon>
        <RadarChartOutlined />
      </template>
      控制台
    </a-menu-item>

    <a-sub-menu key="sub1">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>文章管理</template>
      <a-menu-item key="3">文章列表</a-menu-item>
      <a-menu-item key="4">文章编写</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import {
  RadarChartOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";

import type { MenuMode, MenuTheme } from "ant-design-vue";

export default {
  components: {
    RadarChartOutlined,
  },
  setup() {
    const state = reactive({
      mode: "inline" as MenuMode,
      theme: "light" as MenuTheme,
      selectedKeys: ["1"],
      openKeys: ["sub1"],
    });
    const changeMode = (checked: boolean) => {
      state.mode = checked ? "vertical" : "inline";
    };
    const changeTheme = (checked: boolean) => {
      state.theme = checked ? "dark" : "light";
    };
    return {
      ...toRefs(state),
      changeMode,
      changeTheme,
    };
  },
};
</script>

<style scoped>
.logo {
  height: 32px;
  margin: 16px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
}

.menu {
  background: #fafafa;
}
</style>
