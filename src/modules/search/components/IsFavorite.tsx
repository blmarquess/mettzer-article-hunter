import { Star as Favorite, StarBorder as Unfavorite } from '@mui/icons-material'

interface Props {
  id: string
}

export const IsFavorite = ({ id }: Props) => {
  if (id !== '1') {
    return <Favorite sx={{ color: 'yellow', height: 32, width: 32 }} stroke={'black'} />
  }
  return <Unfavorite />
}
