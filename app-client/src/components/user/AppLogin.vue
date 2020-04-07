<template>
  <form class="modal-content animate" @submit.prevent="loginHandler">
    <div class="imgcontainer">
      <img src="login_avatar.png" alt="Avatar" class="avatar" />
    </div>

    <div class="container">
      <label for="email">
        <b :class="{'error-msg' : $v.email.$error}">
          Email
          <template v-if="$v.email.$error">
            <span v-if="!$v.email.required" class="error">is required!</span>
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
            <span v-if="!$v.password.sameAs" class="error">is required!</span>
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
         <button :disabled="$v.$invalid">Login</button>
      <div class="container">
        <span class="psw">
         Don't have an account yet? Go to
          <router-link to="/register">Register</router-link>.
        </span>
      </div>
    </div>
 
  </form>
</template>


<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import userService from "../mixins/user-service";
import authStore from "../store/auth";

export default {
  mixins: [validationMixin, userService],
  name: "AppLogin",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: { required },
    password: { required }
  },

  methods: {
    loginHandler() {
      const email = this.email,
        password = this.password;
      userService.methods.login(email, password).then(res => {
        authStore.setUser(res.data);
        this.$router.push("/");
      });
    }
  }
};
</script>


<style scoped>
@import url("../../shared/styles/Forms.css");
</style>