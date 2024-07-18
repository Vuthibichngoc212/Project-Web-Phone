import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import routerList from 'routes/routes';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';

const BoardBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState('');
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  if (!routerList || routerList.length === 0) {
    return null;
  }

  const handleNavigation = (path: any) => {
    setActivePath(path);
    navigate(path);
  };

  return (
    <Box
      sx={{
        height: '55px',
        bgcolor: '#28A745',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Grid item xs={2}>
        <MenuIcon
          sx={{
            marginLeft: 5,
            cursor: 'pointer',
            color: '#fff'
          }}
        />
      </Grid>
      <Grid item xs={10} container justifyContent="flex-end">
        {routerList.map((route) => {
          if (route.name === 'Home' && route.children) {
            return route.children.map((childRoute: any) => (
              <Button
                key={childRoute.name}
                sx={{
                  color: activePath === childRoute.path ? '#28A745' : '#fff',
                  fontWeight: 'bold',
                  marginLeft: '25px',
                  backgroundColor:
                    activePath === childRoute.path ? '#fff' : 'transparent',
                  '&:hover': {
                    color: '#fff',
                    bgcolor: 'rgba(255, 255, 255, 0.2)'
                  }
                }}
                onClick={() => handleNavigation(childRoute.path)}
              >
                {childRoute.name.replace('Page', '')}
              </Button>
            ));
          }
          return null;
        })}
      </Grid>
    </Box>
  );
};

export default BoardBar;
