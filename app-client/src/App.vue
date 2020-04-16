<template>
  <div id="app">
   <app-nav></app-nav>

      <router-view></router-view>
      <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from './components/core/AppNav';

import AppFooter from './components/core/AppFooter';

export default {
  name: 'App',
  components: {
    AppNav,
  
    AppFooter
    
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
}

#app{
  background-color:rgb(214, 216, 218)
}
</style>
