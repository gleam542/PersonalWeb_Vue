import { createApp } from 'vue'
import App from './App.vue'
import ContactService from "./services/ContactService";

const app = createApp(App);
app.config.globalProperties.$contactService = ContactService;
app.mount('#app');