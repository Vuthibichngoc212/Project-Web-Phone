import React from 'react';
import {
  // Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar
} from '@mui/material';
import colorConfigs from 'layout/configs/const colorConfigs';
import sizeConfigs from 'layout/configs/sizeConfigs';
import routerList from 'routes/routes';
import { NavLink } from 'react-router-dom';
import iconWeb from '../../../assets/icon_web.png';

const Sidebar = () => {
  const adminRoute = routerList.find((route) => route.name === 'Admin');
  const adminRoutes = adminRoute?.children ?? [];

  // console.log({ adminRoutes });

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sizeConfigs.sidebar.width,
          boxSizing: 'border-box',
          borderRight: '0px',
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color
        }
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: '20px' }}>
          <Stack sx={{ width: '100%' }} direction="row" justifyContent="center">
            <img
              src={iconWeb}
              alt=""
              style={{ width: '100px', height: '75px', marginRight: '50px' }}
            />
          </Stack>
        </Toolbar>
        {adminRoutes.map((route, index) =>
          route.path ? (
            <ListItem button key={index}>
              <NavLink
                to={route.path}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: 'inherit',
                  marginLeft: '75px',
                  backgroundColor: isActive ? '#ffd43a' : 'transparent'
                })}
              >
                <ListItemText primary={route.name} />
              </NavLink>
            </ListItem>
          ) : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
