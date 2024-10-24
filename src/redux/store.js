import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import CartReducers from './slice/CartSlice';
import pdfReducers from './slice/pdfSlice';

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,  // defines where to store the data
 
};

const rootReducer = combineReducers({
  auth: authSlice,
  cart: CartReducers,
  pdfs: pdfReducers,
});

// Creating a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuring the store
const store = configureStore({
  reducer: persistedReducer,
 
});

export default store;

export const persistor = persistStore(store); // If you want to use redux-persist
