<template>
  <a-layout class="container">
    <CafechoAdminNav></CafechoAdminNav>

    <a-layout>
      <a-layout-header class="header">
        <CafechoAdminHeader></CafechoAdminHeader>
      </a-layout-header>
      <a-layout-content>
        <div style="padding: 0 24px 24px">
          <a-skeleton active />
        </div>
      </a-layout-content>
      <CafechoAdminFooter></CafechoAdminFooter>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import CafechoAdminNav from "@/components/admin/CafechoAdminNav.vue";
import CafechoAdminHeader from "@/components/admin/CafechoAdminHeader.vue";
import CafechoAdminFooter from "@/components/admin/CafechoAdminFooter.vue";

export default {
  components: { CafechoAdminNav, CafechoAdminHeader, CafechoAdminFooter },
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
  background-color: #f8f8f8;
}
</style>
