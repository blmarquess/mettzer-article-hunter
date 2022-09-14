import { QueryKey, useQuery } from '@tanstack/react-query'
import { article } from 'domain/entities'
import { useState } from 'react'
import { searchArticles } from 'services/http'

const createSearchKey = (key: string, page = 0): QueryKey => [key, page]

/**
 * @param {string} searchArticle term to be searched in the API
 * @param {number} pageSize number of articles per page per request
 * @returns {article[], isFetching, isError} return one array of articles from search in API in key 'data'.
 * 'isFetching' and 'isError' booleans to inform if has error or request in progress
 */
export const useSearchQuery = (searchArticle: string, pageSize: number) => {
  const [page, setPage] = useState(1)
  const { data, isFetching, isError } = useQuery(
    createSearchKey(searchArticle, page),
    async () => await searchArticles(searchArticle, page, pageSize),
  )
  const formattedData = data?.data
    ? data?.data.map(({ id, authors, title, description, fulltextUrls }: article) => ({
        id,
        title,
        authors,
        type: 'article',
        description,
        urls: fulltextUrls,
      }))
    : []
  const totalRows = data?.totalHits ?? 0
  const resultes = {
    isFetching,
    data: formattedData,
    totalRows,
    setPage,
    page,
    isError,
  }
  return resultes
}
