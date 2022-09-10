import { article } from 'domain/entities'

export function saveDataLS(data: article[]) {
  localStorage.setItem('favorite-articles', JSON.stringify(data))
}
