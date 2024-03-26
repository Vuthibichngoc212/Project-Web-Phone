import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from 'interfaces/type';
import { RootState } from '../store';

export interface DashboardState {
  value: number;
  user: IUser | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  value: 0,
  user: null,
  isLoading: false,
  error: null
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setUser, clearUser, setLoading, setError } =
  dashboardSlice.actions;

export const selectCount = (state: RootState) => state.dashboard.value;

export default dashboardSlice.reducer;
