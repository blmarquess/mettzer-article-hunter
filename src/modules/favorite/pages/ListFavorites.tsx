import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { DataGrid } from '@mui/x-data-grid'
import { FavoritesContext, FavoritesContextType } from 'context/Favorites'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { columns } from '../configs'

export const ListFavorites = () => {
  const [pageSize, setPageSize] = useState(10)
  const { favorites } = useContext(FavoritesContext) as FavoritesContextType
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '90vh', p: 8, width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 2 }}>
        <Button component={Link} to="/" variant="outlined" sx={{ m: 2, p: 2 }}>
          Voltar para a pesquisa
        </Button>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
        <DataGrid
          rows={favorites}
          columns={columns}
          rowsPerPageOptions={[10, 20, 50]}
          pageSize={pageSize}
          rowCount={Math.round(favorites.length / pageSize)}
          pagination
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        />
      </Box>
    </Box>
  )
}
