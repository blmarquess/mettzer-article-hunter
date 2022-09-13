import { Button } from '@mui/material'
import { useContext } from 'react'
import { FavoritesContext, FavoritesContextType } from 'context/Favorites'
import { article } from 'domain/entities'

export const RemoveFavoriteButton = (props: article) => {
  const { removeFromFavorites } = useContext(FavoritesContext) as FavoritesContextType
  return (
    <Button
      onClick={() => removeFromFavorites(props)}
      variant="text"
      data-testid={`unfavorite-${props.id}`}>
      Remover
    </Button>
  )
}
