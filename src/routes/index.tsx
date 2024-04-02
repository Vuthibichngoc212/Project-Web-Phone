import { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { PATH } from 'app:constants';
import { LazyLoading, ProtectedRoute } from 'components';
import AdminLayout from 'layout';
import Cookies from 'js-cookie';
import routerList from './routes';

const AppRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('accessToken');
    if (!token) {
      navigate(PATH.AUTH);
    } else navigate(PATH.HOME);
  }, [navigate]);

  return (
    <Suspense fallback={<LazyLoading />}>
      <Routes>
        {/* <Route path="/" element={<Navigate replace to={PATH.AUTH} />} /> */}

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
