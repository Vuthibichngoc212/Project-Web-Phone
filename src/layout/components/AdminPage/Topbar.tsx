import { AppBar, Toolbar, Typography } from '@mui/material';
import colorConfigs from 'layout/configs/const colorConfigs';
import sizeConfigs from 'layout/configs/sizeConfigs';

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: 'unset',
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}
    >
      <Toolbar>
        <Typography variant="h6">Demo</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
