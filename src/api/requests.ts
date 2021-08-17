import { AxiosRequestConfig } from 'axios'
import { apiClient } from './client'

export const get = async <ResponseData>(
  url: string,
  config?: AxiosRequestConfig
): Promise<ResponseData> => {
  try {
    const { data } = await apiClient.get<ResponseData>(url, config)
    return data
  } catch (err) {
    throw Error(err.message)
  }
}

export const post = async <Payload, ResponseData>(
  url: string,
  body: Payload,
  config?: AxiosRequestConfig
): Promise<ResponseData> => {
  try {
    const { data } = await apiClient.post<ResponseData>(url, body, config)
    return data
  } catch (err) {
    throw Error(err.message)
  }
}

export const put = async <Payload, ResponseData>(
  url: string,
  body: Payload,
  config?: AxiosRequestConfig
): Promise<ResponseData> => {
  try {
    const { data } = await apiClient.put<ResponseData>(url, body, config)
    return data
  } catch (err) {
    throw Error(err.message)
  }
}
