import { Box, Toolbar } from '@mui/material';
// import Sidebar from 'layout/Sidebar';
import Sidebar from 'layout/components/AdminPage/Sidebar';
import Topbar from 'layout/components/AdminPage/Topbar';
import colorConfigs from 'layout/configs/const colorConfigs';
import sizeConfigs from 'layout/configs/sizeConfigs';
import Cookies from 'js-cookie';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const token_admin = Cookies.get('cookie_shop_admin');
  return (
    <>
      {token_admin ? (
        <Box sx={{ display: 'flex' }}>
          <Topbar />
          <Box
            component="nav"
            sx={{
              width: sizeConfigs.sidebar.width,
              flexShrink: 0
            }}
          >
            <Sidebar />
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: `calc(100% - ${sizeConfigs.sidebar.width})`,
              minHeight: '100vh',
              backgroundColor: colorConfigs.mainBg
            }}
          >
            <Toolbar />
            <Outlet />
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default MainLayout;
