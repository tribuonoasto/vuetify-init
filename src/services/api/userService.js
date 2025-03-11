import axios from '../axios/index'

const baseUrl = import.meta.env.VITE_BASE_URL
export default {
    login(data) {
        return axios.post(baseUrl + "/user/login", data)
    },
    logout() {
        return axios.post(baseUrl + "/user/logout", )
    }
}
