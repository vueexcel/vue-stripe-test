<template>
  <v-layout align-center justify-center align-center class="mt-10">
    <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
            <v-toolbar dark color="primary">
            <v-toolbar-title>Signup</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
            <v-form>
                <v-text-field
                    name="name"
                    label="Name"
                    type="text"
                    v-model="formData.name"
                ></v-text-field>
                <v-select
                :items="gender"
                label="Gender"
                v-model="formData.gender"
                ></v-select>
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="menu"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="formData.dob"
                        label="Date of birth"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="formData.dob"
                    no-title
                    scrollable
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="menu = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(menu)"
                    >
                        OK
                    </v-btn>
                    </v-date-picker>
                </v-menu>
                <v-text-field
                    v-model="formData.email"
                    id="email"
                    name="email"
                    label="Email"
                    type="text"
                ></v-text-field>
                <v-text-field
                    id="password"
                    v-model="formData.password"
                    name="password"
                    label="Password"
                    type="password"
                ></v-text-field>
                <v-text-field
                    id="confirm_password"
                    v-model="formData.confirm_password"
                    name="confirm_password"
                    label="Confrim Password"
                    type="password"
                ></v-text-field>
            </v-form>
            </v-card-text>
            <v-card-actions>
            <p>Already have an account? <router-link to="/login">Login</router-link></p>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="signup">Signup</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
   </v-layout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SignupView",
  data: () => ({
    menu: false,
   gender: ['Male', 'Female', 'Others'],
   formData: {
    name: '',
    gender: '',
    dob: '',
    email: '',
    password: '',
    confirm_password: ''
   }
  }),
  methods:{
    async signup(){
       if(this.formData.password.trim() === this.formData.confirm_password.trim()) {
         let data = {
           name : this.formData.name,
           gender: this.formData.gender,
           dob: this.formData.dob,
           email: this.formData.email,
           password: this.formData.password
         }
        const userData = await this.$store.dispatch('addNewUser', data)
        if(userData) {
          this.$router.push('/');
        }
       }
    }
  }
});
</script>
