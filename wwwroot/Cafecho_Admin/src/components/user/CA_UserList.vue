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
        style="margin: 5px"
        :dataSource="userList"
        :columns="columns"
        :pagination="paginationOption"
      >
        <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'name'"
            >{{ text.first }} {{ text.last }}
          </template>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts">
import axios from "@/plugins/axiosInstance";
import { message } from "ant-design-vue";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];
let paginationOption: any = {
  pageSizeOption: ["10", "50", "100"],
  defaultCurrent: 1,
  defaultPageSize: 2,
  total: 0,
  showSizeChanger: true,
  showTotal: (total: any) => `共${total}条`,
  onchange: (page: any, pageSize: any) => {},
  onshowSizeChange: (current: any, size: any) => {},
};
let userList: any = [];
export default {
  created() {
    this.getUserList();
  },
  methods: {
    async getUserList(): Promise<any> {
      const { data: res } = await axios.get("users", {
        params: {
          page_size: paginationOption.defaultPageSize,
          page_num: paginationOption.defaultCurrent,
        },
      });
      if (res.status !== 200) {
        return message.error("数据获取异常", 10);
      } else {
        userList = res.data;
        let paginationOption_total = res.total;
        console.log(res);
      }
    },
  },
  data() {
    return {
      paginationOption,
      userList,
      columns,
    };
  },
};
</script>

<style scoped>
.BreadCrumb-Card-Admin {
  margin: 15px;
  border-radius: 20px;
  box-shadow: 0.5rem 0.875rem 2.375rem rgb(39 44 49 / 6%),
    0.0625rem 0.1875rem 0.5rem rgb(39 44 49 / 3%);
}
</style>
