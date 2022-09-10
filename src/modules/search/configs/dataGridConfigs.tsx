import { Button, Link } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { article } from 'domain/entities/article'

export const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'title', headerName: 'Titulo', width: 250 },
  { field: 'authors', headerName: 'Autor', width: 250 },
  { field: 'type', headerName: 'Tipo', width: 80 },
  { field: 'description', headerName: 'Descrição', width: 300 },
  { field: 'urls', headerName: 'URL', width: 230 },
  {
    field: 'Open',
    headerName: 'Open',
    renderCell: (params: GridRenderCellParams<article>) => (
      <Button component={Link} onClick={() => window.open(`/${params.id as string}`, '_blank')}>
        Open
      </Button>
    ),
    width: 100,
  },
  {
    field: 'Favoritar',
    headerName: 'Favoritar',
    renderCell: () => <Button>Favoritar</Button>,
    width: 100,
  },
]
