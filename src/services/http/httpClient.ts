import axios from 'axios'
import { URI, API_KEY } from './variables'

export const useHttpClient = axios.create({
  baseURL: URI,
})

export const searchArticles = async (str: string, page: number) => {
  try {
    const { data } = await useHttpClient.get(
      `/search/${str}?page=${page}&pageSize=30&apiKey=${API_KEY}`,
    )
    return data
  } catch (err) {
    console.log(err)
  }
}

export const searchArticleById = async (id: string) => {
  try {
    const { data } = await useHttpClient.get(`/get/${id}?apiKey=${API_KEY}`)
    return data
  } catch (err) {
    console.log(err)
  }
}
