import axiosInstance from './axiosInstance'

let isRefreshing = false

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config

    // Si es un 403 y no estamos ya refrescando
    if (error.response?.status === 403 && !isRefreshing) {
      isRefreshing = true
      try {
        // Llama al backend para renovar el token
        await axiosInstance.post('/users/refresh')

        isRefreshing = false
        // Reintenta la petición original con el nuevo access_token
        return axiosInstance(originalRequest)
      } catch (refreshError) {
        isRefreshing = false
        console.error('Error al refrescar token', refreshError)
        // Puedes hacer logout automático si falla
        window.location.href = '/login'
      }
    }

    return Promise.reject(error)
  }
)
