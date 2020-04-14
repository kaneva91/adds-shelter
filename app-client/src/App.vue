<template>
  <div id="app">
   <app-nav></app-nav>
   <app-search></app-search>
  
      <router-view></router-view>

      <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from './components/core/AppNav';
import AppSearch from './components/core/AppSearch'
import AppFooter from './components/core/AppFooter';

export default {
  name: 'App',
  components: {
    AppNav,
    AppSearch,
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
