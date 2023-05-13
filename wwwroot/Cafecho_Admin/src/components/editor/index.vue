<template>
    <div>
        <Editor
            v-model="ContentValue"
            :init="eInit"
        >
        </Editor>
    </div>
</template>

<script lang="ts" setup>
import Editor from "@tinymce/tinymce-vue";
import tinymce from "tinymce/tinymce.js";
import "tinymce/themes/silver/";
import "tinymce/icons/default/";
import "tinymce/models/dom/";
import "@/assets/tinymcecontent.css";
import "@/assets/js/tinymce/plugins/image/plugin.min.js";
import "@/assets/js/tinymce/plugins/link/plugin.min.js";
import { defineEmits, ref, watch } from "vue";

const eInit = {
  language_url: "/admin/assets/js/tinymce/langs/zh_CN.js",
  language: "zh_CN",
  skin_url: "/admin/assets/js/tinymce/skins/ui/oxide",
  base_url: "/admin/assets/js/tinymce/",
  height: 400,
  branding: false,
  promotion: false,
  menubar: true,
  plugins: "image link",
  toolbar1: "undo redo | styles | bold italic blockquote | link image | alignleft aligncenter alignright | h1 h2 h3 h4 h5 h6 |  backcolor | copy cut"
};
tinymce.init({})

const emits = defineEmits(["getContent"])
const props = defineProps({
    value: {
        type: String,
        default: () => {
            return ""
        },
    },
})
//用于接收外部传递进来的富文本
const ContentValue = ref(props.value)

//监听外部传递进来的的数据变化
watch(
    () => props.value,
    () => {
        ContentValue.value = props.value
        emits("getContent", ContentValue.value)
    }
)
//监听富文本中的数据变化
watch(
    () => ContentValue.value,
    () => {
        emits("getContent", ContentValue.value)
    }
)
</script>

<style scoped>

</style>