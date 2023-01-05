import {createApp} from "vue";
import {createPinia} from "pinia";

import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import axios from "@/plugins/axiosInstance.js";

//import "./assets/main.css";
import "./assets/css/style.css";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd).mount("#app");
app.config.globalProperties.$axios = axios;
