import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  errorMessage: 'hehe',
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const res = await axios.get(
      'https://randomuser.m/api/?results=10'
    );
    console.log(res.data, 'ini hasil fetchnya');
    return res.data.results;
  }
);

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = [...state.users, ...action.payload];
      })
      .addCase(fetchUsers.rejected, (state) => {
        console.log('masuk sini gak');
        state.errorMessage = 'fetch user error';
      });
  },
});

export default userSlice.reducer;
