import { QueryKey, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { article } from 'domain/entities'
import { searchArticleById } from 'services/http'

const createSearchKey = (key: string): QueryKey => ['article', key]
interface ArticleResponse {
  data: article | AxiosResponse | undefined
  isFetching: boolean
  isError: boolean
}

export const useArticleQuery = (id: string): ArticleResponse => {
  const { data, isFetching, isError } = useQuery(
    createSearchKey(id),
    async () => await searchArticleById(id),
  )

  if (data?.status !== 200) {
    return { data, isFetching, isError }
  }

  const { data: article } = data.data

  return { data: article, isFetching, isError }
}
