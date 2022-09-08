/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios'

const URI = process.env.REACT_APP_ENDPOINT
const API_PARAMS = process.env.REACT_APP_API_PARAMS

export const useHttpClient = axios.create({
  baseURL: URI,
})

export async function searchApiV2(str: string) {
  const { data } = await useHttpClient.get(`/${str}${API_PARAMS}`)
  return data
}
