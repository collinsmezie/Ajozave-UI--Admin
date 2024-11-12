import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch session details action (already existing)
export const fetchSessionDetails = createAsyncThunk(
  'session/fetchSessionDetails',
  async (sessionId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch(`https://ajozave-api.onrender.com/api/sessions/${sessionId}`, {
        // const response = await fetch(`http://localhost:4000/api/sessions/${sessionId}`, {

        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.status === 401) {
        return rejectWithValue('Session expired, please log in.');
      }

      if (!response.ok) {
        console.log("RESPONSE", response)
        throw new Error('Failed to fetch session details');
      }

      const data = await response.json();
      return data.session;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// New deleteMember action
export const deleteMember = createAsyncThunk(
  'session/deleteMember',
  async ({ sessionId, memberId }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('jwtToken');
      // const response = await fetch(`http://localhost:4000/api/sessions/${sessionId}/members/${memberId}`, {
      const response = await fetch(`https://ajozave-api.onrender.com/api/sessions/${sessionId}/members/${memberId}`, {

        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.status === 401) {
        return rejectWithValue('Session expired, please log in.');
      }

      if (!response.ok) {
        throw new Error('Failed to delete member');
      }

      return memberId; // Return memberId to identify which member was deleted
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
        if (action.payload === 'Session expired, please log in.') {
          state.showModal = true;
        }
      })
      .addCase(deleteMember.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteMember.fulfilled, (state, action) => {
        state.members = state.members.filter(member => member.member._id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteMember.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setModalVisibility } = sessionSlice.actions;
export default sessionSlice.reducer;
