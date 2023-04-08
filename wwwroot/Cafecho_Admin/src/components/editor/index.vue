<template>
    <div>
        <Editor
                v-model="myValue"
                :init="eInit"
        >
        </Editor>
    </div>
</template>

<script lang="ts" setup>
import Editor from "@tinymce/tinymce-vue";
import tinymce from "tinymce/tinymce.js";
import "tinymce/themes/silver/"
import "tinymce/icons/default/"
import "tinymce/models/dom/"
import "tinymce/skins/content/default/content.css"

const eInit = {
    language_url: '/assets/js/tinymce/langs/zh_CN.js',
    language: 'zh_CN',
    skin_url: '/assets/js/tinymce/skins/ui/oxide',
    base_url: '/assets/js/tinymce/',
    height: 400,
    branding: false,
    promotion: false,
    menubar: true,
    toolbar1: 'undo redo | styles | bold italic blockquote | link image | alignleft aligncenter alignright | h1 h2 h3 h4 h5 h6 |  backcolor | copy cut',
}
tinymce.init({})

import {reactive, ref} from "vue"
//用于接收外部传递进来的富文本
const myValue = ref(props.value)
</script>

<style scoped>

</style>