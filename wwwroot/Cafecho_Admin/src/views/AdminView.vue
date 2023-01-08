<template>
  <a-layout class="container">
    <a-layout-sider>
      <CafechoAdminNav></CafechoAdminNav>
    </a-layout-sider>

    <a-layout>
      <a-layout-header class="header">
        <div>
          <a-button type="primary" danger @click="SignOutLogin">退出</a-button>
        </div>
      </a-layout-header>
      <a-layout-content>Content</a-layout-content>
      <a-layout-footer>
        <CafechoAdminFooter></CafechoAdminFooter>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import CafechoAdminNav from "../components/admin/CafechoAdminNav.vue";
import CafechoAdminFooter from "../components/admin/CafechoAdminFooter.vue";
import router from "@/router/index";

export default {
  components: { CafechoAdminNav, CafechoAdminFooter },
  methods: {
    SignOutLogin() {
      window.sessionStorage.clear();
      router.push("login");
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
}

.header {
  justify-content: flex-end;
  align-items: center;
  display: flex;
}
</style>
