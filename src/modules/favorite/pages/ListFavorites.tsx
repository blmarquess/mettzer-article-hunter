import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { DataGrid } from '@mui/x-data-grid'
import { FavoritesContext, FavoritesContextType } from 'context/Favorites'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { columns } from '../configs'

export const ListFavorites = () => {
  const [pageSize, setPageSize] = useState(20)
  const { favorites } = useContext(FavoritesContext) as FavoritesContextType
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '90vh', mb: 4, p: 8 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', my: 4, pt: 2 }}>
        <Button component={Link} to="/" variant="outlined" sx={{ p: 2 }}>
          Voltar para a pesquisa
        </Button>
      </Box>
      <Box sx={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={favorites}
          columns={columns}
          rowsPerPageOptions={[10, 20, 50]}
          pageSize={pageSize}
          rowCount={favorites.length}
          pagination
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        />
      </Box>
    </Box>
  )
}
