import axios from 'axios'
import errorHandler from './interceptors/error-handler'

const instance = axios.create({})

errorHandler(instance)

export default instance
