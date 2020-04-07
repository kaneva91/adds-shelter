<template>
  <section class="wrapper">
    Profile
    {{userData}}
    <button @click="deleteHandler">Delete</button>
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
      userId: authStore.user.id,
      userData: null
    };
  },
  created() {
    userService.methods
      .getProfileDetails(this.userId)
      .then(resp => (this.userData = resp.data));
  },
  methods: {
    deleteHandler() {
      userService.methods
        .deleteProfile(this.userId)
        .then(() => this.$router.push('/'));
    }
  }
};
</script>

<style scoped>
.wrapper{
  border : 1px solid black;
}
</style>