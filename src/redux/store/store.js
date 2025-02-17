import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from '../session/sessionsSlice'; 
import sessionDetailsReducer from '../session/sessionDetailsSlice';
import contributorSessionsReducer from '../session/contributorSessionSlice'; 

const store = configureStore({
  reducer: {
    session: sessionReducer, // Existing slice
    sessionDetails: sessionDetailsReducer, // Add the new slice
    contributorSessions: contributorSessionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Ensure thunk is included
});

export default store;