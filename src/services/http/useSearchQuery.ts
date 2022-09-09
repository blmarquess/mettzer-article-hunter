import { QueryKey, useQuery } from '@tanstack/react-query'
import { article } from 'domain/entities/article'
import { searchApiV2 } from './httpClient'

const createSearchKey = (key: string): QueryKey => [key]

interface responseApi {
  status: string
  totalHits: number
  data: article[]
}
const initialData = { isFetching: false, data: [], totalRows: 0 }

export const useSearchQuery = (searchArticle: string) => {
  const { data, isFetching } = useQuery<responseApi>(
    createSearchKey(searchArticle),
    async () => await searchApiV2(searchArticle),
    { staleTime: 0 },
  )

  if (searchArticle === '') {
    return initialData
  }

  const formatteddata =
    data?.data.map(({ id, authors, title, description, fulltextUrls }: article) => ({
      id,
      title,
      authors,
      type: 'article',
      description,
      urls: fulltextUrls,
    })) ?? []

  const totalRows = data?.totalHits ?? 0

  const resultes = {
    isFetching,
    data: formatteddata ?? [],
    totalRows,
  }
  return resultes
}
