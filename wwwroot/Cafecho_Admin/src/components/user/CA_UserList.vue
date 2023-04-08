<template>
    <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            title="用户列表"
            @back="() => router.push('Index')"
    />
    <br>

    <a-row>
        <a-col :lg="6" :md="6" :sm="16" :xl="6" :xs="16">
            <a-input-search
                    v-model:value="queryParam.username"
                    allowClear
                    enter-button
                    placeholder="input search text"
                    @search="GetList"
            />
        </a-col>
        <a-col :lg="6" :md="6" :sm="6" :xl="6" :xs="6">
            <a-button style="margin-left: 10px;" type="primary" @click="GoToAddUser">
                <template #icon>
                    <UserAddOutlined/>
                </template>
                新增用户
            </a-button>
            <a-button style="margin-left: 10px;" type="primary" @click="GoToAddUser">
                <template #icon>
                    <ReloadOutlined/>
                </template>
                重置ID计数
            </a-button>
            <a-col :lg="8" :md="6" :sm="4" :xl="10" :xs="2">
            </a-col>
        </a-col>
    </a-row>

    <a-table
            :bordered=true
            :columns="columns"
            :data-source="dataSource"
            :pagination="pagination"
            :row-key="(record) => record.ID"
            style="margin: 15px"
            @change="handleTableChange"
    >
        <template #bodyCell="{ column, text ,record }">
            <template v-if="column.dataIndex === 'role'">
                <span>{{ text === 1 ? '管理员' : '订阅者' }}</span>
            </template>
            <template v-if="column.dataIndex === 'action'">
                <a-space :size="8">
                    <a-button type="primary" @click="EditUser(record.ID)">
                        <template #icon>
                            <FormOutlined/>
                        </template>
                        Edit
                    </a-button>
                    <div v-if="record.ID != 1">
                        <a-popconfirm title="是否删除这个用户" @cancel="cancel" @confirm="DeleteUser(record.ID)">
                            <a-button danger type="primary">
                                <template #icon>
                                    <DeleteOutlined/>
                                </template>
                                Delete
                            </a-button>
                        </a-popconfirm>
                    </div>
                </a-space>
            </template>
        </template>
    </a-table>

  <!--编辑用户 ModelCard-->
    <a-modal v-model:open="EditUserModelCard" :confirm-loading="EditUserModelCardLoading" title="编辑用户信息"
             @ok="EditUserOK(UserInfo.id)">

        <a-form
                ref="formRef"
                :model="UserInfo"
                :rules="UserInfoRules"
        >
            <!--用户名-->
            <a-form-item name="username">
                <a-input v-model:value="UserInfo.username" placeholder="用户名">
                    <template #prefix>
                        <UserOutlined/>
                    </template>
                    <template #suffix>
                        <a-tooltip title="输入用户名">
                            <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)"/>
                        </a-tooltip>
                    </template>
                </a-input>
            </a-form-item>
            <!--电子邮箱-->
            <a-form-item name="email" style="margin-top: 10px;">
                <a-input v-model:value="UserInfo.email" placeholder="电子邮箱" style="margin-top: 10px;">
                    <template #prefix>
                        <DiffOutlined type="email"/>
                    </template>
                    <template #suffix>
                        <a-tooltip title="输入电子邮箱">
                            <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)"/>
                        </a-tooltip>
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item name="avaterurl" style="margin-top: 10px;">
                <a-input v-model:value="UserInfo.avaterurl" placeholder="头像外链" style="margin-top: 10px;">
                    <template #prefix>
                        <PictureOutlined type="avater"/>
                    </template>
                    <template #suffix>
                        <a-tooltip title="输入头像外链">
                            <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)"/>
                        </a-tooltip>
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item name="role" style="margin-top: 10px;">
                <a-select v-model:value="UserInfo.role" :options="RoleOptions" placeholder="用户权限">
                </a-select>
            </a-form-item>
        </a-form>

    </a-modal>


</template>

