import NotFound from 'modules/NotFound'
import { ArticlePage, SearchPage } from 'modules/search/pages'

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
    element: <ArticlePage />,
  },
  {
    path: '/favorites',
    element: <h1>Favorites</h1>,
  },
]
