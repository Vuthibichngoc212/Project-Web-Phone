import Grid from '@mui/material/Grid';
import { useState } from 'react';

import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LockIcon from '@mui/icons-material/Lock';
import Cookies from 'js-cookie';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Home from 'pages/Home';
import { IUser } from 'interfaces/type';
import { useLoginMutation } from 'redux/api/api.caller';
import { StyledGird, StyledAll, StyledPaper } from '../styled';

interface LoginProps {
  onSignUpClicked: () => void;
}

const Login: React.FC<LoginProps> = ({ onSignUpClicked }: LoginProps) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IUser>({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const [loginUser] = useLoginMutation();

  const onSubmit = async (data: IUser) => {
    try {
      loginUser(data).then((response: any) => {
        if (response?.data) {
          const token = response?.data.accessToken;
          const cookieOptions = {
            expires: 7
          };

          const { role } = response.data;
          if (role === 'admin') {
            Cookies.set('cookie_shop_admin', token, cookieOptions);
            navigate('/admin');
          } else {
            Cookies.set('cookie_shop_customer', token, cookieOptions);
            navigate('/home');
          }
          return;
        }
        toast.error('Đăng nhập thất bại sai email hoặc password', {
          theme: 'colored',
          autoClose: 2000,
          position: 'bottom-right'
        });
      });
    } catch (error) {}
  };

  return (
    <>
      <StyledAll>
        <ToastContainer />
        <Grid>
          <StyledPaper elevation={10}>
            <StyledGird>
              <Avatar style={{ backgroundColor: '#1bbd7e', margin: '8px 0' }}>
                <LockIcon />
              </Avatar>
              <Typography component="h2" variant="h5">
                Sign In
              </Typography>
            </StyledGird>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label="Email"
                placeholder="Enter your email"
                variant="standard"
                fullWidth
                {...register('email', { required: true })}
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
              />
              <TextField
                label="Password"
                placeholder="Enter password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                variant="standard"
                fullWidth
                {...register('password', { required: true })}
                error={!!errors.password}
                helperText={errors.password && errors.password.message}
              />
              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={{ margin: '8px 0' }}
                fullWidth
              >
                Sign in
              </Button>
              <Typography>
                <Link href="#">Forgot password ?</Link>
              </Typography>
              <Typography>
                Do you have an account ?
                <Link href="#" onClick={onSignUpClicked}>
                  Sign Up
                </Link>
              </Typography>
            </form>
          </StyledPaper>
        </Grid>
      </StyledAll>
    </>
  );
};

export default Login;
