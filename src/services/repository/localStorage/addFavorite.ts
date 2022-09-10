import { article } from 'domain/entities'
import { readDataLS } from './readData'
import { saveDataLS } from './saveData'

export function addFavorite(article: article) {
  const db = readDataLS()
  return saveDataLS([...db, article])
}
