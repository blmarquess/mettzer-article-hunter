import { QueryKey, useQuery } from '@tanstack/react-query'
// import { AxiosResponse } from 'axios'
// import { article } from 'domain/entities'
import { searchArticleById } from 'services/http'

const createSearchKey = (key: string): QueryKey => ['article', key]

/**
 * @param {string} coreID  of core article id API ()
 * @returns { data, isFetching, isError } return the article for coreID params.
 * 'isFetching' and 'isError' are booleans to inform if has error or request in progress
 */
export const useArticleQuery = (coreID: string) => {
  const { data, isFetching, isError } = useQuery(
    createSearchKey(coreID),
    async () => await searchArticleById(coreID),
  )
  if (data?.status !== 'OK') {
    return { data, isFetching, isError }
  }
  const { data: article } = data
  return { data: article, isFetching, isError }
}
