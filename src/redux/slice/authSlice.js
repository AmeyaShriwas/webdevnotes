import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const ApiUrl = process.env.REACT_APP_BASE_URL; // Correct variable name

// Common function to handle API requests
const apiPost = async (endpoint, data) => {
  const response = await axios.post(`${ApiUrl}${endpoint}`, data);
  if (![200, 201].includes(response.status)) {
    throw new Error(`Failed request: ${endpoint}`);
  }
  return response.data;
};

// Thunk for login
export const loginUser = createAsyncThunk(
  '/login',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await apiPost('/login', userData);
      return { message: data.message, token: data.token, user: data.user, email: data.email, number: data.number };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for signup
export const signupUser = createAsyncThunk(
  '/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await apiPost('/signup', userData);
      return { message: data.message };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for OTP verification
export const verifyUser = createAsyncThunk(
  '/verify-otp',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await apiPost('/verify-otp', userData);
      return { message: data.message };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for forgot password
export const forgotPassword = createAsyncThunk(
  '/forgot-password',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await apiPost('/forgot-password', { email: userData });
      return { message: data.message };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for resetting password
export const resetPasswordFun = createAsyncThunk(
  '/reset-password',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await apiPost('/reset-password', userData);
      return { message: data.message };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isAuthenticated: false,
  user: null,
  email: null,
  number: null,
  token: null,
  loading: false,
  error: null,
  message: null,  // For signup or OTP success message
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.number = action.payload.number;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.email = null;
      state.number = null;
    },
  },
  extraReducers: (builder) => {
    const handlePending = (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    };
    const handleError = (state, action) => {
      state.loading = false;
      state.error = action.payload;
    };
    const handleFulfilled = (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    };

    // Handle login
    builder
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state, action) => {
        handleFulfilled(state, action);
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.email = action.payload.email;
        state.number = action.payload.number;
      })
      .addCase(loginUser.rejected, handleError);

    // Handle signup, OTP verification, forgot password, reset password
    builder
      .addCase(signupUser.pending, handlePending)
      .addCase(signupUser.fulfilled, handleFulfilled)
      .addCase(signupUser.rejected, handleError);

    builder
      .addCase(verifyUser.pending, handlePending)
      .addCase(verifyUser.fulfilled, handleFulfilled)
      .addCase(verifyUser.rejected, handleError);

    builder
      .addCase(forgotPassword.pending, handlePending)
      .addCase(forgotPassword.fulfilled, handleFulfilled)
      .addCase(forgotPassword.rejected, handleError);

    builder
      .addCase(resetPasswordFun.pending, handlePending)
      .addCase(resetPasswordFun.fulfilled, handleFulfilled)
      .addCase(resetPasswordFun.rejected, handleError);
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