<script lang="ts" setup>
import {reactive, ref, toRefs} from "vue";
import {message} from "ant-design-vue";
import axios from "@/plugin/axios/axios";
import api from "@/plugin/axios/api/user/userlist"
import {
    DeleteOutlined,
    DiffOutlined,
    FormOutlined,
    InfoCircleOutlined,
    PictureOutlined,
    ReloadOutlined,
    UserAddOutlined,
    UserOutlined
} from '@ant-design/icons-vue';
import {useRouter} from "vue-router";
import {Rule} from "ant-design-vue/es/form";

const formRef = ref();
const router = useRouter()

//数据源
const dataSource: any = ref([])

//表头参数
const columns = [
    {
        title: "ID",
        dataIndex: "ID",
        key: "ID",
        width: '10%',
    },
    {
        title: '用户名',
        dataIndex: 'username',
        width: '20%',
        align: 'center',
    },
    {
        title: '角色',
        dataIndex: 'role',
        width: '20%',
        align: 'center',
    },
    {
        title: '操作',
        dataIndex: 'action',
        width: '30%',
        align: 'center',
    }
];
//分页参数(1)
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
//分页参数(2)
const queryParam = ref<any>({
    username: '',
    pageSize: 10,
    pageNum: 1,
});

const GetList = () => {
    api.userListApi(dataSource, queryParam).then(res => {
        if (res.data.status !== 200) {
            return message.error("数据获取异常", 10);
        } else {
            dataSource.value = res.data.data;
            pagination.value.total = res.data.total;
        }
    })

};

const DeleteUser = async (id: any) => {
    let res: any
    if (id != 1) {
        res = await axios.delete('api/v1/user/' + id)
    } else {
        res = 500
        return message.error("禁止删除超级用户！", 10);
    }

    if (res.status !== 200) {
        return message.error("删除数据异常！", 10);
    } else {
        return new Promise(resolve => {
            setTimeout(() => resolve(true), 3000);
        }).then(
            () => {
                GetList();
                message.success("成功删除用户！", 5);
            }
        );
    }
}


/*
* [编辑用户模块] (开始)
*/
const RoleOptions = [{value: 1, label: '管理员'}, {value: 2, label: '订阅者'}]
let UserInfo = reactive({
    id: '',
    username: "",
    email: "",
    avaterurl: '',
    role: [],
});
const UserInfoRules: Record<string, Rule[]> = {
    username: [
        {required: true, message: 'Please input Activity Username', trigger: 'change'},
        {min: 3, max: 15, message: 'Length should be 3 to 15', trigger: 'blur'},
    ],
    email: [
        {required: true, message: 'Please input Email', trigger: 'change'},
        {type: "email", message: 'Type email', trigger: 'blur'},
    ],
    avaterurl: [
        {required: true, message: 'Please input AvaterUrl', trigger: 'change'},
        {type: "url", message: 'Type url', trigger: 'blur'},
    ],
    role: [
        {required: true, message: 'Please input', trigger: 'change'},
    ]
};
const EditUserModelCard = ref<boolean>(false);
const EditUserModelCardLoading = ref<boolean>(false);
const EditUser = (id: any) => {
    EditUserModelCard.value = true
    api.getUserApi(id).then(
        res => {
            UserInfo.id = res.data.data[0].ID
            UserInfo.username = res.data.data[0].username
            UserInfo.email = res.data.data[0].email
            UserInfo.avaterurl = res.data.data[0].avaterurl
            UserInfo.role = res.data.data[0].role
        }
    )
}
const EditUserOK = (id: any) => {
    EditUserModelCardLoading.value = true;
    api.editUserApi(UserInfo, id).then(res => {
        if (res.data.status == 200) {
            message.success("成功修改用户信息！", 5);
        } else {
            message.warn(res.data.message, 5);
        }
        GetList();
    }).then(
        res => {
            setTimeout(() => {
                EditUserModelCard.value = false;
                EditUserModelCardLoading.value = false;
            }, 1000);
        }
    )
};
/*
* [编辑用户模块] (结束)
*/

const GoToAddUser = () => {
    router.push('UserAdd')
}

const cancel = () => {

};

// 更改分页
const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    const pager = {...pagination};
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

GetList();
toRefs(UserInfo)
//toRefs(dataSource)
</script>

<style scoped>

</style>