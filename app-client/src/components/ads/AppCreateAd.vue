<template>
  <form @submit.prevent="createAdHanler">
    <p>create app</p>
    <label>
      Title
      <input type="text" v-model="title" />
    </label>
    <label>
      ImageUrl
      <input type="text" v-model="imageUrl" />
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
import adsService from '../mixins/ads-service';
export default {
  data: function() {
    return {
      title: "",
      category : "OPTION 1",
      imageUrl: "",
      price: "",
      description: ""
    };
  },
  methods: {
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