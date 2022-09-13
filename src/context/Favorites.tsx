import { article } from 'domain/entities'
import { createContext, PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { readDataLS, saveDataLS } from 'services/repository/localStorage'

export interface FavoritesContextType {
  favorites: article[]
  hasFavorite: (article: article) => boolean
  addToFavorites: (article: article) => void
  removeFromFavorites: (article: article) => void
}

export const FavoritesContext = createContext<FavoritesContextType | null>(null)

export const FavoriteProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<article[]>([])

  const hasFavorite = useCallback(
    (article: article) => {
      const has = favorites.some((fav) => Number(fav.id) === Number(article.id))
      return has
    },
    [favorites],
  )

  const addToFavorites = useCallback(
    (article: article) => {
      if (hasFavorite(article)) {
        return
      }
      const newFavorites = [...favorites, article]
      setFavorites(newFavorites)
      saveDataLS(newFavorites)
    },
    [favorites, hasFavorite],
  )

  const removeFromFavorites = useCallback(
    (favorite: article) => {
      if (hasFavorite(favorite)) {
        const newFavorites = favorites.filter((fav) => fav.id !== favorite.id)
        setFavorites(newFavorites)
        saveDataLS(newFavorites)
      }
    },
    [favorites, hasFavorite],
  )

  useEffect(() => {
    const favoritesLS = readDataLS()
    if (!favorites.length && favoritesLS.length > 0) {
      setFavorites(favoritesLS)
    }
  }, [favorites])

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, hasFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}
