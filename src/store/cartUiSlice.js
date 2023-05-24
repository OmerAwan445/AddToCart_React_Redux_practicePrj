import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   showCartModal:false
};

export const cartUiSlice = createSlice({
    name: 'show-cart',
    initialState,
    reducers: {
    removeCartModal:(state)=>{state.showCartModal=false},
    displayCartModal:(state)=>{state.showCartModal=true},
    }
});

export const cartUiactions = cartUiSlice.actions;
