import NotFound from 'modules/NotFound'
import { SearchPage } from 'modules/search/SearchPage'

export const AppRoutes = [
  {
    path: '/',
    element: <SearchPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: 'article/:id',
    element: <h1>ID Search</h1>,
  },
  {
    path: '/favorites',
    element: <h1>Favorites</h1>,
  },
]
