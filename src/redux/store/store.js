import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from '../session/sessionSlice'

const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Ensure thunk is included
});

export default store;
