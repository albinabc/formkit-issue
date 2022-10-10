import './style.css'
import { plugin } from "@formkit/vue";
import { createApp } from "vue";
import { formKitConfig } from "./formkit/formkit-config";
import { i18n } from './translations/i18n';
import App  from './App.vue';

function main() {
  const app = createApp(App);

  app.use(plugin, formKitConfig());
  app.use(i18n);

  app.mount('#app');
}
main()
