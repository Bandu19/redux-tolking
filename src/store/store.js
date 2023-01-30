import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from '../store/counter'


export const store = configureStore({
  reducer: {
    counteres:counterSlice.reducer,
  },
})

