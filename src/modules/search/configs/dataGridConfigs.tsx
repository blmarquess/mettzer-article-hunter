import { Button } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { article } from 'domain/entities/article'

const NOT_URL = '#'

export const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'title', headerName: 'Titulo', width: 250 },
  { field: 'authors', headerName: 'Autor', width: 250 },
  { field: 'type', headerName: 'Tipo', width: 80 },
  { field: 'description', headerName: 'Descrição', width: 300 },
  { field: 'urls', headerName: 'URL', width: 230 },
  {
    field: 'Open',
    headerName: 'Open',
    renderCell: (params: GridRenderCellParams<article>) => {
      console.log(params)
      return (
        <Button
          onClick={() => window.open(`${(params.row?.urls[1] as string) ?? NOT_URL}`, '_blank')}>
          Open
        </Button>
      )
    },
    width: 100,
  },
  {
    field: 'Favoritar',
    headerName: 'Favoritar',
    renderCell: () => <Button>Favoritar</Button>,
    width: 100,
  },
]
