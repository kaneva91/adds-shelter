<template>
  <nav>
    <div class="sidenav" :style="{width : sideWidth}">
      <a href="#" class="closebtn" @click="closeNav">&times;</a>
      <template v-if="user">
        <router-link to="/profile">Profile Details</router-link>
        <router-link to="/ads">My Ads</router-link>
        <router-link to="/chats">Chats</router-link>
        <a @click="logoutHandler">Logout</a>
      </template>
      <template v-else>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </template>
      <router-link to="/about">About Us</router-link>
    </div>

    <div class="main-nav">
      <span>
        <a @click="openNav" href="#">
          <img src="/user.png" /> Profile
        </a>
        <router-link to="/ads/create">
          <img src="/plus.png" /> New Ad
        </router-link>
      </span>
      <span>
        <img class="logo" src="/logo.png" alt="Logo" />
      </span>
      <span>
        <template v-if="!user">
          <router-link to="/login">Login</router-link>
          <router-link to="/register">Register</router-link>
        </template>
        <template v-else>
          <a @click="logoutHandler">Logout</a>
        </template>
      </span>
    </div>
  </nav>
</template>

<script>
import authStore from "../store/auth";
import userService from "../mixins/user-service";

export default {
  mixins: [userService],
  data: function() {
    return { sideWidth: "0px" };
  },
  computed: {
    user() {
      return !!authStore.user;
    }
  },
  methods: {
    openNav() {
      this.sideWidth = "250px";
    },
    closeNav() {
      this.sideWidth = "0px";
    },
    logoutHandler() {
      this.logout().then(() => {
        authStore.clearUser();
       this.$router.push("/about");
      });
    }
  }
};
</script>

<style  scoped>
a img {
  width: 20px;
}

.logo {
  height: 55px;
}

nav {
  background: #002F34;
  height: 55px;
  min-width: 600px;
}

span {
  font-size: 25px;
  cursor: pointer;
  height: 55px;
}

a {
  text-decoration: none;
  line-height: 50px;
}

a:visited {
  color: black;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.main-nav {
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.42);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.42);
  display: flex;
  justify-content: space-between;
}

.main-nav a {
  margin: 10px;
  padding: 18px 5px;
  color: white;
  font-size: 20px;
}

.main-nav a:hover {
  background: rgb(0, 66, 73)
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>