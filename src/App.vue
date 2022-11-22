<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app v-if="isLoggedIn">
      <v-toolbar-title class="ma-4">Payment App</v-toolbar-title>
      <v-list nav dense>
        <v-list-item-group active-class="text--accent-4">
          <router-link to="/">
            <v-list-item>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/payment">
            <v-list-item>
              <v-list-item-title>Payment</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar absolute dense app v-if="isLoggedIn">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{currentPage === 'home' ? 'Profile' : 'Payment'}} Page</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    drawer: true,
    // group: null,
  }),
  computed: {
    currentPage() {
      return this.$route.name;
    },
    isLoggedIn() {
      return (this.$route.name === 'home') || this.$route.name === 'payment';
    }
  }
  // watch: {
  //   group() {
  //     this.drawer = false;
  //   },
  // },
});
</script>
<style>
a {
  text-decoration: none;
}
</style>
