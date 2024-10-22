import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counterSlice'

//product slice
//applicationSlice


export const store = configureStore({
  reducer: {
    counter:counterReducer,
    
  },
})