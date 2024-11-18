// httpClient.ts
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios'

// 获取token的函数
function getToken(): string | null {
  return sessionStorage.getItem('token')
}

// 创建axios实例
const httpClient: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 6000,
  withCredentials: true,
})

// 请求拦截器
httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken()
    if (token) {
      config.headers['token'] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
httpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default httpClient
