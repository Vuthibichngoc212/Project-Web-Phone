import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserLogout, userSelector } from 'redux/features/dashboard.slice';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Logout, Settings } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Cookies from 'js-cookie';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ConfirmDialog from 'components/confirmDialog/ConfirmDialog';

const Account = () => {
  const dispatch = useDispatch();
  const users = useSelector(userSelector);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleLogout = () => {
    Cookies.remove('cookie_shop_customer');
    dispatch(setUserLogout());
    navigate('/auth');
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
          <Tooltip title="Account setting">
            <IconButton
              onClick={handleAccountClick}
              size="small"
              sx={{
                ml: 2,
                mr: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 30, height: 30 }} />
              <Typography style={{ color: '#fff', fontSize: '0.9rem' }}>
                Tài khoản
              </Typography>
            </IconButton>
          </Tooltip>
        </Box>
      ) : (
        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <Tooltip title="Account setting">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{
                  ml: 2,
                  mr: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 30, height: 30 }} />
                <Typography style={{ color: '#fff', fontSize: '0.9rem' }}>
                  Tài khoản
                </Typography>
                {/* <Avatar
                  sx={{ width: 35, height: 35 }}
                  // src={user.image}
                  alt="/"
                /> */}
                {/* {users &&
                  users.map((user, index) => (
                    <Avatar
                      key={index}
                      sx={{ width: 35, height: 35 }}
                      // src={user.image}
                      alt="/"
                    />
                  ))} */}
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1
                },
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0
                }
              }
            }}
            MenuListProps={{
              'aria-labelledby': 'basic-button-profiles'
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <Avatar sx={{ width: 28, height: 28, mr: 2 }} />
              Account information
            </MenuItem>
            <MenuItem>
              <AddShoppingCartIcon sx={{ width: 28, height: 28, mr: 2 }} />
              My order
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      )}
      <ConfirmDialog
        open={isConfirmDialogOpen}
        handleClose={handleCloseConfirmDialog}
      />
    </>
  );
};

export default Account;
