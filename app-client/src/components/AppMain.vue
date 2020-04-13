<template>
  <div>Main {{ads}}</div>
</template>

<script>
import adService from "./mixins/ads-service";
export default {
  mixins: [adService],
  data: function() {
    return {
      ads: null
    };
  },
  created() {
    this.loadAllAds().then(resp => (this.ads = resp.data));
  }
};
</script>