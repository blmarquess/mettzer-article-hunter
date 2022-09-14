import { Button } from '@mui/material'
import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid'
import { article } from 'domain/entities'
import { Link } from 'react-router-dom'
import { IsFavorite } from '../components/IsFavorite'

export const columns: GridColumns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'title', headerName: 'Titulo', minWidth: 150, width: 200, maxWidth: 350 },
  { field: 'authors', headerName: 'Autor', width: 250 },
  { field: 'type', headerName: 'Tipo', width: 80 },
  { field: 'description', headerName: 'Descrição', minWidth: 200, width: 350, maxWidth: 650 },
  { field: 'urls', headerName: 'URL', minWidth: 150, width: 230, maxWidth: 320 },
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
    width: 110,
  },
  {
    field: 'favorite',
    headerName: 'Favoritos',
    renderCell: (params: GridRenderCellParams<article>) => <IsFavorite {...params.row} />,
    width: 100,
  },
]
