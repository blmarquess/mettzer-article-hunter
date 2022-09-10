import { readDataLS } from './readData'

export function checkFavorite(id: number) {
  const dbFavorite = readDataLS()
  const hasArticle = dbFavorite.some((item) => item.id === id)
  return hasArticle
}
