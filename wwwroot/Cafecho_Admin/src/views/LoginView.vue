<template>
  <div class="container">
      <div class="loginContainer">

          <a-form
                  :model="formState"
                  :rules="rules"
                  class="loginForm"
                  name="loginForm"
                  @finish="onFinish"
                  @finishFailed="onFinishFailed"
          >
              <a-form-item
                      name="username"
              >
                  <a-input v-model:value="formState.username" type="text">
                      <template #prefix>
                          <UserOutlined class="site-form-item-icon"/>
                      </template>
                  </a-input>
              </a-form-item>
              <a-form-item
                      name="password"
              >
                  <a-input v-model:value="formState.password" type="password">
                      <template #prefix>
                          <KeyOutlined class="site-form-item-icon"/>
                      </template>
                  </a-input>
              </a-form-item>
              <a-form-item>
                  <a-button :disabled="disabled" class="login-form-button" html-type="submit" type="primary">
                      Log in
                  </a-button>
              </a-form-item>
          </a-form>

    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, reactive} from 'vue';
import {KeyOutlined, UserOutlined} from '@ant-design/icons-vue';
import {message, notification} from 'ant-design-vue';
import type {Rule} from 'ant-design-vue/es/form';
import api from '@/plugin/axios/api/login'
import {useRouter} from "vue-router";

const router = useRouter()

interface FormState {
    username: string;
    password: string;
}

const formState = reactive<FormState>({
    username: '',
    password: '',
});

const rules: Record<string, Rule[]> = {
    username: [
        {required: true, message: 'Please input Activity Username', trigger: 'change'},
        {min: 3, max: 15, message: 'Length should be 3 to 15', trigger: 'blur'},
    ],
    password: [
        {required: true, message: 'Please input Activity Username', trigger: 'change'},
        {min: 8, message: 'Length should be 8', trigger: 'blur'},
    ],
};

//数据验证成功
const onFinish = () => {
    api.loginApi(formState).then(res => {
        if (res.data.status === 200) {
            message.loading('数据处理中...', 0.5).then(
                () => window.sessionStorage.setItem("token", res.data.token),
            ).then(
                () => router.push('/Index')
            ).then(
                () => message.success('登陆成功', 2.5),
            )
        } else {
            message.loading('数据处理中...', 0.5).then(
                () => {
                    notification.error({
                        message: 'Error',
                        description: res.data.message,
                    });
                }
            )
        }
    }).catch(error => {
        notification.error({
            message: 'Error',
            description: error,
        });
    })
};
//数据验证失败
const onFinishFailed = (errorInfo: any) => {
    notification.warn({
        message: 'Warn',
        description:
            '请勿提交非法数据！',
    });
};

const disabled = computed(() => {
    return !(formState.username && formState.password);
});

</script>

<style scoped>
.container {
    background: rgb(148, 148, 148);
    background: linear-gradient(13deg, rgba(148, 148, 148, 1) 17%, rgba(116, 116, 120, 1) 83%);
    height: 100%;
}

.loginContainer {
    width: 450px;
    height: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fafafa;
    border-radius: 18px;
}

.loginForm {
    width: 100%;
    position: absolute;
    bottom: 20%;
    padding: 0 15%;
    box-sizing: border-box;
}

.loginBtn {
    display: flex;
    justify-content: flex-end;
}

.login-form-button {
    width: 100%;
}
</style>