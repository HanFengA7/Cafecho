<template>
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="网站设置"
    @back="() => router.push('Index')"
  />
  <br>


  <a-card class="form-center-1">
    <a-form
      ref="formRef"
      :model="formState"
      :rules="rules"
      name="SiteInfoEditForm"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-tabs centered>
        <a-tab-pane key="1" force-render tab="全局设置">
          <div class="form-center-2">

            <a-form-item label="网站名称" name="sitename">
              <a-input v-model:value="formState.sitename" placeholder="网站名称">
                <template #suffix>
                  <a-tooltip title="输入网站名称">
                    <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)" />
                  </a-tooltip>
                </template>
              </a-input>
            </a-form-item>

          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="首页信息卡片设置">
          <div class="form-center-2">
            <a-form-item label="博主名称" name="blogger">
              <a-input v-model:value="formState.blogger" placeholder="博主">
                <template #suffix>
                  <a-tooltip title="输入博主名称">
                    <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)" />
                  </a-tooltip>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item label="网站标语" name="slogan">
              <a-input v-model:value="formState.slogan" placeholder="网站标语">
                <template #suffix>
                  <a-tooltip title="输入网站标语">
                    <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)" />
                  </a-tooltip>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item label="网站Logo" name="logourl">
              <a-input v-model:value="formState.logourl" placeholder="Logo外链">
                <template #suffix>
                  <a-tooltip title="输入Logo外链">
                    <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)" />
                  </a-tooltip>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item label="QQ" name="cardinfo_qq">
              <a-input v-model:value="formState.cardinfo_qq" placeholder="QQ" />
            </a-form-item>
            <a-form-item label="GITHUB" name="cardinfo_github">
              <a-input v-model:value="formState.cardinfo_github" placeholder="GITHUB" />
            </a-form-item>
            <a-form-item label="爱发电" name="cardinfo_afdian">
              <a-input v-model:value="formState.cardinfo_afdian" placeholder="爱发电" />
            </a-form-item>
          </div>
        </a-tab-pane>
        <a-tab-pane key="3" tab="页脚设置">
          <div class="form-center-2">
            <a-form-item label="ICP备案号" name="icpnum1">
              <a-input v-model:value="formState.icpnum1" placeholder="ICP备案号" />
            </a-form-item>
            <a-form-item label="公安备案号" name="icpnum2">
              <a-input v-model:value="formState.icpnum2" placeholder="公安备案号" />
            </a-form-item>
            <a-form-item label="建站年份" name="footer_siteyear">
              <a-input v-model:value="formState.footer_siteyear" placeholder="建站年份" />
            </a-form-item>
          </div>
        </a-tab-pane>
      </a-tabs>


      <a-form-item :wrapper-col="{ span: 10, offset: 10 }" style="margin-top: 10px;">
        <a-button html-type="submit" type="primary">更新</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script lang="ts" setup>
import router from "@/router";
import { reactive, ref, toRefs } from "vue";
import type { Rule } from "ant-design-vue/es/form";
import { notification } from "ant-design-vue";
import { InfoCircleOutlined } from "@ant-design/icons-vue";
import api from "@/plugin/axios/api/setup/siteinfo";

const formRef = ref();

interface FormState {
  sitename: string;
  slogan: string;
  logourl: string;
  blogger: string;
  cardinfo_qq: any;
  cardinfo_github: any;
  cardinfo_afdian: any;
  icpnum1: any;
  icpnum2: any;
  footer_siteyear: any;
}

const formState = reactive<FormState>({
  sitename: "",
  slogan: "",
  logourl: "",
  blogger: "",
  cardinfo_qq: "",
  cardinfo_github: "",
  cardinfo_afdian: "",
  icpnum1: "",
  icpnum2: "",
  footer_siteyear: ""
});

api.getSiteInfoApi().then(res => {
  formState.sitename = res.data.data[0].sitename;
  formState.slogan = res.data.data[0].slogan;
  formState.logourl = res.data.data[0].logourl;
  formState.blogger = res.data.data[0].blogger;
  formState.cardinfo_qq = res.data.data[0].cardinfo_qq;
  formState.cardinfo_github = res.data.data[0].cardinfo_github;
  formState.cardinfo_afdian = res.data.data[0].cardinfo_afdian;
  formState.icpnum1 = res.data.data[0].icpnum1;
  formState.icpnum2 = res.data.data[0].icpnum2;
  formState.footer_siteyear = res.data.data[0].footer_siteyear;
});

const rules: Record<string, Rule[]> = {
  sitename: [
    { required: true, message: "请输入网站名称", trigger: "change" }
  ],
  slogan: [
    { required: true, message: "请输入网站标语", trigger: "change" }
  ],
  logourl: [
    { required: true, message: "请输入LogoUrl", trigger: "change" },
    { type: "url", message: "Type url", trigger: "blur" }
  ],
  blogger: [
    { required: true, message: "请输入博主", trigger: "change" }
  ]
};

const onFinish = (values: FormState) => {
  api.editSiteInfoApi(values).then(res => {
    if (res.data.status != 200) {
      notification.error({
        message: "Error",
        description: res.data.message
      });
    }
    if (res.data.status == 200) {
      notification.success({
        message: "Success",
        description: "更新网站信息成功！"
      });
    }
  });
};

const onFinishFailed = () => {
  notification.warn({
    message: "Warn",
    description:
      "请勿提交非法数据！"
  });
};


toRefs(formState);
</script>

<style>
.form-center-1 {
    margin-left: 200px;
    margin-right: 200px;
}

.form-center-2 {
    margin-left: 200px;
    margin-right: 200px;
}
</style>