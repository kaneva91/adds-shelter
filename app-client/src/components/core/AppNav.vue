<template>
  <nav>
    <div class="sidenav" :style="{width : sideWidth}">
      <a href="#" class="closebtn" @click="closeNav">&times;</a>
      <a href="#">Profile Details</a>
      <a href="#">My Adds</a>
      <a href="#">Chats</a>
      <a href="#">About Us</a>
    </div>

    <div class="main-nav">
      <span>
        <a @click="openNav" href="#">
          <img src="user.png" /> Profile
        </a>
        <a href="#">
          <img src="plus.png" /> New Add
        </a>
      </span>
      <span>
        <img src="/logo.png" alt />
      </span>
      <span>
       <router-link to="/about" > <img src="about.png" /> About Us</router-link>
        <router-link to="/contacts">
          <img src="phone.png" /> Contacts
        </router-link>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    return { sideWidth: "0px" };
  },
  methods: {
    openNav() {
      this.sideWidth = "250px";
    },
    closeNav() {
      this.sideWidth = "0px";
    }
  }
};
</script>

<style  scoped>
 a img {
 width: 22px;
}
nav {
  background: #165bb4;
  height: 70px;
}

span {
  font-size: 25px;
  cursor: pointer;
  height: 70px;
}

a {
  text-decoration: none;
  line-height: 70px;
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
  padding: 24px 5px;
  color: white;
  font-size: 23px;
}

.main-nav a:hover {
  background: rgb(50, 107, 182);
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