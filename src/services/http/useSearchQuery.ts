import { QueryKey, useQuery } from '@tanstack/react-query'
import { searchApiV2 } from './httpClient'

const createSearchKey = (key: string): QueryKey => [key]

export const useSearchQuery = (searchArticle: string) => {
  const { isLoading, data, error, isFetching } = useQuery(
    createSearchKey(searchArticle),
    async () => await searchApiV2(searchArticle),
  )

  return {
    isFetching,
    isLoading,
    data,
    error,
  }
}
