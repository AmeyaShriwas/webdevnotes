import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cartItems',
    initialState: {
        value: []
    },
    reducers: {
        addItems: (state, action) => {
            const newItem = action.payload;
            state.value.push(newItem);
        },
        removeItem: (state, action) => {  // Removed async here
            const itemIndex = action.payload;
            // Filter out the item based on the provided index
            state.value = state.value.filter((_, id) => id !== itemIndex);
        },
        clearCart: (state) => {
            state.value = [];
        }
    }
});

// Export actions and reducer
export const { addItems, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
