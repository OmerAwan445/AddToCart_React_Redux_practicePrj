import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    totalQuantity:0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    addToCart:(state,action)=>{
    const existedItemIndex = state.items.findIndex(item=>item.id === action.payload.id);
    if(existedItemIndex === -1){
    state.items.push(action.payload);
}else{
    state.items[existedItemIndex].quantity++;
    state.items[existedItemIndex].total += state.items[existedItemIndex].price;
}
state.totalQuantity++;
console.log(state.totalQuantity);
},
    removeFromCart:(state,action)=>{
        const itemInCartIndex = state.items.findIndex(item=>item.id === action.payload.id);
        if(state.items[itemInCartIndex].quantity===0){
            state.items.splice(itemInCartIndex,1);
        }
        else{
            state.items[itemInCartIndex].quantity--;
            state.items[itemInCartIndex].total-= state.items[itemInCartIndex].price;
            state.totalQuantity--;
        }
        },
    }
});
export const cartActions = cartSlice.actions;
