// // src/features/session/sessionSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchSessionDetails = createAsyncThunk(
//   'session/fetchSessionDetails',
//   async (sessionId, { rejectWithValue }) => {
// 		console.log("Here now:"); // Should show expected session and members properties

//     try {
//       const token = localStorage.getItem('jwtToken');
//       const response = await fetch(`https://ajozave-api.onrender.com/api/sessions/${sessionId}`, {
//         headers: { 'Authorization': `Bearer ${token}` },
//       });
      
//       console.log("RESPONSE STATUS:", response.status); // Log response status
//       console.log("RESPONSE:", response); // Log full response
      
//       if (response.status === 401) {
//         return rejectWithValue('Session expired, please log in.');
//       }
      
//       if (!response.ok) {
//         throw new Error('Failed to fetch session details');
//       }
      
//       const data = await response.json();
// 			console.log("FETCHED DATA:", data); // Should show expected session and members properties
//       return data.session;
//     } catch (err) {
//       console.error("FETCH ERROR:", err.message); // Log error
//       return rejectWithValue(err.message);
//     }
//   }
// );


// const sessionSlice = createSlice({
//   name: 'session',
//   initialState: {
//     session: null,
//     members: [],
//     loading: false,
//     error: null,
//     showModal: false,
//   },
//   reducers: {
//     setModalVisibility(state, action) {
//       state.showModal = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchSessionDetails.pending, (state) => {
// 				console.log("Fetching session details...");
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchSessionDetails.fulfilled, (state, action) => {
// 				console.log("Session details fetched:", action.payload);
//         state.loading = false;
//         state.session = action.payload;
//         state.members = action.payload.members;
//       })
//       .addCase(fetchSessionDetails.rejected, (state, action) => {
// 				console.log("Failed to fetch session details:", action.payload);
//         state.loading = false;
//         state.error = action.payload;
//         state.showModal = action.payload === 'Session expired, please log in.';
//         // state.showModal = true;

//       });
//   },
// });

// export const { setModalVisibility } = sessionSlice.actions;
// export default sessionSlice.reducer;





















import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSessionDetails = createAsyncThunk(
  'session/fetchSessionDetails',
  async (sessionId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch(`https://ajozave-api.onrender.com/api/sessions/${sessionId}`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.status === 401) {
        return rejectWithValue('Session expired, please log in.');
      }

      if (!response.ok) {
        throw new Error('Failed to fetch session details');
      }

      const data = await response.json();
      return data.session;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    session: null,
    members: [],
    loading: false,
    error: null,
    showModal: false,
  },
  reducers: {
    setModalVisibility(state, action) {
      state.showModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSessionDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSessionDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.session = action.payload;
        state.members = action.payload.members;
      })
      .addCase(fetchSessionDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;

        // Set showModal to true if the error is due to session expiration
        if (action.payload === 'Session expired, please log in.') {
          state.showModal = true;
        }
      });
  },
});

export const { setModalVisibility } = sessionSlice.actions;
export default sessionSlice.reducer;