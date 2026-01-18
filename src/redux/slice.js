import {createSlice } from '@reduxjs/toolkit'

const initialState={
    value:0
}

const addTocart= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state)=>{
            state.value+=1;
        },
        removeItem:(state)=>{
            state.value>0 ? state.value-=1 : null ;
        },
        clearItem:(state)=>{
            state.value=0;
        }
    }
})
export const {addItem , removeItem , clearItem} = addTocart.actions;
export default addTocart.reducer