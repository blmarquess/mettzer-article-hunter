export const useArticleQuery = (id: string) => {
  // return useQuery(['article', id], () => getArticle(id))
  return { data: [], isFetching: false }
}
