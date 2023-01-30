import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from '../store/counter'
import { pokemonSlice } from './pokemon/pokemonSlice'


export const store = configureStore({
  reducer: {
    counteres:counterSlice.reducer,
    pokemons: pokemonSlice.reducer
  },
})

