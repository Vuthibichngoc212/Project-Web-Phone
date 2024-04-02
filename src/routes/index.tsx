import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PATH } from 'app:constants';
import { LazyLoading } from 'components';
import routerList from './routes';

const AppRoutes = () => {
  return (
    <Suspense fallback={<LazyLoading />}>
      <Routes>
        <Route path="/" element={<Navigate replace to={PATH.AUTH} />} />

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
    </Suspense>
  );
};

export default AppRoutes;
