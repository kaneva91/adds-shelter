<template>
  <form class="modal-content animate" @submit.prevent="registerHandler">
    <div class="imgcontainer">
      <img src="register_avatar.png" alt="Avatar" class="avatar" />
    </div>

    <div class="container">
      <label for="firstName">
        <b>First Name</b> 
      </label>
      <input type="text" placeholder="Enter First Name" id="firstName" v-model="firstName" />

      <label for="lastName">
        <b>Last Name</b>
      </label>
      <input type="text" placeholder="Enter Last Name" id="lastName" v-model="lastName" />
      <label for="email">
        <b>Email</b>
      </label>
      <input type="text" placeholder="Enter Email" id="email" v-model="email" />

      <label for="password">
        <b>Password</b>
      </label>
      <input type="password" placeholder="Enter Password" id="password" v-model="password" />

      <label for="rePassword">
        <b>Repeat Password</b>
      </label>
      <input type="password" placeholder="Repeat Password" name="rePassword" v-model="rePassword" />

      <button>Register</button>
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
export default {
  name: "AppRegister",
  data: function() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: ""
    };
  },
  methods: {
    registerHandler() {
    
      const firstName = this.firstName,
      lastName = this.lastName,
      email = this.email,
      password = this.password;
      console.log(firstName, lastName, email, password)

      axios
        .post("http://localhost:9999/api/user/register", {firstName, lastName, email, password})
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
  }
};
</script>


<style scoped>
@import url('../shared/styles/Forms.css');

</style>