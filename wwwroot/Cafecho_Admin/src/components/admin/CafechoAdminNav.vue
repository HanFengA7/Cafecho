<template>
  <a-layout-sider
    style="width: 256px; background: #fafafa"
    breakpoint="lg"
    v-model:collapsed="collapsed"
  >
    <div class="logo">
      <span>{{ collapsed ? "Cafecho" : "Cafecho Admin" }}</span>
    </div>
    <a-menu
      class="menu"
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

      <a-sub-menu key="sub1_article">
        <template #icon>
          <ReadOutlined />
        </template>
        <template #title>文章管理</template>
        <a-menu-item key="ArticleList">
          <template #icon>
            <ProfileOutlined />
          </template>
          文章列表
        </a-menu-item>
        <a-menu-item key="ArticleAdd">
          <template #icon>
            <EditOutlined />
          </template>
          文章编写
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub2_category">
        <template #icon>
          <BookOutlined />
        </template>
        <template #title>分类管理</template>
        <a-menu-item key="CategoryList">
          <template #icon>
            <ProfileOutlined />
          </template>
          分类列表
        </a-menu-item>
        <a-menu-item key="CategoryAdd">
          <template #icon>
            <EditOutlined />
          </template>
          添加分类
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub3_user">
        <template #icon>
          <UserOutlined />
        </template>
        <template #title>用户管理</template>
        <a-menu-item key="UserList">
          <template #icon>
            <TeamOutlined />
          </template>
          用户列表
        </a-menu-item>
        <a-menu-item key="UserAdd">
          <template #icon>
            <UsergroupAddOutlined />
          </template>
          添加用户
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";
import {
  RadarChartOutlined,
  ReadOutlined,
  EditOutlined,
  ProfileOutlined,
  BookOutlined,
  UserOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons-vue";

import type { MenuMode, MenuTheme } from "ant-design-vue";

export default {
  components: {
    RadarChartOutlined,
    ReadOutlined,
    EditOutlined,
    ProfileOutlined,
    BookOutlined,
    UserOutlined,
    TeamOutlined,
    UsergroupAddOutlined,
  },
  setup() {
    const state = reactive({
      mode: "inline" as MenuMode,
      theme: "light" as MenuTheme,
      selectedKeys: ["1"],
      collapsed: false,
    });
    return {
      ...toRefs(state),
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
