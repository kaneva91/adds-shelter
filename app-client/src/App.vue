<template>
  <div id="app">
   <app-nav></app-nav>
  </div>
</template>

<script>
import AppNav from './components/core/AppNav'

export default {
  name: 'App',
  components: {
    AppNav
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
