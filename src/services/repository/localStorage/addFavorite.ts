import { article } from 'domain/entities'
import { saveDataLS } from './saveData'

export function addFavorite(article: article) {
  return saveDataLS([article])
}
