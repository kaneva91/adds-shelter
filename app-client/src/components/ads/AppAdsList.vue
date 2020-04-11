<template>
 <div> <div>allll addddsssss</div>
  <div>{{userAds}}</div></div>
</template>

<script>
import adsService from "../mixins/ads-service";

export default {
  data: function() {
    return {
      userAds: null,
    };
  },
  created() {
      adsService.methods.getAdds().then(resp => this.userAds=resp.data)
  }
};
</script>