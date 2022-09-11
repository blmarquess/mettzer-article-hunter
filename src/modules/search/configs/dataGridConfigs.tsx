import { Button } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { article } from 'domain/entities'
import { Link } from 'react-router-dom'
import { IsFavorite } from '../components/IsFavorite'

export const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'title', headerName: 'Titulo', width: 250 },
  { field: 'authors', headerName: 'Autor', width: 250 },
  { field: 'type', headerName: 'Tipo', width: 80 },
  { field: 'description', headerName: 'Descrição', width: 300 },
  { field: 'urls', headerName: 'URL', width: 230 },
  {
    field: 'view',
    headerName: 'Visualizar',
    renderCell: (params: GridRenderCellParams<article>) => (
      <Button
        component={Link}
        to={`/article/${params.id as string}`}
        data-testid={`article-${params.id}`}>
        visualizar
      </Button>
    ),
    width: 100,
  },
  {
    field: 'favorite',
    headerName: 'Favoritos',
    renderCell: (params: GridRenderCellParams<article>) => <IsFavorite {...params.row} />,
    width: 100,
  },
]
