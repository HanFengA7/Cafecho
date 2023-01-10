<template>
  <div style="padding: 0 24px 24px">
    <a-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
      <a-card class="BreadCrumb-Card-Admin">
        <a-breadcrumb>
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item>分类管理</a-breadcrumb-item>
          <a-breadcrumb-item>分类列表</a-breadcrumb-item>
        </a-breadcrumb>
      </a-card>
    </a-col>

    <a-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
      <a-breadcrumb style="margin: 20px">
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>分类管理</a-breadcrumb-item>
        <a-breadcrumb-item>分类列表</a-breadcrumb-item>
      </a-breadcrumb>
    </a-col>
  </div>
</template>

<style scoped>
.BreadCrumb-Card-Admin {
  margin: 15px;
  border-radius: 20px;
  box-shadow: 0.5rem 0.875rem 2.375rem rgb(39 44 49 / 6%),
    0.0625rem 0.1875rem 0.5rem rgb(39 44 49 / 3%);
}
</style>
