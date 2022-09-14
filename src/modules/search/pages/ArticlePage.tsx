import { Box, Button, CircularProgress, Grid, Paper, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { article } from 'domain/entities'
import { useNavigate, useParams } from 'react-router-dom'
import { IsFavorite } from '../components/IsFavorite'
import { useArticleQuery } from '../hooks'

export const ArticlePage = () => {
  const articleID = useParams<{ id: string }>().id as string
  const { data, isFetching, isError } = useArticleQuery(articleID)
  const rollBack = useNavigate()
  if (isFetching) {
    return (
      <Box
        sx={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }
  if (isError) {
    return <Typography variant="h1">Error</Typography>
  }
  const { title, publisher, year, fulltextUrls, authors, description } = data as article
  return (
    <Box sx={{ p: 4, m: 'auto', bgcolor: grey[200], height: '100vh' }}>
      <Grid sx={{ p: 4, m: 'auto' }}>
        <Paper sx={{ p: 4 }}>
          <Stack spacing={2}>
            <Box sx={{ display: 'flex' }}>
              <Typography variant="h4">{title}</Typography>
              <IsFavorite {...(data as article)} />
            </Box>
            <Typography variant="body1">Publisher: {publisher}</Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="body1">Ano de publicação: {year}</Typography>
            <Typography variant="body1">Autores: {authors}</Typography>
            <Typography variant="body1">Descrição: {description}</Typography>
          </Stack>
          <Button
            variant="contained"
            onClick={() => window.open(fulltextUrls[0], '_blank')}
            sx={{ mt: 4, mr: 2 }}>
            Abrir Artigo
          </Button>
          <Button variant="contained" onClick={() => rollBack(-1)} sx={{ mt: 4 }}>
            Voltar
          </Button>
        </Paper>
      </Grid>
    </Box>
  )
}
