import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 177f651138a48ff217c429839f179e47343a2cdc60796d06257b7ec4891958b1'
      }
})