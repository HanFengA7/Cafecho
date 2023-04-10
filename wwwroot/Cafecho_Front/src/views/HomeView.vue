<template>
    <a-layout style="height: 100%">
        <a-layout-sider
            :collapsed="collapsed"
            collapsible
            hide-trigger
        >
            <div class="logo"/>
            <a-menu
                :defaultOpenKeys="['1']"
                :defaultSelectedKeys="['0_3']"
                :style="{ width: '100%' }"
                @menuItemClick="onClickMenuItem"
            >
                <a-menu-item key="0_1">
                    <IconHome/>
                    首页
                </a-menu-item>
                <a-sub-menu key="1">
                    <template #title>
                        <span><IconCalendar/>分类</span>
                    </template>
                    <a-menu-item key="1_1">Test1</a-menu-item>
                    <a-menu-item key="1_2">Test2</a-menu-item>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style=" background-color: #ffffff; margin: 15px">

                <a-row>

                    <a-col flex="100px">
                        <a-button shape="round" @click="onCollapse">
                            <IconCaretRight v-if="collapsed"/>
                            <IconCaretLeft v-else/>
                        </a-button>
                    </a-col>
                    <a-col flex="auto"></a-col>
                    <a-space>
                        <a-col flex="100px">
                            <a-input-search :allow-clear="true" :style="{width:'200px'}" shape="round"/>
                        </a-col>
                        <a-col flex="100px">
                            <a-button shape="round">
                                <IconSunFill/>
                            </a-button>
                        </a-col>
                    </a-space>
                </a-row>

            </a-layout-header>
            <a-layout-content style="background-color: #fafafa">
                <div style="height: 300px; background-color: #ffffff">
                    <a-row>
                        <a-space>
                            <a-col flex="100px">
                                <div>
                                    <div style="padding: 45px;">
                                        <a-avatar :size="200" style="box-shadow: 0 12px 15px rgb(140 152 164 / 10%);">
                                            <img alt="avatar" src="https://q1.qlogo.cn/g?b=qq&nk=1091044631&s=640"/>
                                        </a-avatar>
                                    </div>
                                </div>
                            </a-col>
                            <a-col flex="auto">
                                <h1>HanFengA7</h1>
                                <h4>This is HanFengA7 !</h4>
                                <a-col>
                                    <a-space>
                                        <a-button shape="round">
                                            <IconGithub/>
                                        </a-button>
                                        <a-button shape="round">
                                            <IconQqCircleFill/>
                                        </a-button>
                                    </a-space>
                                </a-col>
                            </a-col>
                        </a-space>
                    </a-row>
                </div>
            </a-layout-content>
            <a-layout-footer></a-layout-footer>
        </a-layout>

    </a-layout>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {
    IconCalendar,
    IconCaretLeft,
    IconCaretRight,
    IconGithub,
    IconHome,
    IconQqCircleFill,
    IconSunFill,
} from '@arco-design/web-vue/es/icon';

const collapsed = ref(false);
const onCollapse = () => {
    collapsed.value = !collapsed.value;
};
</script>
