import axios from 'axios'

const axiosApi = axios.request({
    baseURL:"http://localhost:3000"
})

export default axiosApi