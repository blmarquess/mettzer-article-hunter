import { readDataLS } from './readData'
import { saveDataLS } from './saveData'

export function removeFavorite(id: number) {
  const dbFavorite = readDataLS()
  const newDB = dbFavorite.filter((item) => item.id !== id)
  return saveDataLS(newDB)
}
