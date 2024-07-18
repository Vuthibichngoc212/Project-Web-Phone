import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PATH } from 'app:constants/path';
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../../assets/anh1home.png';

const Breadcrumbs = () => {
  const breadcrumbs = [
    { name: 'Trang chủ', path: PATH.HOME_LAYOUT.HOME_PAGE },
    { name: 'Tin tức', path: PATH.HOME_LAYOUT.NEWS }
  ];

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={crumb.name}>
          {index !== 0 && <Typography sx={{ mx: 1 }}> / </Typography>}{' '}
          <Link
            to={crumb.path}
            style={{
              textDecoration: 'none',
              color: '#008C09',
              fontWeight: 'bold'
            }}
          >
            <Typography>{crumb.name}</Typography>
          </Link>
        </React.Fragment>
      ))}
    </Box>
  );
};

const ProductsPage: React.FC = () => {
  return (
    <Box sx={{ mx: 5 }}>
      <Box sx={{ my: 1 }}>
        <Breadcrumbs />
        <Box sx={{ mt: 1 }}>
          <img
            src={Banner}
            alt=""
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsPage;
