<template>
  <section class="wrapper">
    <h1> Profile Detals </h1>
    <div class='delete-btn-wrapper'>
        <button class="delete" @click="deleteHandler">Delete Profile</button>
    </div>
    <form>
      <label for="firstName">
        First Name 
        <input :value="userData.firstName" type="text"/>
      </label>
          <label for="firstName">
        Last Name 
        <input :value="userData.lastName" type="text"/>
      </label>

        <label for="firstName">
        First Name 
        <input :value="userData.email" type="text"/>
            </label>
    </form> 
  </section>
</template>

<script>
import authStore from "../store/auth";
import userService from "../mixins/user-service";

export default {
  name: "AppProfile",
  mixins: [userService],
  data: function() {
    return {
      userId: authStore.user._id ,
      userData: null
    };
  },
  created() {
    console.log(this.userId)
    userService.methods
      .getProfileDetails(this.userId)
      .then(resp => (this.userData = resp.data));
  },
  methods: {
    deleteHandler() {
      userService.methods
        .deleteProfile(this.userId)
        .then(() => {
          authStore.clearUser()
          this.$router.push('/')});

    }
  }
};
</script>

<style scoped>
.wrapper{
  border : 1px solid black;
  max-width: 70%;
  margin: 0 auto;
   transition: 1s;
    left: 0;
}

.delete-btn-wrapper{
  border: 1px solid black;
}

.delete{
  background-color: red;
}


input[type=text] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

</style>