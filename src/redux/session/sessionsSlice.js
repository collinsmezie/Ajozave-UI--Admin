import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// **New Action: Fetch all sessions**
export const fetchSessions = createAsyncThunk(
  'session/fetchSessions',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch('https://ajozave-api.onrender.com/api/sessions', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 401) {
        return rejectWithValue('Session expired, please log in.');
      }

      if (!response.ok) {
        const errorMessage = await response.json().catch(() => ({}));
        throw new Error(errorMessage.error || 'Failed to fetch sessions.');
      }

      const data = await response.json();
      console.log("fetchSessions RESPONSE", data)
      return data.sessions;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteSession = createAsyncThunk(
  'session/deleteSession',
  async (sessionId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch(`https://ajozave-api.onrender.com/api/sessions/${sessionId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 401) {
        return rejectWithValue('Session expired, please log in.');
      }

      if (!response.ok) {
        const errorMessage = await response.json().catch(() => ({}));
        throw new Error(errorMessage.error || 'Failed to delete session.');
      }

      return sessionId; // Return the deleted session ID
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);




const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    sessions: [],
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
      // Fetch all sessions
      .addCase(fetchSessions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSessions.fulfilled, (state, action) => {
        state.loading = false;
        state.sessions = action.payload;
        // console.log("REDUX state.sessions", state.sessions)

      })
      .addCase(fetchSessions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteSession.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteSession.fulfilled, (state, action) => {
        state.loading = false;
        state.sessions = state.sessions.filter(session => session._id !== action.payload);
      })
      .addCase(deleteSession.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setModalVisibility } = sessionSlice.actions;
export default sessionSlice.reducer;
