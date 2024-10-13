import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import router from "./router"; // Import the router
import store from "./store"; // Import the Vuex store
import "./assets/tailwind.css";

const app = createApp(App);
app.use(Antd);
app.use(router);
app.use(store);
app.mount("#app");
