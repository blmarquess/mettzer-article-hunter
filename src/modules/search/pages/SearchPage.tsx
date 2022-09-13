import { Box, Button, CircularProgress, TextField } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useRef, useState } from 'react'
import { useSearchQuery } from '../hooks'
import { columns } from '../configs'
import { Link } from 'react-router-dom'

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(20)
  const inputS = useRef<HTMLInputElement>(null)
  const { data, totalRows, isFetching, page, setPage } = useSearchQuery(searchTerm, pageSize)
  const handleClick = () => {
    setSearchTerm(inputS.current?.value as string)
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 8 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 2 }}>
        <TextField
          type="text"
          label="Termo da pesquisa"
          data-testid="search-input"
          inputRef={inputS}
          sx={{ m: 4 }}
        />
        <Button type="button" variant="contained" onClick={handleClick} sx={{ m: 2, p: 2 }}>
          {isFetching ? <CircularProgress size={20} color="inherit" /> : 'search'}
        </Button>
        <Button component={Link} to="/favorites" variant="outlined" sx={{ m: 2, p: 2 }}>
          favoritos
        </Button>
      </Box>
      <Box sx={{ height: '75vh', width: '100%' }}>
        {Boolean(data) && (
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
            <DataGrid
              loading={isFetching}
              rows={data}
              columns={columns}
              rowsPerPageOptions={[10, 20, 50]}
              pageSize={pageSize}
              rowCount={totalRows}
              page={page - 1}
              pagination
              paginationMode="server"
              onPageSizeChange={(newPageSize) => setPageSize(() => newPageSize)}
              onPageChange={(newPage) => setPage(newPage + 1)}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}
