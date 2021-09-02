import "@oruga-ui/oruga-next/dist/oruga-full.css";
import "@oruga-ui/oruga-next/src/scss/oruga-full-vars.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Oruga from "@oruga-ui/oruga-next";

createApp(App).use(Oruga).use(router).mount("#app");
