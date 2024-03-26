import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LazyLoading } from 'components';

const AdminLayout = () => {
  return (
    <div className="main-content">
      <Suspense fallback={<LazyLoading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AdminLayout;
