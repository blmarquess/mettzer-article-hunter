import { readDataLS } from './readData'
import { saveDataLS } from './saveData'

export function removeFavorite(id: number) {
  const dbFavorite = readDataLS()
  const newDB = dbFavorite.filter((item) => Number(item.id) !== Number(id))
  return saveDataLS(newDB)
}
