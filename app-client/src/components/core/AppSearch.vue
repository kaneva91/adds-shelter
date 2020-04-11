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

      <button class="search-btn">Search</button>
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
  max-width: 80%;
  height: 40px;
  min-width: 500px;
  margin: 20px auto;
  padding: 10px 10px;
  background: #111;
}

form {
  margin: 0 auto;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
 
}

input[type="text"] {
  width: 60%;
  margin-left: 20px;
  margin-right: 10px;
}

select {
  margin-top: 7.5px;
  width: 20%;
}

input[type="text"],
select {
  height: 30px;
}

.search-btn {
  width: 100px;
  margin-right: 20px;
  margin-left: 10px;
  height: 30px;
}
</style>