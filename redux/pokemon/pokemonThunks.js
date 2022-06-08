import { createAsyncThunk } from "@reduxjs/toolkit";

// Services
import { getPokemonsWithLimit, getNext } from "../../services/PokeService";

export const loadSomePokemons = createAsyncThunk('pokemons/load', async (args, thunkAPI) => {

    const { nextUri } = thunkAPI.getState().pokemons

    let res
    // First API call
    if (nextUri == null) {
        res = await getPokemonsWithLimit(10)
    } else {
        res = await getNext(nextUri)
    }

    return res
})