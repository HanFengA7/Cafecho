<template>
  <!--PC [顶部信息卡片] start-->
  <a-row>
    <a-col :lg="{span:32}" :md="{span: 32}" :sm="{span: 0}" :xs="{span: 0}"
           style="height: 300px; width:100% ;background-color: #ffffff">
      <a-row>
        <a-space>
          <a-col flex="100px">
            <div>
              <div style="padding: 45px;">
                <a-avatar :size="200" style="box-shadow: 0 12px 15px rgb(140 152 164 / 10%);">
                  <img :src="SiteInfo.logourl" alt="avatar" />
                </a-avatar>
              </div>
            </div>
          </a-col>
          <a-col flex="auto">
            <h1>{{ SiteInfo.blogger }}</h1>
            <h4>{{ SiteInfo.slogan }}</h4>
            <a-col>
              <a-space>
                <a-button shape="round">
                  <IconGithub />
                </a-button>
                <a-button shape="round">
                  <IconQqCircleFill />
                </a-button>
              </a-space>
            </a-col>
          </a-col>
        </a-space>
      </a-row>
    </a-col>
  </a-row>
  <!--PC [顶部信息卡片] End-->

  <div :style="{ padding: '28px' }">
    <a-page-header
      :show-back="false"
      :style="{ background: 'var(--color-bg-2)' }"
      subtitle="About me"
      title="关于"
    >
      <template #extra>
        <a-radio-group default-value="large" type="button">
          <a-radio value="mini">Mini</a-radio>
          <a-radio value="small">Small</a-radio>
          <a-radio value="large">Large</a-radio>
        </a-radio-group>
      </template>
    </a-page-header>
  </div>


</template>

<script lang="ts" setup>

import { IconGithub, IconQqCircleFill } from "@arco-design/web-vue/es/icon";
import { emitter } from "@/plugin/BusJs/bus";
import { ref } from "vue";
import api from "@/plugin/axios/api/common/siteinfo";
import router from "@/router";

const OnBack = () => {
  router.push("/");
};

const SiteInfo: any = ref({
  sitename: "",
  slogan: "",
  logourl: "",
  blogger: ""
});

api.getSiteInfoApi().then(res => {
  /*设置侧边栏选择选项*/
  let SelectedKeys: any = ref(["2"]);
  emitter.emit("getSelectedKeys", SelectedKeys);
  /*网站信息*/
  SiteInfo.value = res.data.data[0];
  /*设置标题*/
  let Meta_Title: any = ref(res.data.data[0].sitename);
  emitter.emit("getMetaTitle", Meta_Title);
});



</script>

<style scoped>
.IndexBox-1 {
  /*padding: 25px 400px;*/
  transform: translateY(-50%);
  padding: 0 150px;
}

.IndexBox-1 .BoxCard {
  background-color: #dfe0e23b;
  border-radius: 10px;
}

.IndexBox-1 .BoxCard span {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.IndexBox-2-PC {
  padding: 25px 250px;
}

.IndexBox-2-PE {
  padding: 25px 25px;
}
</style>