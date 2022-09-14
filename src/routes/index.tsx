import { ListFavorites } from 'modules/favorite/pages'
import { NotFound } from 'modules/NotFound/page'
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
    element: <ListFavorites />,
  },
]
