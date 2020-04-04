<template>
  <nav>
    <div id="mySidenav" class="sidenav" :style="{width : width}">
      <a href="#" class="closebtn" @click="closeNav">&times;</a>
      <a href="#">Profile Details</a>
      <a href="#">My Adds</a>
      <a href="#">Chats</a>
      <a href="#">About</a>
    </div>
    <span @click="openNav">&#9776; Profile</span>
    <span>
      <a href="#">New Add</a>
    </span>
    <span>
      <a href="#">About</a>
    </span>
    <span>
      <a href="#">Contacts</a>
    </span>
  </nav>
</template>

<script>
export default {
  data: function() {
    return { width: "0px" };
  },
  methods: {
    openNav() {
      this.width = "250px";
    },
    closeNav() {
      this.width = "0px";
    }
  }
};
</script>

<style  scoped>
nav {
  border: 1px solid black;
  background: #2c73d2;
}

span {
  font-size: 30px;
  cursor: pointer;
}

a{
      text-decoration: none;
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