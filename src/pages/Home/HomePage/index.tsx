import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import routerList from 'routes/routes';
import Banner from '../../../assets/anh1home.png';

// const products = [
//   { name: 'Bắp cải xanh', price: '10.000₫', imageUrl: 'url-to-image' }
// ];

const HomePage: React.FC = () => {
  const homePageRoute = routerList
    .find((route) => route.name === 'Home')
    ?.children?.find((child) => child.name === 'Trang chủ');
  const HomePageTitle = homePageRoute ? homePageRoute.name : '';

  return (
    <Box sx={{ mx: 5 }}>
      <Box sx={{ my: 1 }}>
        <Typography sx={{ fontWeight: 'bold', color: '#008C09' }}>
          {HomePageTitle}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <img
            src={Banner}
            alt=""
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <Button
          sx={{
            color: 'white',
            borderRadius: '10px',
            mt: 3,
            bgcolor: '#d32f2f',
            '&:hover': {
              bgcolor: '#d32f2f'
            }
          }}
          variant="contained"
        >
          <Typography variant="h5" style={{ fontWeight: 'bold' }}>
            Hot Deal
          </Typography>
        </Button>
      </Box>
      {/* <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.name} xs={12} sm={6} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff'
              }}
            >
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant="contained">Mua ngay</Button>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.price}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        style={{ width: '100%' }}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid> */}
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: '#28A745',
            borderRadius: '20px',
            color: 'white',
            '&:hover': {
              backgroundColor: '#217a37'
            }
          }}
        >
          Xem thêm
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
