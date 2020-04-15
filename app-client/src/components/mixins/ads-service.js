import axios from 'axios';
import authStore from '../store/auth';
const mainUrl = 'http://localhost:9999/api/ads';

const adService = {
  methods: {
    create(title, category, imageUrl, price, description) {
      console.log(authStore.user._id)
      return axios
        .post(`${mainUrl}/create/${authStore.user._id}`, {
          title,
          price,
          category,
          imageUrl,
          description
        })
    },
    deleteAd(adId){
      return axios.post(`${mainUrl}/delete/${authStore.user._id}`, { adId })
    },
    getAdds() {
      return axios
        .get(`${mainUrl}/${authStore.user._id}`)

    },
    loadAllAds() {
      return axios
        .get(`${mainUrl}`)
    },
    addToFavourites(adId) {
      return axios.post(`${mainUrl}/favourites/${authStore.user._id}`, { adId })
    },
    getFavourites(){
        return axios.get(`${mainUrl}/favourites/${authStore.user._id}`)
    },
   //detete from favourites
    search(title, category) {
      return axios.post(`${mainUrl}/search`, {title, category})
    }
  }
}

export default adService;