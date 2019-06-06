import { Home, Products, Places } from '../pages'

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
    key: 'home'
  },
  {
    path: '/produtos',
    component: Products,
    key: 'products'
  },
  {
    path: '/postos',
    component: Places,
    key: 'places'
  }
]

export default routes
