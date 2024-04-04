// import { Outlet } from 'react-router-dom';
import { PATH } from 'app:constants/path';
import Cookies from 'js-cookie';
import { useMemo } from 'react';

const ProtectedRoute = () => {
  const token_admin = Cookies.get('cookie_shop_admin');
  const token_customer = Cookies.get('cookie_shop_customer');

  const destinationPath = useMemo(() => {
    if (token_admin) {
      return PATH.ADMIN;
    }

    if (token_customer) {
      return PATH.HOME;
    }
    return PATH.AUTH;
  }, [token_admin, token_customer]);
  return destinationPath;
  // const isAuth = true;
  // console.log(isAuth);
  // return isAuth ? <Outlet /> : 'Not Authenticated';
};

export default ProtectedRoute;
