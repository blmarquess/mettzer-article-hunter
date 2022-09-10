import { Star as Favorite, StarBorder as Unfavorite } from '@mui/icons-material'
import { Button } from '@mui/material'
import { article } from 'domain/entities'
import { addFavorite, checkFavorite, removeFavorite } from 'services/repository/localStorage'

export const IsFavorite = (props: article) => {
  const isFavorite = checkFavorite(props.id)
  if (isFavorite) {
    return (
      <Button onClick={() => removeFavorite(props.id)}>
        <Favorite sx={{ color: 'yellow', height: 32, width: 32 }} stroke={'black'} />
      </Button>
    )
  }
  return (
    <Button onClick={() => addFavorite(props)} variant="text">
      <Unfavorite sx={{ height: 32, width: 32 }} />
    </Button>
  )
}
