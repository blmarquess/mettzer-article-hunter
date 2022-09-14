import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import ImgPageNoteFound from '../images/404.png'

export const NotFound = () => {
  return (
    <Box
      data-testid="not-found-page"
      sx={{
        width: '100%',
        height: '100Vh',
        display: 'flex',
        p: 16,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button component={Link} to="/" variant="outlined" sx={{ p: 2 }}>
        voltar para o inicio
      </Button>
      <img src={ImgPageNoteFound} alt="Pagina não encontrada" height="100%" />
    </Box>
  )
}

export default NotFound
