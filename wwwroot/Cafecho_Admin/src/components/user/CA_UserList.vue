<template>
  <!--PC Breadcrumb-->
  <a-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
    <a-card class="BreadCrumb-Card-Admin">
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>用户管理</a-breadcrumb-item>
        <a-breadcrumb-item>用户列表</a-breadcrumb-item>
      </a-breadcrumb>
    </a-card>
  </a-col>
  <!--PE Breadcrumb-->
  <a-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
    <a-breadcrumb style="margin: 5px">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>用户管理</a-breadcrumb-item>
      <a-breadcrumb-item>用户列表</a-breadcrumb-item>
    </a-breadcrumb>
  </a-col>

  <a-card
    style="
      margin: 15px;
      border-radius: 20px;
      box-shadow: 0.5rem 0.875rem 2.375rem rgb(39 44 49 / 6%),
        0.0625rem 0.1875rem 0.5rem rgb(39 44 49 / 3%);
    "
  >
    <a-row>
      <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <a-input-search placeholder="input search text" enter-button />
      </a-col>
      <a-col style="left: 15px" :xs="0" :sm="0" :md="12" :lg="12" :xl="12">
        <a-button type="primary">新增用户</a-button>
        <a-button type="primary" style="left: 15px">删除用户</a-button>
      </a-col>
    </a-row>

    <a-table
      style="margin: 15px"
      :row-key="(record) => record"
      :columns="columns"
      :data-source="dataSource"
      :pagination="pagination"
      @change="handleTableChange"
    >
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'"
          >{{ text.first }} {{ text.last }}
        </template>
      </template>
    </a-table>
  </a-card>
</template>
<script lang="ts">
import { ref } from "vue";
import { message } from "ant-design-vue";
import axios from "@/plugins/axiosInstance";
//数据源
const dataSource: any = ref([]);
//表头参数
const columns: any = ref([
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
  },
  {
    title: "用户名",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "角色",
    dataIndex: "role",
    key: "role",
  },
]);
//分页参数
const pagination: any = ref({
  pageSizeOptions: ["10", "50", "100"],
  //数据总数
  total: 0,
  //是否可以改变pageSize
  showSizeChanger: true,
  // 只有一页时是否隐藏分页器
  hideOnSinglePage: false,
  //是否可以快速跳转至某页
  showQuickJumper: false,
});
const queryParam: any = ref({
  pageSize: 10,
  pageNum: 1,
});

const GetList = async () => {
  const { data: res } = await axios.get("users", {
    params: {
      //每页条数
      page_size: queryParam.value.pageSize,
      //当前页数
      page_num: queryParam.value.pageNum,
    },
  });
  if (res.status !== 200) {
    return message.error("数据获取异常", 10);
  } else {
    dataSource.value = res.data;
    pagination.value.total = res.total;
  }
};

// 更改分页
const handleTableChange = (pagination: any, filters: any, sorter: any) => {
  const pager = { ...pagination };
  pager.current = pagination.current;
  pager.pageSize = pagination.pageSize;
  queryParam.value.pageSize = pagination.pageSize;
  queryParam.value.pageNum = pagination.current;
  console.log(queryParam.value.pageNum);

  if (pager.pageSize !== pagination.pageSize) {
    queryParam.value.pageNum = 1;
    pager.current = 1;
    console.log(pagination);
  }
  pagination = pager;
  console.log(pagination);
  GetList();
};

export default {
  setup() {
    return {
      dataSource,
      columns,
      pagination,
      handleTableChange,
    };
  },
};
GetList();
</script>

<style scoped>
.BreadCrumb-Card-Admin {
  margin: 15px;
  border-radius: 20px;
  box-shadow: 0.5rem 0.875rem 2.375rem rgb(39 44 49 / 6%),
    0.0625rem 0.1875rem 0.5rem rgb(39 44 49 / 3%);
}
</style>
