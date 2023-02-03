<template>
  <a-layout class="container">
    <CafechoAdminNav></CafechoAdminNav>
    <a-layout style="height: fit-content; padding-bottom: 65px">
      <a-layout-header class="header">
        <CafechoAdminHeader></CafechoAdminHeader>
      </a-layout-header>
      <a-layout-content :style="{ margin: '40px', overflow: 'initial' }">
        <RouterView></RouterView>
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
  min-height: 100%; /* 2. 需要将容器的高度设置成100% */
  position: relative; /* 3. 容器的position设置为relative，给子元素定位提供基点 */
}

.header {
  justify-content: flex-end;
  align-items: center;
  display: flex;
  background-color: #f8f8f8;
  padding: 0;
}
</style>
