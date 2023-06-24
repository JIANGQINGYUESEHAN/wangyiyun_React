import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/request'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,

})

console.log(hyRequest);

export default hyRequest
