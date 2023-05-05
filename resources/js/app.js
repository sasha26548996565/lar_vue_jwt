import { createApp } from 'vue';
import App from './AppComponent.vue';
import router from './router/index.js';
import axios from 'axios';
import './bootstrap';

const app = createApp(App);

app.use(router);
app.config.globalProperties.axios = axios;
app.mount('#app');

