import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async(userData, {rejectWithValue})=> {
    console.log('userData received', userData)
    try{
       const response = await axios.post('https://api.example.com/login', userData)

       if(!response.ok){
        throw new Error('failed to login');
       }

       const data = await response.json()
       return {user: data.user, token: data.token}
    }
    catch(error){
        return rejectWithValue(error.message);
    }
  }
)

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    loading: false,
    error: null,

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action)=> {
            state.isAuthenticated = true
            state.user = action.payload.user
            state.token = action.payload.token
        },

        logout: (state)=> {
            state.isAuthenticated = false
            state.user = null
            state.token = null
        }
    },
    extraReducers: (builder)=> {
     builder
     .addCase(loginUser.pending, (state)=> {
        state.loading = true
        state.error = null
     })
     .addCase(loginUser.fulfilled, (state, action)=> {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
     })
     .addCase(loginUser.rejected, (state, action)=> {
        state.loading = false;
        state.error = action.payload; // Handle the error
     })
    } 
})

export const {logout} = authSlice.actions
export default authSlice.reducer