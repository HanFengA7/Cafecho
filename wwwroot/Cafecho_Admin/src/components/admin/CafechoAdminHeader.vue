<template>
  <div>
    <a-button danger @click="SignOutLogin">
      <template #icon>
        <ImportOutlined />
      </template>
    </a-button>
    <a-avatar style="margin: 25px" :size="45">
      <template #icon>
        <UserOutlined />
      </template>
    </a-avatar>
  </div>
</template>

<script lang="ts">
import router from "@/router/index";
import { UserOutlined, ImportOutlined } from "@ant-design/icons-vue";

export default {
  components: {
    UserOutlined,
    ImportOutlined,
  },
  methods: {
    SignOutLogin() {
      window.sessionStorage.clear();
      router.push("login");
    },
  },
};
</script>
