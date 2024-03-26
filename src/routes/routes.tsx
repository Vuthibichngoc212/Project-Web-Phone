// import { HomeMajor } from '@shopify/polaris-icons';
import { PATH } from 'app:constants';
import { IRouter } from 'interfaces/route';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/Home'));
const AuthenPage = lazy(() => import('pages/AuthenPage'));

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
    // icon: HomeMajor
  }
];

export default routerList;
