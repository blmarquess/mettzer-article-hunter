import axios from 'axios'

const URI = process.env.REACT_APP_ENDPOINT
const API_PARAMS = process.env.REACT_APP_API_PARAMS as string
const API_KEY = process.env.REACT_APP_API_KEY as string

export const useHttpClient = axios.create({
  baseURL: URI,
})

export const searchArticles = async (str: string) =>
  await useHttpClient.get(`/search/${str}${API_PARAMS}${API_KEY}`)

export const searchArticleById = async (id: string) =>
  await useHttpClient.get(`/get/${id}${API_PARAMS}${API_KEY}`)
