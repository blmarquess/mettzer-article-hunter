import { CssBaseline } from '@mui/material'
import { FavoriteProvider } from 'context/Favorites'
import { useRoutes } from 'react-router-dom'
import { AppRoutes } from 'routes'

export default function App() {
  const appRouter = useRoutes(AppRoutes)
  return (
    <FavoriteProvider>
      <CssBaseline />
      {appRouter}
    </FavoriteProvider>
  )
}
// TODO [FEATURE]: Add a style to the app
