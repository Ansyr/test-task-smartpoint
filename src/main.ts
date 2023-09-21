import { createApp } from 'vue'

import "bootstrap/dist/css/bootstrap.css";
import App from "@/app/App.vue"

const app = createApp(App)



app
    .use(store)
    .mount('#app')
import "bootstrap/dist/js/bootstrap.js";
import store from "@/app/providers/store.ts";

