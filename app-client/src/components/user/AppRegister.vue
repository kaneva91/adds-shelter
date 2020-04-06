<template>
  <form class="modal-content animate" @submit.prevent="registerHandler">
    <div class="imgcontainer">
      <img src="register_avatar.png" alt="Avatar" class="avatar" />
    </div>

    <div class="container">
      <label for="firstName">
        <b :class="{'error-msg' : $v.firstName.$error}">
          First Name
          <template v-if="$v.firstName.$error">
            <span v-if="!$v.firstName.required" class="error">is required!</span>
          </template>
        </b>
      </label>
      <input
        type="text"
        placeholder="Enter First Name"
        id="firstName"
        v-model="firstName"
        @blur="$v.firstName.$touch"
      />

      <label for="lastName">
        <b :class="{'error-msg' : $v.lastName.$error}">
          Last Name
          <template v-if="$v.lastName.$error">
            <span v-if="!$v.lastName.required">is required!</span>
          </template>
        </b>
      </label>
      <input
        type="text"
        placeholder="Enter Last Name"
        id="lastName"
        v-model="lastName"
        @blur="$v.lastName.$touch"
      />

      <label for="email">
        <b :class="{'error-msg' : $v.email.$error}">
          Email
          <template v-if="$v.email.$error">
            <span v-if="!$v.email.required">is required!</span>
            <span v-else-if="!$v.email.emailPattern">is invalid!</span>
          </template>
        </b>
      </label>
      <input
        type="text"
        placeholder="Enter Email"
        id="email"
        v-model="email"
        @blur="$v.email.$touch"
      />

      <label for="password">
        <b :class="{'error-msg' : $v.password.$error}">
          Password
          <template v-if="$v.password.$error">
            <span v-if="!$v.password.required" class="error">is required!</span>
            <span v-else-if="!$v.password.minLength" class="error">must be at least 6 symbols!</span>
            <span v-else class="error">'s max length is 20 symbols!</span>
          </template>
        </b>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        id="password"
        v-model="password"
        @blur="$v.password.$touch"
      />

      <label for="rePassword">
        <b :class="{'error-msg' : $v.rePassword.$error}">Repeat Password
           <template v-if="$v.rePassword.$error">
            <span v-if="!$v.rePassword.sameAs" class="error">don't match!</span>
           </template>
        </b>
      </label>
      <input
        type="password"
        placeholder="Repeat Password"
        name="rePassword"
        v-model="rePassword"
        @blur="$v.rePassword.$touch"
      />

      <button :disabled="$v.$invalid">Register</button>
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <span class="psw">
        Forgot
        <a href="#">password?</a>
      </span>
    </div>
  </form>
</template>


<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  sameAs,
  helpers
} from "vuelidate/lib/validators";

const emailPattern = helpers.regex(
  "emailPattern",
  /^([a-zA-Z0-9._]+)@([a-z0-9]{3,}).(com|bg)$/
);
export default {
  name: "AppRegister",
  mixins: [validationMixin],
  data: function() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: ""
    };
  },
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
    email: {
      required,
      emailPattern
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20)
    },
    rePassword: {
      sameAs: sameAs("password")
    }
  },

  methods: {
    registerHandler() {
      const firstName = this.firstName,
        lastName = this.lastName,
        email = this.email,
        password = this.password;
      console.log(firstName, lastName, email, password);

      axios
        .post("http://localhost:9999/api/user/register", {
          firstName,
          lastName,
          email,
          password
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
  }
};
</script>


<style scoped>
@import url("../../shared/styles/Forms.css");
</style>