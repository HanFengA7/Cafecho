<template>
  <a-layout class="container">
      <CA_Nav></CA_Nav>
      <a-layout>
          <CA_Header></CA_Header>
          <a-layout-content
                  :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
          >
              <RouterView></RouterView>
          </a-layout-content>
      </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import CA_Nav from "@/components/admin/CA_Nav.vue";
import CA_Header from "@/components/admin/CA_Header.vue";

</script>

<style scoped>
.container {
    min-height: 100%; /* 2. 需要将容器的高度设置成100% */
    position: relative; /* 3. 容器的position设置为relative，给子元素定位提供基点 */
}

</style>