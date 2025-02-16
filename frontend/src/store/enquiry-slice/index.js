import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // or any HTTP client

// Async thunk for form submission
export const EnquiryForm = createAsyncThunk(
    'enquiry/Enquiry',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://the-lawncollection.onrender.com/api/auth/enquiryForm', formData, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            // Handle error properly to avoid potential errors
            const message = error.response && error.response.data ? error.response.data : 'An error occurred';
            return rejectWithValue(message);
        }
    }
);

// Slice definition
const authSlice = createSlice({
  name: 'enquiry',
  initialState: {
    formStatus: 'idle', // 'idle', 'loading', 'success', 'failed'
    formError: null,
  },
  reducers: {
    // Add other reducers if needed
  },
  extraReducers: (builder) => {
    builder
      // Handle form submission loading state
      .addCase(EnquiryForm.pending, (state) => {
        state.formStatus = 'loading';
        state.formError = null;
      })
      // Handle form submission success
      .addCase(EnquiryForm.fulfilled, (state, action) => {
        state.formStatus = 'success';
        state.formError = null;
      })
      // Handle form submission failure
      .addCase(EnquiryForm.rejected, (state, action) => {
        state.formStatus = 'failed';
        state.formError = action.payload || 'Submission failed';
      });
  },
});

// Export actions and reducer
export const { /* other actions */ } = authSlice.actions;
export default authSlice.reducer;