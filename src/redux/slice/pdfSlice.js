import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Async Thunk to fetch PDFs data
export const fetchPDFs = createAsyncThunk('pdfs/fetchPDFs', async () => {
  const response = await axios.post('https://notesapi.ameyashriwas.in/api/get-collection-details', {collectionName: 'pdfmodels'});
  return response.data; // Return the data of the response
});

// Create the PDF slice
const pdfSlice = createSlice({
  name: 'pdfs',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPDFs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPDFs.fulfilled, (state, action) => {
        state.data = action.payload; // Set the fetched data
        state.loading = false;
      })
      .addCase(fetchPDFs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Redux-persist configuration
const persistConfig = {
  key: 'pdfs',
  storage,
  whitelist: ['data'], // Persist only the 'data' field
};

// Persist the reducer
const persistedReducer = persistReducer(persistConfig, pdfSlice.reducer);

export default persistedReducer;
