<template>
    <form class="modal-content animate" @submit.prevent="loginHandler" >
    <div class="imgcontainer">
    
    </div>

    <div class="container">
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" id="email" v-model="email">

      <label for="password"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" id="password" v-model="password">
        
      <button >Login</button>
    </div>

  </form>
</template>


<script>
export default {
    name : 'AppLogin',
    data : function(){
      return{
        email : '',
        password : ''
      }
    },
    methods :  {
      loginHandler(){
        console.log('Login')
      }
    }
}
</script>


<style scoped>
@import url('../shared/styles/Forms.css');

</style>