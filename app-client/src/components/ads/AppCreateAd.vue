<template>
  <form @submit.prevent="createAdHanler">
    <p>create app</p>
    <label>
      Title
      <input type="text" v-model="title" />
    </label>
    <label>
      ImageUrl
      <input type="file" @change="selectFileHandler($event)" />
    </label>
    <label>
      Price
      <input type="text" v-model="price" />
    </label>
    <label>
      Description
      <textarea name id cols="30" rows="10" v-model="description"></textarea>
    </label>
    <button>Create Add</button>
  </form>
</template>

<script>
import axios from 'axios';
import adsService from '../mixins/ads-service';
export default {
  data: function() {
    return {
      title: "",
      category : "OPTION 1",
      file: null,
      imageUrl : '',
      price: "",
      description: ""
    };
  },
  methods: {
    selectFileHandler(event){
        this.file = event.target.files[0]
       let formData = new FormData();
 
    formData.append("file", this.file)
      formData.append("api_key",'');
    formData.append("upload_preset", 'kl2kx2pt');

    axios
    .post(`https://api.cloudinary.com/v1_1/dfposmfqk/upload/`, formData)
    .then((result) => {
        this.imageUrl=result.data.url;
    })
    .catch((err) => {
        console.log(err);
    })    
    },

    createAdHanler() {
      const{
        title,
        category,
        imageUrl,
        price,
        description
      } = this.$data;
      adsService.methods.create(title, category, imageUrl, price, description).then(res =>{
            console.log(res.data)
      })
    
    }
  }
};
</script>