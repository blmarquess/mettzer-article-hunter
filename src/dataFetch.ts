/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios'

const URI = process.env.REACT_APP_ENDPOINT
const API_PARAMS = process.env.REACT_APP_API_PARAMS
const API_KEY = process.env.REACT_APP_API_KEY
export const useApi = axios.create({
  baseURL: URI,
})

export async function searchDataFromTerm(str: string) {
  const { data } = await useApi.get(`?q=${str}` ?? `Jupiter${API_PARAMS}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  })
  return data
}
