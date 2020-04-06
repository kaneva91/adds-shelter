<template>
  <form class="modal-content animate" @submit.prevent="loginHandler">
    <div class="imgcontainer"></div>

    <div class="container">
      <label for="email">
        <b :class="{'error-msg' : $v.email.$error}">
          Email
          <template v-if="$v.email.$error">
            <span v-if="!$v.email.required" class="error"> is required!</span>
          </template>
          </b>
      </label>
      <input type="text" placeholder="Enter Email" id="email" v-model="email"   @blur="$v.email.$touch"/>

      <label for="password">
         <b :class="{'error-msg' : $v.password.$error}">
           Password
          <template v-if="$v.password.$error">
            <span v-if="!$v.password.sameAs" class="error">is required!</span>
          </template>
          </b>
      </label>
      <input type="password" placeholder="Enter Password" id="password" v-model="password"   @blur="$v.password.$touch"/>

      <button :disabled="$v.$invalid">Login</button>
    </div>
  </form>
</template>


<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import {required} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  name: "AppLogin",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: { required },
    password: {required}
  },

  methods: {
    loginHandler() {
      console.log("Login");

      const email = this.email,
      password  = this.password;

       axios
        .post("http://localhost:9999/api/user/login", {
         
          email,
          password
        })
        .then((res) => console.log(res.data))
        .catch(() => console.log("Something went wrong"));
    
    }
  }
};
</script>


<style scoped>
@import url("../../shared/styles/Forms.css");
</style>