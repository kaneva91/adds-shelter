<template>
  <section class="search">
    <form @submit.prevent="searchHandler">
      <input class="search-input" type="text" placeholder="Search..." />

      <select>
        <option value="null" selected>Category...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </select>

      <!-- <button class="search-btn">Search  >></button> -->
      <button class="search-btn">
        <span>Search</span>
      </button>
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
  padding-top: 9px;
  margin: 0 10px;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
}

.search-input,
select,
.search-btn {
  height: 25px;
  width: 25%;
  font-size: 16px;
  outline: none;
}

.search-input,
select {
  background: #111;
  border: none;
  border-bottom: 1px solid white;
  color: gray;
  padding-left: 15px;
}

.search-btn {
  line-height: 20px;
  background-color: black;
  border: 1px solid white;
  line-height: 20px;
  padding: 0;

  border-radius: 5px;
  transition: 0.5s;
  height: 40px;
  width: 20%;
  color: white;
  margin-top: -9px;
  transition: all 0.5s;
  cursor: pointer;
}

.search-btn:active {
  transform: translateY(4px);
  color: black;
  background-color: white;
}

.search-btn span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.search-btn span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.search-btn:hover span {
  padding-right: 25px;
}

.search-btn:hover span:after {
  opacity: 1;
  right: 0;
}
</style>