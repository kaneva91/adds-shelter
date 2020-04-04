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
.search {
  border: 1px solid black;
  width: 50%;
  margin: 10px auto;
  padding: 20px;
  background: #111;
}

form{
  margin : 0 auto;
 font-size: 25px;
  display: flex;
  justify-content: center;
}

input{
  width: 300px;
}
select{
  width: 240px;
  margin-left: 50px;
   margin-right: 50px;
}

button {
  width: 90px;
  height: 35px;
}
</style>