import { Button } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { article } from 'domain/entities'
import { Link } from 'react-router-dom'
import { removeFavorite } from 'services/repository/localStorage'

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
      <Button component={Link} to={`/article/${params.id as string}`}>
        visualizar
      </Button>
    ),
    width: 100,
  },
  {
    field: 'favorite',
    headerName: 'Favoritos',
    renderCell: (params: GridRenderCellParams<article>) => (
      <Button
        component="button"
        onClick={() => removeFavorite(Number(params.row.id))}
        data-testid={`remove-favorite-${params.row.id as string}`}>
        Remover
      </Button>
    ),
    width: 100,
  },
]
