import axios from "axios";

export const getPokemonsWithLimit = async (limit) => {

    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
        return Promise.resolve(data)
    } catch (error) {
        console.log(error)
        return Promise.reject({})
    }

}

export const getNext = async (nextUri) => {
    try {
        const { data } = await axios.get(nextUri)

        return Promise.resolve(data)
    } catch (error) {
        console.log(error)
        return Promise.reject({})
    }
}

export const getPokemon = async (pokemonUri) => {
    try {
        let pokemonData
        const { data } = await axios.get(pokemonUri)
        const { abilities, height, name, stats, types, weight, sprites } = data
        const imgUri = sprites.other.dream_world.front_default

        pokemonData = {
            about: {
                name,
                height,
                weight,
                types: [...types].map((value) => value.type.name),
                abilities: [...abilities].map((value) => value.ability.name)
            },
            stats: [...stats].map((element) => ({
                name: element.stat.name,
                base_stat: element.base_stat
            })),
            imgUri
        }

        return Promise.resolve(pokemonData)
    } catch (error) {
        console.log(error)
        return Promise.reject({})
    }
}