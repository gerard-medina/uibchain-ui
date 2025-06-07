import axios from 'axios'
import { useConnectionStore } from '@/store/connection'

const api = axios.create()

api.interceptors.request.use(config => {
  const store = useConnectionStore()
  if (!store.nodeUrl) throw new Error('No node URL configured')

  config.baseURL = store.nodeUrl
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`

  return config
})

export default api
