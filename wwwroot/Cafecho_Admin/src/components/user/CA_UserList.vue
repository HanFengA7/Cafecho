<template>
  <div style="padding: 0 24px 24px">
    <a-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
      <a-card class="BreadCrumb-Card-Admin">
        <a-breadcrumb>
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item>用户管理</a-breadcrumb-item>
          <a-breadcrumb-item>用户列表</a-breadcrumb-item>
        </a-breadcrumb>
      </a-card>
    </a-col>

    <a-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
      <a-breadcrumb style="margin: 20px">
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>用户管理</a-breadcrumb-item>
        <a-breadcrumb-item>用户列表</a-breadcrumb-item>
      </a-breadcrumb>
    </a-col>
  </div>
  <a-card style="margin: 20px">
    <a-row>
      <a-col :span="6">
        <a-input-search placeholder="input search text" enter-button />
      </a-col>
      <a-col :span="4" style="left: 15px">
        <a-button type="primary">新增用户</a-button>
        <a-button type="primary" style="left: 15px">删除用户</a-button>
      </a-col>
    </a-row>

    <a-table
      ref="table"
      size="middle"
      :columns="columns"
      :dataSource="dataSource"
      :pagination="pagination"
      @change="handleTableChange"
    >
    </a-table>
  </a-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { usePagination } from "vue-request";
import axios from "@/plugins/axiosInstance";
import { message } from "ant-design-vue";

//数据源
let dataSource: any = [];
//表头参数
let columns: any = [
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
];
//分页参数
let pagination: any = {
  pageSizeOptions: ["5", "10", "20"],
  //当前页数
  current: 1,
  //每页条数
  PageSize: 5,
  //数据总数
  total: 0,
  //是否可以改变pageSize
  showSizeChanger: true,
  //页码或 pageSize 改变的回调，参数是改变后的页码及每页条数
  change: (page: any, pageSize: any) => {},
  //pageSize 变化的回调
  showSizeChange: (current: any, size: any) => {},
};
export default defineComponent({
  methods: {
    async getList() {
      const { data: res } = await axios.get("users", {
        params: {
          //每页条数
          page_size: pagination.PageSize,
          //当前页数
          page_num: 1,
        },
      });
      if (res.status !== 200) {
        return message.error("数据获取异常", 10);
      } else {
        dataSource = res.data;
        console.log(dataSource);
      }
    },
  },

  created() {
    this.getList();
    console.log(dataSource);
  },

  setup() {
    let { dataSource1, current1, pageSize1 }: any = {
      //dataSource: ["id", "666"],
    };
    return {
      dataSource,
      columns,
      pagination,
    };
  },
});
</script>

<style scoped>
.BreadCrumb-Card-Admin {
  margin: 15px;
  border-radius: 20px;
  box-shadow: 0.5rem 0.875rem 2.375rem rgb(39 44 49 / 6%),
    0.0625rem 0.1875rem 0.5rem rgb(39 44 49 / 3%);
}
</style>
