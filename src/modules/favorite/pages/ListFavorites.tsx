import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { readDataLS } from 'services/repository/localStorage'
import { columns } from '../configs'

export const ListFavorites = () => {
  const [pageSize, setPageSize] = useState(10)
  const rows = readDataLS()
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '80vh', p: 8, width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 2 }}>
        <Button component={Link} to="/" variant="outlined" sx={{ m: 2, p: 2 }}>
          Voltar para a pesquisa
        </Button>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '80vh', width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          rowsPerPageOptions={[10, 20, 50]}
          pageSize={pageSize}
          rowCount={Math.round(rows.length / pageSize)}
          pagination
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        />
      </Box>
    </Box>
  )
}
