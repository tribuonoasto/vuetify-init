import axios from './axios'


export default {
    post(url, data = {}, header = {}, responseType = 'json') {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: url,
                data,
                responseType,
                headers: {
                    ...header
                },
                withCredentials: true
            })
                .then((res) => {
                    resolve(res.data)
                })
                .catch((error) => {
                    if (error.response) {
                        reject(error.response.data)
                    } else {
                        reject(error)
                    }
                })
        })
    },
    get(url, param = {}, header = {}, responseType = 'json') {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: url,
                param,
                responseType,
                headers: {
                    ...header
                },
                withCredentials: true
            })
                .then((res) => {
                    resolve(res.data)
                })
                .catch((error) => {
                    if (error.response) {
                        reject(error.response.data)
                    } else {
                        reject(error)
                    }
                })
        })
    }
}
