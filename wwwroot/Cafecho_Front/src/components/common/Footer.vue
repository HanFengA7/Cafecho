<template>
  <a-layout-footer class="footer">

    <a-row :gutter="24">

      <!--PC(Start)-->
      <a-col :lg="{span:24}" :md="{span: 24}" :sm="{span: 0}" :xs="{span: 0}">
        <div class="footer-wrap-PC">
          <div class="footer-top-PC">
            <!--左侧(Start)-->
            <div class="footer-top-icp-PC">
              <a v-if="ificpnum1" href="https://beian.miit.gov.cn/" target="_blank">互联网ICP备案：{{ SiteInfo.icpnum1
                }}</a>
              <span>
            <a v-if="ificpnum2" href="https://www.beian.gov.cn/"
               target="_blank">互联网公安备案：{{ SiteInfo.icpnum2 }}</a>
          </span>
              <span data-v-0f1600f3="">Copyright © {{ SiteInfo.footer_siteyear }}-2023 {{ SiteInfo.blogger }}</span>
            </div>
            <!--左侧(End)-->
            <!--右侧(Start)-->
            <div class="footer-top-contact-PC">
              <div class="Cafecho-valign">
                <div style="margin-left: 30px;">遇到问题,联系我？</div>
              </div>
              <div class="footer-top-icon-PC">
                <a :href=SiteInfo.cardinfo_qq>
                  <IconQqCircleFill style="font-size: 20px; color: #e5e5e5;" />
                </a>
                <a :href=SiteInfo.cardinfo_github>
                  <IconGithub style="font-size: 20px; color: #e5e5e5;" />
                </a>
                <a :href=SiteInfo.cardinfo_afdian>
                  <IconFaceSmileFill style="font-size: 20px; color: #e5e5e5;" />
                </a>
              </div>
            </div>
            <!--右侧(End)-->
          </div>
        </div>
      </a-col>
      <!--PC(End)-->

      <!--PE(Start)-->
      <a-col :lg="{span:0}" :md="{span: 0}" :sm="{span: 24}" :xs="{span: 24}">
        <div class="footer-wrap-PC">
          <div class="footer-top-PC">
            <!--左侧(Start)-->
            <div class="footer-top-icp-PC">
              <a v-if="ificpnum1" href="https://beian.miit.gov.cn/" target="_blank">互联网ICP备案：{{ SiteInfo.icpnum1
                }}</a>
              <span>
            <a v-if="ificpnum2" href="https://www.beian.gov.cn/"
               target="_blank">互联网公安备案：{{ SiteInfo.icpnum2 }}</a>
          </span>
              <span data-v-0f1600f3="">Copyright © {{ SiteInfo.footer_siteyear }}-2023 {{ SiteInfo.blogger }}</span>
            </div>
            <!--左侧(End)-->
          </div>
        </div>
      </a-col>
      <!--PE(End)-->

    </a-row>
  </a-layout-footer>
</template>

<script lang="ts" setup>
import { IconFaceSmileFill, IconGithub, IconQqCircleFill } from "@arco-design/web-vue/es/icon";
import api from "@/plugin/axios/api/common/siteinfo";
import { ref } from "vue";


const SiteInfo: any = ref({
  blogger: "",
  icpnum1: "",
  icpnum2: "",
  footer_siteyear: "",
  cardinfo_qq: "",
  cardinfo_github: "",
  cardinfo_afdian: ""
});
let ificpnum1 = ref(false);
let ificpnum2 = ref(false);

api.getSiteInfoApi().then(res => {
  /*网站信息*/
  SiteInfo.value = res.data.data[0];
  if (SiteInfo.value.icpnum1 != "") {
    ificpnum1.value = true;
  }
  if (SiteInfo.value.icpnum2 != "") {
    ificpnum2.value = true;
  }
});


</script>

<style scoped>
.Cafecho-valign {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
}


.footer-wrap-PC {
    background-color: #f2f2f2;
    padding: 0 8%;
}

.footer-top-PC {
    display: flex;
    justify-content: space-between;
    color: #000;
    padding: 40px 0;
}

.footer-top-icp-PC {
    display: flex;
    flex-direction: column;
    line-height: 2;
    color: #000;
}

.footer-top-icp-PC a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
}

.footer-top-contact-PC {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 50px;
    position: relative;
}

.footer-top-icon-PC {
    flex-grow: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.footer-top-icon-PC a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 31px;
    height: 31px;
    text-decoration: none;
    background: #5653534d;
    box-sizing: border-box;
    border-radius: 50%;
    box-shadow: 0 0 0 8px #e5e5e5;
    margin: 15px;
    transition: all 0.6s .3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.footer-top-icon-PC a:hover {
    transition: all .2s;
    transform: scale(0.8);
}

footer {
    margin-top: auto; /* 设置footer的上外边距为auto */
}
</style>