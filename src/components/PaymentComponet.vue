<template>
  <v-container>
    <v-card
    class="mx-auto pa-4"
    max-width="500"
  >
      <label class="mb-1">Card Number</label>
      <div id="card-number"></div>
      <label class="mb-1" for="cardHolderName">Card Holder Name</label><br/>
      <input type="text" id="cardHolderName" v-model="cardHolderName" @blur="checkHolderName" placeholder="Card Holder Name"><br/>
      <label class="mt-2 mb-1">Card Expiry</label>
      <div id="card-expiry"></div>
      <label class="mt-4 mb-1">Card CVC</label>
      <div id="card-cvc"></div>
      <div id="card-error"></div>
      <v-btn
        class="my-2"
        id="custom-button"
        outlined
        color="primary"
        @click="createToken"
      >
        Generate Token
      </v-btn>
    </v-card>
  </v-container>
</template>

<script lang="ts">
// @ts-nocheck
import Vue from "vue";
import { StripeElementCard } from '@vue-stripe/vue-stripe';
export default Vue.extend({
  name: "PaymentComponent",
  data: () => ({
    token: null,
    cardNumber: null,
    cardHolderName: '',
    cardExpiry: null,
    cardCvc: null,
  }),
  components: {
    StripeElementCard,
  },
  computed: {
    stripeElements () {
      // @ts-ignore
      return this.$stripe.elements();
    },
  },
  mounted () {
    const style = {
      base: {
        color: 'black',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '14px',
        paddingTop: '10px',
        marginBottom: '10px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    };
    this.cardNumber = this.stripeElements.create('cardNumber', { style, showIcon: true });
    this.cardNumber.mount('#card-number');
    this.cardExpiry = this.stripeElements.create('cardExpiry', { style });
    this.cardExpiry.mount('#card-expiry');
    this.cardCvc = this.stripeElements.create('cardCvc', { style });
    this.cardCvc.mount('#card-cvc');
  },
  beforeDestroy () {
    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  },
  methods: {
    async createToken () {
      const { token, error } = await this.$stripe.createToken(this.cardNumber);
      if (error) {
        // handle error here
        document.getElementById('card-error').innerHTML = error.message;
        return;
      }
      console.log(token);
      // handle the token
      // send it to your server
    },
    checkHolderName() {
      if(!this.cardHolderName.trim()) {
        this.cardHolderName = ''
        document.getElementById('card-error').innerHTML = "Card holder name is required";
      } else {
        document.getElementById('card-error').innerHTML = '';
      }
    }
  }
});
</script>
<style scoped>
label {
  font-size: 12px;
}
input {
  outline: none;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  
}
input::placeholder{
  color: '#aab7c4' !important;
  opacity: 0.6;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
}
#card-error {
  color: red;
}
</style>
