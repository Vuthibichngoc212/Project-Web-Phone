import { PATH } from 'app:constants';
import { IRouter } from 'interfaces/route';
import OrdersPage from 'pages/Admin/OrdersPage';
import ProductsPage from 'pages/Admin/ProductsPage';
import UsersPage from 'pages/Admin/UsersPage';
import AuthenPage from 'pages/AuthenPage';
import HomePage from 'pages/Home';
import AdminPage from 'pages/Admin';

// import { lazy } from 'react';

// const HomePage = lazy(() => import('pages/Home'));
// const AuthenPage = lazy(() => import('pages/AuthenPage'));
// const AdminPage = lazy(() => import('pages/Admin'));
// const OrdersPage = lazy(() => import('pages/Admin/OrdersPage'));
// const ProductsPage = lazy(() => import('pages/Admin/ProductsPage'));
// const UsersPage = lazy(() => import('pages/Admin/UsersPage'));

const routerList: Array<IRouter> = [
  {
    name: 'Auth',
    path: PATH.AUTH,
    element: <AuthenPage />
  },
  {
    name: 'Home',
    path: PATH.HOME,
    element: <HomePage />
  },
  {
    name: 'Admin',
    path: PATH.ADMIN,
    element: <AdminPage />,
    children: [
      {
        path: PATH.ORDERS,
        element: <OrdersPage />,
        name: 'Orders'
      },
      {
        path: PATH.PRODUCTS,
        element: <ProductsPage />,
        name: 'Products'
      },
      {
        path: PATH.USERS,
        element: <UsersPage />,
        name: 'Users'
      },
      {
        path: PATH.LOGOUT,
        name: 'Logout'
      }
    ]
  }
];

export default routerList;
