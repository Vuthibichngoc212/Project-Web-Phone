import { Paper, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import Login from './Login';
import SignUp from './Signup';
import { StyledAll } from './styled';

const AuthenPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event: any, newValue: any) => {
    event.preventDefault();
    setSelectedTab(newValue);
  };

  return (
    <StyledAll>
      <Paper elevation={10} style={{ margin: '20px 0px' }}>
        <Tabs value={selectedTab} onChange={handleChange} centered>
          <Tab label="Sign In" />
          <Tab label="Sign Up" />
        </Tabs>
        {selectedTab === 0 && (
          <Login onSignUpClicked={() => setSelectedTab(1)} />
        )}
        {selectedTab === 1 && <SignUp />}
      </Paper>
    </StyledAll>
  );
};

export default AuthenPage;
