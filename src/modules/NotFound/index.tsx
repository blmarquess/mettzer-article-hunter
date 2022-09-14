import { Box } from '@mui/system'
import ImgPageNoteFound from './images/404.png'

export const NotFound = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100Vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <img src={ImgPageNoteFound} alt="Pagina não encontrada" height="100%" />
    </Box>
  )
}

export default NotFound
