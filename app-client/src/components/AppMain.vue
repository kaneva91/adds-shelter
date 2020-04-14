<template>
  <div class="main-wrapper">
    <h1>Last added advertisements...</h1>
   <app-ad-card v-for="(ad, z) in ads" :key="z" :ad="ad"></app-ad-card>

  </div>
</template>

<script>
import adService from "./mixins/ads-service";
import AppAdCard from './ads/AppAdCard';
export default {
  mixins: [adService],
  data: function() {
    return {
      ads: null
    };
  },
  created() {
    this.loadAllAds().then(resp => (this.ads = resp.data));
  },
  components : {
    AppAdCard
  }
};
</script>

<style scoped>
 .main-wrapper{
   padding: 30px 180px;;
 }
</style>