import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ConfirmDialog from 'components/confirmDialog/ConfirmDialog';
import { useSelector } from 'react-redux';
import { userSelector } from 'redux/features/dashboard.slice';
import Badge from '@mui/material/Badge';

const ShoppCart = () => {
  const users = useSelector(userSelector);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const open = Boolean(anchorEl);

  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseConfirmDialog = () => {
    setIsConfirmDialogOpen(false);
  };
  const handleAccountClick = (e: React.MouseEvent<HTMLElement>) => {
    if (users.length === 0) {
      setIsConfirmDialogOpen(true);
    } else {
      setAnchorEl(e.currentTarget);
    }
  };

  return (
    <>
      {users.length === 0 ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Tooltip title="My cart">
            <IconButton
              onClick={handleAccountClick}
              size="small"
              sx={{
                ml: 2,
                mr: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white'
              }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <ShoppingCartIcon sx={{ width: 30, height: 30 }} />
              <Typography style={{ color: '#fff', fontSize: '0.9rem' }}>
                Giỏ hàng
              </Typography>
            </IconButton>
          </Tooltip>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Tooltip title="My cart">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{
                ml: 2,
                mr: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white'
              }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Badge
                badgeContent={17}
                color="error"
                sx={{
                  '& .MuiBadge-badge': {
                    height: '20px',
                    width: '20px',
                    fontSize: '0.6rem',
                    top: '25%',
                    right: '5%'
                  }
                }}
              >
                <ShoppingCartIcon sx={{ width: 30, height: 30 }} />
              </Badge>
              <Typography style={{ color: '#fff', fontSize: '0.9rem' }}>
                Giỏ hàng
              </Typography>
            </IconButton>
          </Tooltip>
        </Box>
      )}
      <ConfirmDialog
        open={isConfirmDialogOpen}
        handleClose={handleCloseConfirmDialog}
      />
    </>
  );
};

export default ShoppCart;
