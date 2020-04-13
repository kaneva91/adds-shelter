import axios from 'axios';
import authStore from '../store/auth';
const mainUrl = 'http://localhost:9999/api/ads';

const adService = {
  methods: {
    create(title, category, imageUrl, price, description) {
      console.log( authStore.user._id)
      return axios
        .post(`${mainUrl}/create/${ authStore.user._id}`, {
          title,
          price,
          category,
          imageUrl,
          description
        })
    },

    getAdds(){
        return axios
        .get(`${ mainUrl }/${ authStore.user._id}`)

    },
    loadAllAds(){
      return axios
      .get(`${mainUrl}`)
    }

}
 
}

export default adService;