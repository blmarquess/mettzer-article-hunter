import { CssBaseline, ThemeProvider } from '@mui/material'
import { FavoriteProvider } from 'context/Favorites'
import { useRoutes } from 'react-router-dom'
import { AppRoutes } from 'routes'
import { lightTheme } from 'shared/styles/lightTheme'

export default function App() {
  const appRouter = useRoutes(AppRoutes)
  return (
    <FavoriteProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {appRouter}
      </ThemeProvider>
    </FavoriteProvider>
  )
}
