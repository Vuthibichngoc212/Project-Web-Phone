import { useEffect, useMemo } from 'react';
import {
  useLocation,
  Navigate,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';
import { PATH } from 'app:constants';
// import { LazyLoading } from 'components';
import Cookies from 'js-cookie';
import routerList from './routes';

const AppRoutes = () => {
  const navigate = useNavigate();
  const pathName = useLocation().pathname;
  const token_admin = Cookies.get('cookie_shop_admin');
  // const token_customer = Cookies.get('cookie_shop_customer');

  const destinationPath = useMemo(() => {
    if (pathName.includes('admin')) {
      if (token_admin) {
        return PATH.ADMIN;
      }
      return PATH.AUTH;
    }
    return '';
  }, [token_admin, pathName]);

  useEffect(() => {
    if (destinationPath) {
      navigate(destinationPath);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destinationPath]);

  return (
    // <Suspense fallback={<LazyLoading />}>
    <Routes>
      <Route
        path="/"
        element={<Navigate replace to={PATH.HOME_LAYOUT.HOME_PAGE} />}
      />

      {routerList.map(({ path, children, element }) => {
        if (children) {
          return (
            <Route key={path} path={path} element={element}>
              {children.map(({ element, path }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Route>
          );
        }
        return <Route key={path} path={path} element={element} />;
      })}

      <Route path="*" element={<Navigate replace to={PATH.AUTH} />} />
    </Routes>
    // </Suspense>
  );
};

export default AppRoutes;
