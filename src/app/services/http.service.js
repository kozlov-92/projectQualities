import axios from 'axios'
import logger from './log.servise'
import { toast } from 'react-toastify'
import config from '../config.json'

axios.defaults.baseURL = config.apiEndPoint

axios.interceptors.response.use(
  (res) => res,
  function (error) {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500
    if (!expectedError) {
      toast.error('Возникла ошибка, попробуйте позже!')
      console.log('Unexpected Errors - не ожидаемые ошибки')
      logger.log()
    }
    return Promise.reject(error)
  }
)

const httpServices = {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
}

export default httpServices
