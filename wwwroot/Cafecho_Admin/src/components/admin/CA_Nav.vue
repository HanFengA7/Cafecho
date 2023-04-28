<template>
    <a-layout-sider
            v-model:collapsed="data.state.collapsed"
            :style="{
      height: '100vh',
      position: 'sticky',
      left: 0,
      top: 0,
      bottom: 0,
      background: '#fafafa',
    }"
            breakpoint="lg"
            collapsible
    >
        <div class="logo">
            <span>{{ data.state.collapsed ? "Cafecho" : "Cafecho Admin" }}</span>
        </div>
        <a-menu
                v-model:selectedKeys="data.state.selectedKeys"
                :mode="data.state.mode"
                :theme="data.state.theme"
                class="menu"
                @click="methods.MenuRouterPath"
        >
            <a-menu-item key="Index">
                <template #icon>
                    <RadarChartOutlined/>
                </template>
                控制台
            </a-menu-item>

            <a-sub-menu key="sub1_article">
                <template #icon>
                    <ReadOutlined/>
                </template>
                <template #title>博文管理</template>
                <a-menu-item key="ArticleAdd">
                    <template #icon>
                        <EditOutlined/>
                    </template>
                    撰写文章
                </a-menu-item>
                <a-menu-item key="ArticleList">
                    <template #icon>
                        <ProfileOutlined/>
                    </template>
                    文章列表
                </a-menu-item>
                <a-menu-item key="CategoryList">
                    <template #icon>
                        <ProfileOutlined/>
                    </template>
                    分类列表
                </a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="sub3_user">
                <template #icon>
                    <UserOutlined/>
                </template>
                <template #title>用户管理</template>
                <a-menu-item key="UserList">
                    <template #icon>
                        <TeamOutlined/>
                    </template>
                    用户列表
                </a-menu-item>
                <a-menu-item key="UserAdd">
                    <template #icon>
                        <UsergroupAddOutlined/>
                    </template>
                    添加用户
                </a-menu-item>
            </a-sub-menu>

            <a-menu-item key="SiteInfoEdit">
                <template #icon>
                    <SettingOutlined/>
                </template>
                网站设置
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script lang="ts" setup>
import {reactive, toRefs, watch} from "vue";
import {
    EditOutlined,
    ProfileOutlined,
    RadarChartOutlined,
    ReadOutlined,
    SettingOutlined,
    TeamOutlined,
    UsergroupAddOutlined,
    UserOutlined
} from "@ant-design/icons-vue";

import type {MenuMode, MenuTheme} from "ant-design-vue";
import router from "@/router/index";
import type {RouteLocationRaw} from "vue-router";

const methods = {
    MenuRouterPath(item: { key: RouteLocationRaw }) {
        router.push(item.key);
        return item.key;
    },
}

let data = reactive({
    state: {
        mode: "inline" as MenuMode,
        theme: "light" as MenuTheme,
        selectedKeys: [router.currentRoute.value.name],
        collapsed: false,
    }
})

watch(
    () => router.currentRoute.value,
    (newValue: any) => {
        data.state.selectedKeys = [newValue.name]
        //console.log(newValue.name)
        toRefs(data);
    },
    {
        immediate: true
    }
)
toRefs(data);
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