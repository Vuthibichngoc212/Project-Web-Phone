import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import { useNavigate } from 'react-router-dom';

export interface Props {
  open: boolean;
  handleClose?: () => void;
}

const ConfirmDialog = ({ open, handleClose }: Props) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/auth');
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        sx={{
          textAlign: 'center'
        }}
      >
        Thông báo
      </DialogTitle>
      <DialogContent>
        <DialogContentText color="black">
          Vui lòng đăng ký / đăng nhập tài khoản
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Đóng
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ mr: '12px' }}
          onClick={handleLogin}
        >
          Đồng ý
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
