import axios from 'axios'

// Default url to fetch to
export default axios.create({
  baseURL: 'https://trackapi.nutritionix.com/v2/search/instant',
  headers: {
    "x-app-id": "03f178a1",
    "x-app-key": "7b9393e1f1aa285fe2a0ac904110c620"
  }
})
