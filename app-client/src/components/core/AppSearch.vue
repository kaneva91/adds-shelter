<template>
  <section class="search">
      <form @submit.prevent="searchHandler">
    <input type="text" />
    
    <select>
      <option value="null" selected>Category...</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <button>Search</button>
  </form>
  </section>
</template>

<script>
export default {
  methods: {
    searchHandler() {
      console.log("search");
    }
  }
};
</script>
  
<style scoped>

  .search{
        border: 1px solid  black;
        width: 80%;
        margin: 10px auto;
        height: 100px;
        padding: 10px;
    }
</style>