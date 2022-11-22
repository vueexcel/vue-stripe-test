<template>
  <v-layout align-center justify-center align-center class="mt-10">
    <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
            <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
            <v-form>
                <v-text-field
                    name="login"
                    label="Login"
                    type="email"
                    v-model="formData.email"
                ></v-text-field>
                <v-text-field
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="formData.password"
                ></v-text-field>
            </v-form>
            </v-card-text>
            <v-card-actions>
            <p>Don't have an account? <router-link to="/signup">Signup</router-link></p>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="logIn">Login</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
   </v-layout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LoginView",
  data: () => ({
   formData: {
    email: '',
    password: '',
   }
  }),
   methods:{
    async logIn(){
       if(this.formData.email.trim() && this.formData.password.trim()) {
         const data = {
           email: this.formData.email,
           password: this.formData.password
         }
        const userData = await this.$store.dispatch('loginUser', data);
        if(userData) {
          this.$router.push('/');
        }
       }
    }
  }
});
</script>
