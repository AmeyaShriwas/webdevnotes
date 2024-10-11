import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import CartReducers from './slice/CartSlice'

// Configuration for redux-persist
const persistConfig = {
    key: 'root',
    storage,  // defines where to store the data
   
};

const rootReducer = combineReducers({
    auth: authSlice,
    cart: CartReducers
});

// Creating a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuring the store
const store = configureStore({
    reducer: persistedReducer,
});

export default store;
