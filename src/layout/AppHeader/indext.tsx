import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ListSearch from 'pages/components/Search';
import Account from 'pages/components/Account';
import { ButtonBase, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppCart from 'pages/components/ShopCart';
import iconWeb from '../../assets/icon_web.png';

export default function AppHeaderBar({ children }: any) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  };
  return (
    <Box>
      <AppBar sx={{ backgroundColor: '#101010' }}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={2} md={1}>
              <ButtonBase onClick={handleClick}>
                <img
                  src={iconWeb}
                  alt=""
                  style={{ width: '100%', maxWidth: '96px', height: '50px' }}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={10} md={8} lg={9}>
              <ListSearch />
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Account />
                <ShoppCart />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box style={{ maxWidth: '96px', height: '50px', paddingTop: '10px' }}>
        {children}
      </Box>
    </Box>
  );
}
