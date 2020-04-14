<template>
  <div class="main-wrapper">
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
   border : 1px solid black;
   padding: 30px 80px;;
 }
</style>