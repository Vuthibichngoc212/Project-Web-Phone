import { PATH } from 'app:constants';
import { IRouter } from 'interfaces/route';
import AdOrdersPage from 'pages/Admin/Ad-OrdersPage';
import AdProductsPage from 'pages/Admin/Ad-ProductsPage';
import UsersPage from 'pages/Admin/UsersPage';
import AuthenPage from 'pages/AuthenPage';
import HomeLayout from 'pages/Home';
import AdminPage from 'pages/Admin';
import NewsPage from 'pages/Home/NewsPage';
import IntroducePage from 'pages/Home/IntroducePage';
import ProductsPage from 'pages/Home/ProductsPage';
import HomePage from 'pages/Home/HomePage';

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
    // path: PATH.HOME,
    element: <HomeLayout />,
    children: [
      {
        name: 'Trang chủ',
        path: PATH.HOME_LAYOUT.HOME_PAGE,
        element: <HomePage />
      },
      {
        name: 'Sản phẩm',
        path: PATH.HOME_LAYOUT.PRODUCTS,
        element: <ProductsPage />
      },
      {
        name: 'Tin tức',
        path: PATH.HOME_LAYOUT.NEWS,
        element: <NewsPage />
      },
      {
        name: 'Giới thiệu',
        path: PATH.HOME_LAYOUT.INTRODUCE,
        element: <IntroducePage />
      }
    ]
  },
  {
    name: 'Admin',
    path: PATH.ADMIN,
    element: <AdminPage />,
    children: [
      {
        path: PATH.ADMIN_PAGE.AD_PRODUCTS,
        element: <AdProductsPage />,
        name: 'Sản phẩm'
      },
      {
        path: PATH.ADMIN_PAGE.AD_ORDERS,
        element: <AdOrdersPage />,
        name: 'Đơn hàng'
      },
      {
        path: PATH.ADMIN_PAGE.AD_USERS,
        element: <UsersPage />,
        name: 'Khách hàng'
      },
      {
        path: PATH.LOGOUT,
        name: 'Đăng xuất'
      }
    ]
  }
];

export default routerList;
