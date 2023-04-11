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


                <div class="IndexBox-1">

                    <a-row :gutter="{ md: 8, lg: 24, xl: 32 }">
                        <a-col :span="6">
                            <a-card :bordered="false" class="BoxCard" hoverable>
                                    <span>
                                    <a-avatar
                                        :size="40"
                                        shape="square"
                                    >
                                        <IconHeart/>
                                    </a-avatar>
                                    <a-typography-text>关 于</a-typography-text>
                                    </span>
                            </a-card>
                        </a-col>
                        <a-col :span="6">
                            <a-card :bordered="false" class="BoxCard" hoverable>
                                    <span>
                                    <a-avatar
                                        :size="40"
                                        shape="square"
                                    >
                                        <IconMindMapping/>
                                    </a-avatar>
                                    <a-typography-text>计 划</a-typography-text>
                                    </span>
                            </a-card>
                        </a-col>
                        <a-col :span="6">
                            <a-card :bordered="false" class="BoxCard" hoverable>
                                    <span>
                                    <a-avatar
                                        :size="40"
                                        shape="square"
                                    >
                                        <IconUserGroup/>
                                    </a-avatar>
                                    <a-typography-text>朋 友</a-typography-text>
                                    </span>
                            </a-card>
                        </a-col>
                    </a-row>
                </div>

                <div class="IndexBox-2">
                    <a-row :gutter="24">
                        <a-col :span="20">
                            <div>

                                <a-timeline>
                                    <a-timeline-item>
                                        <a-card>
                                            <template #actions>
                                                <span class="icon-hover"> <IconThumbUp/> </span>
                                                <span class="icon-hover"> <IconShareInternal/> </span>
                                                <span class="icon-hover"> <IconFire/> </span>
                                            </template>
                                            <template #cover>
                                                <div
                                                    :style="{height: '204px',overflow: 'hidden',}"
                                                >
                                                    <img
                                                        alt="dessert"
                                                        src="https://i.stay.pub/xj/32a4f6b503c16426.jpg"
                                                        style="height: 100%;width: 100%;object-fit: cover"
                                                    />
                                                </div>
                                            </template>
                                            <a-card-meta description="This is the description"
                                                         title="烟雨朦胧迷糊景，风舞翩跹醉春情">
                                                <template #avatar>
                                                    <div
                                                        :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }"
                                                    >
                                                        <a-avatar :size="24" :style="{ marginRight: '8px' }">
                                                            <img alt="avatar"
                                                                 src="https://q1.qlogo.cn/g?b=qq&nk=838214611&s=640"/>
                                                        </a-avatar>
                                                        <a-typography-text>Cosanoxj</a-typography-text>
                                                    </div>
                                                </template>
                                            </a-card-meta>
                                        </a-card>
                                        <br/>
                                        <br/>
                                    </a-timeline-item>
                                    <a-timeline-item>
                                        <a-card>
                                            <template #actions>
                                                <span class="icon-hover"> <IconThumbUp/> </span>
                                                <span class="icon-hover"> <IconShareInternal/> </span>
                                                <span class="icon-hover"> <IconFire/> </span>
                                            </template>
                                            <template #cover>
                                                <div
                                                    :style="{height: '204px',overflow: 'hidden',}"
                                                >
                                                    <img
                                                        alt="dessert"
                                                        src="https://cdnjson.com/images/2023/02/09/ap.webp"
                                                        style="height: 100%;width: 100%;object-fit: cover"
                                                    />
                                                </div>
                                            </template>
                                            <a-card-meta description="This is the description"
                                                         title="烟雨朦胧迷糊景，风舞翩跹醉春情">
                                                <template #avatar>
                                                    <div
                                                        :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }"
                                                    >
                                                        <a-avatar :size="24" :style="{ marginRight: '8px' }">
                                                            <img alt="avatar"
                                                                 src="https://q1.qlogo.cn/g?b=qq&nk=838214611&s=640"/>
                                                        </a-avatar>
                                                        <a-typography-text>Cosanoxj</a-typography-text>
                                                    </div>
                                                </template>
                                            </a-card-meta>
                                        </a-card>
                                        <br/>
                                        <br/>
                                    </a-timeline-item>
                                </a-timeline>

                            </div>
                        </a-col>
                        <a-col :span="4">
                            <div></div>
                        </a-col>
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
    IconFire,
    IconGithub,
    IconHeart,
    IconHome,
    IconMindMapping,
    IconQqCircleFill,
    IconShareInternal,
    IconSunFill,
    IconThumbUp,
    IconUserGroup,
} from '@arco-design/web-vue/es/icon';

const collapsed = ref(false);
const onCollapse = () => {
    collapsed.value = !collapsed.value;
};
</script>

<style scoped>
.IndexBox-1 {
    /*padding: 25px 400px;*/
    transform: translateY(-50%);
    padding: 0px 400px;
}

.IndexBox-1 .BoxCard {
    background-color: #dfe0e23b;
    border-radius: 10px;
}

.IndexBox-1 .BoxCard span {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.IndexBox-2 {
    padding: 25px 250px;
}
</style>
