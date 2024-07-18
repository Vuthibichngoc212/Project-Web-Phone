import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUserData } from 'interfaces/users';
import { RootState } from '../store';

export interface IDashboardState {
  users: IUserData[];
}

const initialState: IDashboardState = {
  users: []
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserData>) => {
      state.users = [...state.users, action.payload];
    },
    setUserLogout: (state) => {
      state.users = [];
    }
  }
});

export const { setUser, setUserLogout } = dashboardSlice.actions;

export const userSelector = (state: RootState) => state.dashboard.users;

export default dashboardSlice.reducer;
