<template>
  <v-container>
    <v-list>
      <v-list-item-group>
        <template v-for="(item, index) in Object.keys(user)">
          <v-list-item :key="item">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item" class="text--primary text-capitalize"></v-list-item-title>

                <!-- <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.headline"
                ></v-list-item-subtitle> -->

                <!-- <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle> -->
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="user[item]"></v-list-item-action-text>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index < Object.keys(user).length - 1"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProfileComponent",

  data: () => ({
  
  }),
  computed: {
    user(){
      return this.$store.getters.getUserDetails;
    }
  }
});
</script>

<style scoped>
 .text-capitalize {
  text-transform: capitalize;
 }
</style>
