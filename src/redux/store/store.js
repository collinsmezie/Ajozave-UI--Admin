// import { configureStore } from '@reduxjs/toolkit';
// import sessionReducer from '../session/sessionSlice'

// const store = configureStore({
//   reducer: {
//     session: sessionReducer,
    
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Ensure thunk is included
// });

// export default store;



import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from '../session/sessionsSlice'; // Your existing session slice
import sessionDetailsReducer from '../session/sessionDetailsSlice'; // Import the new slice

const store = configureStore({
  reducer: {
    session: sessionReducer, // Existing slice
    sessionDetails: sessionDetailsReducer, // Add the new slice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Ensure thunk is included
});

export default store;