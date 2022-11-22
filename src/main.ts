import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import { StripePlugin } from '@vue-stripe/vue-stripe';
const options = {
  pk: 'pk_test_51KTIuuSBg4NxaH6WKK6SQxDX82t0kZfzOIDLVrd0Yhhg2zoNoOXH6AzWjf215aM0vuOejcbb3Mcr7gBO0knxpcln00uCE4ZIZc',
};

Vue.use(StripePlugin, options);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
