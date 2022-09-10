import { Box, Button, CircularProgress, TextField } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useRef, useState } from 'react'
import { useSearchQuery } from '../hooks'
import { columns } from '../configs'

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageSize, setPageSize] = useState(20)
  const inputS = useRef<HTMLInputElement>(null)
  const { isFetching, data, totalRows } = useSearchQuery(searchTerm)
  const handleClick = () => {
    setSearchTerm(inputS.current?.value as string)
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 8 }}>
      <TextField type="text" id="search" inputRef={inputS} sx={{ m: 4 }} />
      <Button
        type="button"
        variant="contained"
        size="small"
        onClick={handleClick}
        sx={{ m: 2, p: 2 }}>
        {isFetching ? <CircularProgress size={20} color="inherit" /> : 'search'}
      </Button>
      <Box sx={{ height: '100%', width: '100%' }}>
        {Boolean(data) && (
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '80vh', width: '100%' }}>
            <DataGrid
              loading={isFetching}
              rows={data}
              columns={columns}
              rowsPerPageOptions={[10, 20, 50]}
              pageSize={pageSize}
              rowCount={Math.round(totalRows / pageSize)}
              pagination
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}