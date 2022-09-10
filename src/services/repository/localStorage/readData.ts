import { article } from 'domain/entities'

export function readDataLS(): article[] {
  const data = localStorage.getItem('favorite-articles')
  if (data !== null) {
    const dataParser = JSON.parse(data)
    return [...dataParser]
  }
  return []
}
