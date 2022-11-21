<template>
  <profile-component />
</template>

<script lang="ts">
import Vue from "vue";
import ProfileComponent from "../components/ProfileComponent.vue";

export default Vue.extend({
  name: "HomeView",

  components: {
    ProfileComponent,
  },
});
</script>
