import { article } from 'domain/entities'
import { createContext, PropsWithChildren, useEffect, useState } from 'react'
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

  const hasFavorite = (article: article) => {
    const has = favorites.some((fav) => Number(fav.id) === Number(article.id))
    return has
  }

  const addToFavorites = (article: article) => {
    if (hasFavorite(article)) {
      return
    }
    const newFavorites = [...favorites, article]
    setFavorites(newFavorites)
    saveDataLS(newFavorites)
  }

  const removeFromFavorites = (favorite: article) => {
    if (hasFavorite(favorite)) {
      const newFavorites = favorites.filter((fav) => fav.id !== favorite.id)
      setFavorites(newFavorites)
      saveDataLS(newFavorites)
    }
  }

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
