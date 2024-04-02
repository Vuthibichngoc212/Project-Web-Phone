import { Suspense, useEffect, useMemo } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { PATH } from 'app:constants';
import { LazyLoading, ProtectedRoute } from 'components';
import AdminLayout from 'layout';
import Cookies from 'js-cookie';
import routerList from './routes';

const AppRoutes = () => {
  const navigate = useNavigate();
  const token = Cookies.get('accessToken');

  const destinationPath = useMemo(() => {
    return token ? PATH.HOME : PATH.AUTH;
  }, [token]);

  useEffect(() => {
    navigate(destinationPath);
  }, [destinationPath, navigate]);

  return (
    <Suspense fallback={<LazyLoading />}>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<AdminLayout />}>
            {routerList.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Route>

        <Route path="*" element={<Navigate replace to={PATH.AUTH} />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
