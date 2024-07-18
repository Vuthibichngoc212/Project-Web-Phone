import AppHeaderBar from 'layout/AppHeader/indext';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import BoardBar from 'layout/BoardBar';
import { StyledDashboard } from './styled';

const Home = () => {
  return (
    <StyledDashboard>
      <Box>
        <AppHeaderBar />
        <BoardBar />
      </Box>
      <Outlet />
    </StyledDashboard>
  );
};

export default Home;
