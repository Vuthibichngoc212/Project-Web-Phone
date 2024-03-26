import { useState } from 'react';
import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import {
  useLazyGetListUserQuery,
  useRegisterUserMutation
} from 'redux/api/api.caller';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IUserLogin } from 'interfaces/type';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { StyledGird, StyledAll, StyledPaper } from '../styled';

const SignUp = () => {
  const [formKey, setFormKey] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  // const [getUserLazy] = useLazyGetListUserQuery();
  const [addUserRegister] = useRegisterUserMutation();
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<IUserLogin>({
    shouldFocusError: false,
    defaultValues: {
      role: 'user',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });
  const handleBlur = (value: string) => {
    if (value !== watch('password')) {
      toast.error('Password nhập lại không đúng', {
        position: 'bottom-right',
        autoClose: 2000,
        theme: 'light'
      });
    }
  };
  const onSubmit = async (data: IUserLogin) => {
    // const { confirmPassword, ...userData } = data;
    await addUserRegister(data).then((data: any) => {
      if (data?.data) {
        toast.success('Đăng ký thành công!', {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'colored'
        });
        reset();
        setFormKey((prev) => prev + 1);
        return;
      }
      toast.error('Đăng ký không thành công', {
        theme: 'colored',
        autoClose: 2000,
        position: 'bottom-right'
      });
    });

    // if (response) {

    // } else {
    //   toast.error('Đăng ký không thành công', {
    //     position: 'bottom-right',
    //     autoClose: 2000,
    //     theme: 'light'
    //   });
    // }
    // const users = await getUserLazy();
    // if (users?.data) {
    //   const result = users?.data.find((item) => {
    //     return item.email === data.email;
    //   });
    //   if(result) {}
    // }
  };

  return (
    <StyledAll>
      <ToastContainer />

      <Grid>
        <StyledPaper elevation={10}>
          <StyledGird>
            <Avatar style={{ backgroundColor: '#1bbd7e', margin: '8px 0' }}>
              <AddIcon />
            </Avatar>
            <Typography component="h2" variant="h5">
              Sign Up
            </Typography>
          </StyledGird>
          <form onSubmit={handleSubmit(onSubmit)} key={formKey}>
            {/* <TextField
              fullWidth
              label="Name"
              placeholder="Enter your name"
              variant="standard"
              {...register('name', { required: true })}
              error={!!errors.name}
              helperText={errors.name && errors.name.message}
            /> */}
            <TextField
              fullWidth
              label="Email"
              type="email"
              placeholder="Enter your email"
              variant="standard"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              error={!!errors.email}
              helperText={errors.email && errors.email.message}
            />
            {/* <FormControl component="fieldset" error={!!errors.gender}>
              <FormLabel component="legend" style={{ paddingTop: '8px' }}>
                Gender
              </FormLabel>
              <RadioGroup
                aria-label="gender"
                {...register('gender', { required: true })}
                style={{ display: 'initial' }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
              {errors.gender && (
                <Typography color="error" variant="caption">
                  {errors.gender.message}
                </Typography>
              )}
            </FormControl> */}
            {/* <TextField
              fullWidth
              label="Phone Number"
              placeholder="Enter your phone number"
              variant="standard"
              {...register('phone', { required: true })}
              error={!!errors.phone}
              helperText={errors.phone && errors.phone.message}
            /> */}
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
            <TextField
              fullWidth
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm your password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              variant="standard"
              {...register('confirmPassword', {
                required: true
                // validate: (val: string) => {
                //   if (watch('password') !== val) {
                //     return 'Your passwords do not match';
                //   }
                //   return true;
                // }
              })}
              onBlur={(e: any) => handleBlur(e.target.value)}
              error={!!errors.confirmPassword}
              helperText={
                errors.confirmPassword && errors.confirmPassword.message
              }
            />
            <FormControlLabel
              control={<Checkbox name="checkedA" />}
              label="I accept the terms and conditions."
            />
            <Button type="submit" variant="contained" color="primary">
              Sign up
            </Button>
          </form>
        </StyledPaper>
      </Grid>
    </StyledAll>
  );
};

export default SignUp;
