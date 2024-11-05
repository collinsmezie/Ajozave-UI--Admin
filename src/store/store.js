// // src/store/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import sessionReducer from '../features/session/sessionSlice';

// const store = configureStore({
//   reducer: {
//     session: sessionReducer,
//   },
// });

// export default store;



import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from '../features/session/sessionSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Ensure thunk is included
});

export default store;
