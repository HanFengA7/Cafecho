<template>
    <a-layout-header style=" background-color: #ffffff; padding: 15px">
        <a-row>
            <a-col :lg="{span:24}" :md="{span: 24}" :sm="{span: 0}" :xs="{span: 0}" flex="100px">
                <a-button shape="round" @click="methods.onCollapse()">
                    <IconCaretRight v-if="collapsed" />
                    <IconCaretLeft v-else />
                </a-button>
            </a-col>
            <a-col flex="auto"></a-col>
            <a-space>
                <a-col :lg="{span:24}" :md="{span: 24}" :sm="{span: 20}" :xs="{span: 20}" flex="100px">
                    <a-input-search :allow-clear="true" :style="{width:'200px'}" shape="round" @click="CTest"/>
                </a-col>
                <a-col flex="100px">
                    <a @click="CTest">
                        <a-button shape="round">
                            <IconSunFill/>
                        </a-button>
                    </a>
                </a-col>
            </a-space>
        </a-row>
    </a-layout-header>
</template>

<script lang="ts" setup>
import { IconCaretLeft, IconCaretRight, IconSunFill } from "@arco-design/web-vue/es/icon";
import { emitter } from "@/plugin/BusJs/bus";

import { ref } from "vue";
import { Message } from "@arco-design/web-vue";


let collapsed: any
let screenWidth: any

if (document.body.clientWidth > 992) {
    collapsed = ref(false);
    emitter.emit('getCollapsed', collapsed)
} else {
    collapsed = ref(true);
    emitter.emit('getCollapsed', collapsed)
}

const methods = {
    onCollapse() {
        collapsed.value = !collapsed.value;
        emitter.emit('getCollapsed', collapsed)
    }
}

window.onresize = () => {
    screenWidth = ref(document.body.clientWidth)
    if (screenWidth.value > 992) {
        collapsed = ref(false);
        emitter.emit('getCollapsed', collapsed)
    } else {
        collapsed = ref(true);
        emitter.emit('getCollapsed', collapsed)
    }
}

const CTest = () => {
    Message.info('正在建设中...')
}




</script>

<style scoped>

</style>