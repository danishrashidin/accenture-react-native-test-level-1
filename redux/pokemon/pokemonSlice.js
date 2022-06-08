import { createSlice } from "@reduxjs/toolkit";
import { loadSomePokemons } from "./pokemonThunks";

const initialState = {
    pokemons: [],
    nextUri: null,
    loaded: false
}

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setNextUri: (state, action) => {
            state.nextUri = action.payload
        },
        setLoaded: (state, action) => {
            state.loaded = action.payload
        }
    },
    extraReducers: {
        [loadSomePokemons.fulfilled]: (state, action) => {
            const { next, results } = action.payload
            state.nextUri = next
            state.pokemons = [...state.pokemons, ...results]
            state.loaded = true
            // console.log(`New state : ${JSON.stringify(state)}`)
        }
    }
})

export const { setNextUri, setLoaded } = pokemonSlice.actions

export default pokemonSlice.reducer