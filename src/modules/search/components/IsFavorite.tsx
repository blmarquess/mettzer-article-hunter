import { Star as Favorite, StarBorder as Unfavorite } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useCallback, useContext } from 'react'
import { FavoritesContext, FavoritesContextType } from 'context/Favorites'
import { article } from 'domain/entities'

export const IsFavorite = (props: article) => {
  const { hasFavorite, addToFavorites, removeFromFavorites } = useContext(
    FavoritesContext,
  ) as FavoritesContextType
  const handleRemoveFavorite = useCallback(() => removeFromFavorites(props), [hasFavorite])
  const handleAddFavorite = useCallback(() => addToFavorites(props), [hasFavorite])
  if (hasFavorite(props)) {
    return (
      <Button onClick={handleRemoveFavorite} data-testid={`favorite-${props.id}`}>
        <Favorite sx={{ color: 'yellow', height: 32, width: 32 }} stroke={'black'} />
      </Button>
    )
  }
  return (
    <Button onClick={handleAddFavorite} variant="text" data-testid={`unfavorite-${props.id}`}>
      <Unfavorite sx={{ height: 32, width: 32 }} />
    </Button>
  )
}
