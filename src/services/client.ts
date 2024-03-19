import axios, { AxiosRequestConfig } from "axios"

const clients = (options: Readonly<AxiosRequestConfig> = {}) => {
  return axios.create(options)
}

const baseURL = import.meta.env.VITE_PUBLIC_API_URL

const client = clients({
  baseURL,
  withCredentials: false,
  timeout: typeof window === "undefined" ? 5000 : undefined,
})

export { client }
