import { CssBaseline } from '@mui/material'
import { useRoutes } from 'react-router-dom'
import { AppRoutes } from 'routes'

export default function App() {
  const appRouter = useRoutes(AppRoutes)
  return (
    <>
      <CssBaseline />
      {appRouter}
    </>
  )
}
