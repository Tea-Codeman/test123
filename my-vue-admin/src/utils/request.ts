import axios from 'axios'
import { ElMessage } from 'element-plus'

// 1. 创建实例
const service = axios.create({
  baseURL: '/api', // 所有的请求都会加上 /api 前缀
  timeout: 5000    // 超时时间 5 秒
})

// 2. 请求拦截器：在发请求前做些什么（比如在 Header 里带上 Token）
service.interceptors.request.use(
  (config) => {
    // 假设你有 Token，可以在这里添加
    // config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 3. 响应拦截器：拿到数据后统一处理错误码
service.interceptors.response.use(
  (response) => {
    const res = response.data
    // 如果后端返回的状态码不是 200，就报错
    if (res.code !== 200) {
      ElMessage.error(res.message || '系统出错')
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res
  },
  (error) => {
    ElMessage.error('网络请求失败，请检查网络')
    return Promise.reject(error)
  }
)

export default service