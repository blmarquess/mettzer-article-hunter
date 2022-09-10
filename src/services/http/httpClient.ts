import axios from 'axios'

const URI = process.env.REACT_APP_ENDPOINT
const API_PARAMS = process.env.REACT_APP_API_PARAMS as string

export const useHttpClient = axios.create({
  baseURL: URI,
})

export const searchArticles = async (str: string) => await useHttpClient.get(`/${str}${API_PARAMS}`)

export const searchArticleById = async (id: string) =>
  await useHttpClient.get(`/get/${id}${API_PARAMS}`)
