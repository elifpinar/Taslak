import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 98,
  }

  export const counterSlice =createSlice({
    name:"counter",
    initialState,
    reducers:{
    increment:(state)=>{
        state.value += 1;
    },
    decrement :(state)=>{
      state.value -= 1;
    },
  },

  })

export const {increment,decrement } = counterSlice.actions  //ortak fonksiyonları dışarıya açtık

export default counterSlice.reducer