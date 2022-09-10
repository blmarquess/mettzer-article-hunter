import { QueryKey, useQuery } from '@tanstack/react-query'
import { article } from 'domain/entities/article'
import { searchArticles } from 'services/http'

const createSearchKey = (key: string): QueryKey => [key]

const initialData = { isFetching: false, data: [], totalRows: 0 }

export const useSearchQuery = (searchArticle: string) => {
  const { data, isFetching } = useQuery(
    createSearchKey(searchArticle),
    async () => await searchArticles(searchArticle),
  )

  if (searchArticle === '') {
    return initialData
  }

  const formattedData =
    data?.data.data.map(({ id, authors, title, description, fulltextUrls }: article) => ({
      id,
      title,
      authors,
      type: 'article',
      description,
      urls: fulltextUrls,
    })) ?? []

  const totalRows = data?.data.totalHits ?? 0

  const resultes = {
    isFetching,
    data: formattedData ?? [],
    totalRows: totalRows > 100 ? 100 : totalRows,
  }
  return resultes
}
