<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-toolbar-title class="ma-4">Payment App</v-toolbar-title>
      <v-list nav dense>
        <v-list-item-group active-class="text--accent-4">
          <router-link to="/">
            <v-list-item>
              <v-list-item-title>Home</v-list-item-title>
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

    <v-app-bar absolute dense app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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
