import { Star as Favorite, StarBorder as Unfavorite } from '@mui/icons-material'
import { Button } from '@mui/material'
import { article } from 'domain/entities'
import { addFavorite, checkFavorite, removeFavorite } from 'services/repository/localStorage'

export const IsFavorite = (props: article) => {
  const isFavorite = checkFavorite(props.id)
  const handleRemoveFavorite = () => removeFavorite(props.id)
  const handleAddFavorite = () => addFavorite(props)
  if (isFavorite) {
    return (
      <Button onClick={handleRemoveFavorite}>
        <Favorite sx={{ color: 'yellow', height: 32, width: 32 }} stroke={'black'} />
      </Button>
    )
  }
  return (
    <Button onClick={handleAddFavorite} variant="text">
      <Unfavorite sx={{ height: 32, width: 32 }} />
    </Button>
  )
}
