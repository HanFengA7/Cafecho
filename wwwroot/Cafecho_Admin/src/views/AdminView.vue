<template>
  <a-layout class="container">
    <a-layout-sider>
      <CafechoAdminNav></CafechoAdminNav>
    </a-layout-sider>

    <a-layout>
      <a-layout-header>Header</a-layout-header>
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

export default {
  components: { CafechoAdminNav, CafechoAdminFooter },
};
</script>

<style scoped>
.container {
  height: 100%;
}
</style>
