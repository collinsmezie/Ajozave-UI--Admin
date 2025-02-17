import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// **New Action: Fetch all sessions**
export const fetchSessions = createAsyncThunk(
  'contributor-sessions/fetchSessions',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch('https://ajozave-api.onrender.com/api/all-sessions', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 401) {
        return rejectWithValue('Session expired, please log in.');
      }

      if (!response.ok) {
        console.log("RESPONSE", await response.json())
        const errorMessage = await response.json().catch(() => ({}));
        throw new Error(errorMessage.error || 'Failed to make fetch sessions.');
      }

      const data = await response.json();
      console.log("contributor fetchSessions RESPONSE", data)
      return data.sessions;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);



const contributorSessionsSlice = createSlice({
  name: 'contributorSessions',
  initialState: {
    sessions: [],
    session: null,
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
      // Fetch all sessions
      .addCase(fetchSessions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSessions.fulfilled, (state, action) => {
        state.loading = false;
        state.sessions = action.payload;
        console.log("REDUX CONTRIBUTOR State.sessions", state.sessions)

      })
      .addCase(fetchSessions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { setModalVisibility } = contributorSessionsSlice.actions;
export default contributorSessionsSlice.reducer;
