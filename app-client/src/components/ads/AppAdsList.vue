<template>
  <div class="user-ads-wrapper">
    <h1>My Ads</h1>
    <app-ad-card v-for="(ad, z) in userAds" :key="z" :ad="ad"></app-ad-card>
  </div>
</template>

<script>
import adsService from "../mixins/ads-service";
import AppAdCard from './AppAdCard';

export default {
  data: function() {
    return {
      userAds: null
    };
  },
  created() {
    adsService.methods.getAdds().then(resp => (this.userAds = resp.data.reverse()));
  },
  components : {
    AppAdCard
  }
};
</script>

<style scoped>
.user-ads-wrapper{
  padding: 30px 180px;
}
</style>
