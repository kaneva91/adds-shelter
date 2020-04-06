<template>
  <div id="app">
   <app-nav></app-nav>
    <div>
     <a href="#">Login</a> |
       <a href="#">Login</a>
   </div>
   <app-search></app-search>
  
      <router-view></router-view>
  </div>
</template>

<script>
import AppNav from './components/core/AppNav';
import AppSearch from './components/core/AppSearch'

export default {
  name: 'App',
  components: {
    AppNav,
    AppSearch,
    
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
}
</style>
