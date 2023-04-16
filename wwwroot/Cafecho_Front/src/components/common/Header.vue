<template>
    <a-layout-header style=" background-color: #ffffff; margin: 15px">
        <a-row>
            <a-col flex="100px">
                <a-button shape="round" @click="methods.onCollapse()">
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
</template>

<script lang="ts" setup>
import {IconCaretLeft, IconCaretRight, IconSunFill} from "@arco-design/web-vue/es/icon";
import {emitter} from "@/plugin/BusJs/bus";

import {ref} from "vue";

const collapsed: any = ref(false);

const methods = {
    onCollapse() {
        collapsed.value = !collapsed.value;
        emitter.emit('getCollapsed', collapsed)
    }
}

</script>

<style scoped>

</style>