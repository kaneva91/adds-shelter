
import axios from 'axios';
const mainUrl = 'http://localhost:9999/api/user'

const userService = {
  methods: {
    register(firstName, lastName, email, password) {
      return axios
        .post(`${mainUrl}/register`, {
          firstName,
          lastName,
          email,
          password
        })
    },

    login(email, password) {
      return axios
        .post(`${mainUrl}/login`, {
          email,
          password
        })
    },

    logout() {
      return axios.post(`${mainUrl}/logout`)
    },

    getProfileDetails(id){
      return axios.get(`${mainUrl}/${id}`)
    },
    deleteProfile(id){
      console.log('delete')
      return axios.delete(`${mainUrl}/${id}`)
    }
  }
 
}

export default userService;