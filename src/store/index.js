import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import logger from 'redux-logger';
import userReducer from './reducers/userSlice';

const store = configureStore({
  reducer: { counter: counterReducer, users: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export default store;
