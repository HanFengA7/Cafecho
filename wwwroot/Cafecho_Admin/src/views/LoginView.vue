<template>
  <div class="container">
    <div class="loginBox">
      <a-form
        ref="formRef"
        :model="formState"
        :rules="rules"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
        class="loginForm"
      >
        <a-form-item has-feedback name="username">
          <a-input
            v-model:value="formState.username"
            placeholder="Username"
            type="text"
          >
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item has-feedback name="password">
          <a-input-password
            v-model:value="formState.password"
            placeholder="Password"
            type="password"
          >
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <div class="loginButtonBox">
          <a-button type="primary" html-type="submit">登录</a-button>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import type { Rule } from "ant-design-vue/es/form";
import { defineComponent, reactive, ref } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { message, type FormInstance } from "ant-design-vue";
import axios from "@/plugins/axiosInstance";
import router from "@/router/index";

interface FormState {
  username: string;
  password: string;
}

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const formRef = ref<FormInstance>();
    const formState = reactive<FormState>({
      username: "",
      password: "",
    });

    const rules: Record<string, Rule[]> = {
      username: [
        {
          required: true,
          message: "请输入用户名!",
          trigger: "blur",
        },
        {
          min: 4,
          max: 20,
          message: "用户名需大于4位小于20位",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码!",
          trigger: "blur",
        },
        {
          min: 6,
          message: "密码需大于6位",
          trigger: "blur",
        },
      ],
    };

    const handleFinish = async (values: any) => {
      const { data: res } = await axios.post("login", formState);
      if (res.status != 200) {
        console.log(res);
        return message
          .loading("数据验证中...", 2)
          .then(() => message.error(res.message, 3));
      } else {
        message
          .loading("数据验证中...", 0.5)
          .then(() => message.success("登录成功", 2.5));
        window.sessionStorage.setItem("token", res.token);
        await router.push("admin");
      }
    };

    const handleFinishFailed = (errors: any) => {
      message
        .loading("数据验证中...", 2)
        .then(() => message.error("请勿输入非法数据", 3));
    };
    return {
      formRef,
      formState,
      rules,
      handleFinish,
      handleFinishFailed,
    };
  },
});
</script>

<style scoped>
.container {
  height: 100%;
  background-color: #1e1f22;
}

.loginBox {
  width: 450px;
  height: 300px;
  background-color: #f8f8f8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}

.loginForm {
  width: 100%;
  position: absolute;
  bottom: 20%;
  padding: 0 50px;
  box-sizing: border-box;
}

.loginButtonBox {
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
}
</style>
