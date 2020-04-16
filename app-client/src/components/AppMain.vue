<template>
  <div class="main-wrapper">
    <app-search @searchEmit="searchHandler"></app-search>
    <h1>{{heading}}</h1>
    <template v-if="ifSearch">
      <button @click="goToHomeHandler">Go back to home</button>
    </template>
    <template v-if="ads">
      <app-ad-card v-for="(ad, z) in ads" :key="z" :ad="ad"></app-ad-card>
    </template>
    <template v-else-if="!ads || ads.lenght === 0">
      <p class="no-results"> results found </p>
    </template>
  </div>
</template>

<script>
import adService from "./mixins/ads-service";
import AppAdCard from "./ads/AppAdCard";
import AppSearch from "./core/AppSearch";
export default {
  mixins: [adService],
  data: function() {
    return {
      heading: "Last added advertisements...",
      ads: [],
      ifSearch: false
    };
  },
  created() {
    this.loadAllAds().then(resp => (this.ads = resp.data.reverse()));
  },
  methods: {
    searchHandler(result) {
      this.heading = "Search results ...";
      this.ads = result;
      this.ifSearch = true;
      console.log(this.ads)
    },
    goToHomeHandler() {
      this.loadAllAds().then(resp => {
        this.ads = resp.data.reverse();
        this.ifSearch = false;
      });
    }
  },
  components: {
    AppAdCard,
    AppSearch
  }
};
</script>

<style scoped>
.main-wrapper {
  padding: 30px 180px;
}

button{
 width : 300px;
 height: 40px;
  display: block;
  margin : 0 auto;
  font-size: 20px;
}

.no-results{
  margin-bottom: 300px;
}
</style>