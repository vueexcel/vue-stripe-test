<template>
  <payment-component />
</template>

<script lang="ts">
import Vue from "vue";
import PaymentComponent from "../components/PaymentComponet.vue";

export default Vue.extend({
  name: "PaymentView",

  components: {
    PaymentComponent,
  },
});
</script>
