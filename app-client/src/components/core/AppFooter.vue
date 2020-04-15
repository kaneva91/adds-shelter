<template>
    <footer class="site-footer">
  <div class="upper-content">
    <div class="get-started">
      <h3>Get Started</h3>
      <a routerLink="/">Home</a>
      <a routerLink="/menu">Menu</a>
      <a routerLink="/user/login">Login</a>
      <a routerLink="/user/register">Register</a>
    </div>
    <div class="contacts">
      <h3>Contact us</h3>
      <p>Phone : +359 888 123 456</p>
      <p>Email: example@mail.com</p>
    </div>
    <div>
      <img src="logo.png"/>
    </div>
  </div>
  <div class="bottom-content">
    <p>
      Copyright © 2020 All Rights Reserved by Ads Shelter.
    </p>
  </div>
</footer> 
</template>


<script>
export default {
    
}
</script>

<style scooper>
    @import url('https://fonts.googleapis.com/css?family=Abel&display=swap');

 .site-footer{
	background: #002F34;
	font-family: Abel;
	padding: 0 100px;
	padding-top: 20px;
	color: white
}

h3{
	margin: 0;
}

img{
	width: 150px;
}

.upper-content{
	display: flex;
	justify-content: space-between;
}

.get-started a{
	display: block;
	margin-top: 10px;

}
.contacts{
	padding-left : 6 0px;
}
.bottom-content{
	border-top: 1px solid white;
	text-align: center;
} a:visited{
	color: white;
	
}
a{
	text-decoration: none;
}
</style>