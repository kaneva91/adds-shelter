<template>
  <form @submit.prevent="createAdHanler">
    <h1>Create Advertisment...</h1>

    <div class="details">
      <label>
        Title:
        <input type="text" v-model="title" />
        <label>
          Category:
          <AppCategories @category="selectedCategoryHandler" />
        </label>
        <label>
          Image:
          <input type="file" @change="selectFileHandler($event)" />
        </label>
      </label>
      <label>
        Price:
        <input type="text" v-model="price" />
      </label>
        <label>
        Telephone: 
        <input type="text" v-model="telephone" />
      </label>
    </div>

    <div class="description">
      <label for="description">
        Description
        <textarea name id="description" cols="30" rows="10" v-model="description"></textarea>
      </label>
    </div>
    <button>Create Add</button>
  </form>
</template>

<script>
import axios from "axios";
import adsService from "../mixins/ads-service";
import AppCategories from "../shared/AppCategories";

export default {
  data: function() {
    return {
      title: "",
      category: "",
      file: null,
      imageUrl: "",
      price: "",
      telephone : '',
      description: ""
    };
  },
  components: {
    AppCategories
  },
  methods: {
    selectFileHandler(event) {
      this.file = event.target.files[0];
      let formData = new FormData();

      formData.append("file", this.file);
      formData.append("api_key", "");
      formData.append("upload_preset", "kl2kx2pt");

      axios
        .post(`https://api.cloudinary.com/v1_1/dfposmfqk/upload/`, formData)
        .then(result => {
          this.imageUrl = result.data.url;
        })
        .catch(err => {
          console.log(err);
        });
    },
    selectedCategoryHandler(e) {
      this.category = e;
    },

    createAdHanler() {
      const { title, category, imageUrl, price, telephone, description } = this.$data;
      adsService.methods
        .create(title, category, imageUrl, price, telephone, description)
        .then(() => {
          this.$router.push("/ads");
        });
    }
  }
};
</script>

<style scoped>
form {
  padding: 20px 300px;
}

.details, .description{

  margin: 10px;
  padding: 30px 100px; 
  border-radius: 5px;
  background-color: white;
}
label{
 display: block;
  width: 40px;
  font-weight: 700;
}
input, select, textarea{
  width : 300px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid white;
  margin: 5px;
  background-color: #D6D8DA;
    outline: none;
}

textarea{
  width: 600px;
  height: 200px;
}

button{
  width: 200px;
  height: 30px;
  margin: 0 auto;
  display: block;
}

</style>