import Vue from "vue"; // global view object
import VueResource from "vue-resource";
import VueRouter from "vue-router";

import App from "./App.vue";
import { routes } from "./routes";

// a cada modulo instalado deve realizar seu registro
Vue.use(VueResource);
Vue.use(VueRouter);

// view instance
new Vue({
  el: "#app",
  render: h => h(App),
  router: new VueRouter({ routes, mode: "history" })
});
