import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native'
import CatalogListItem from '../components/CatalogListItem';

import { useSelector, useDispatch } from 'react-redux';

// Thunks
import { loadSomePokemons } from '../redux/pokemon/pokemonThunks';
import { setLoaded } from '../redux/pokemon/pokemonSlice';

export default function Catalog({ navigation }) {

    const { pokemons, loaded } = useSelector((state) => state.pokemons)
    const dispatch = useDispatch()

    useEffect(() => {

        if (loaded == false) {
            // Initially fetch 10 pokemons and store to redux
            dispatch(loadSomePokemons())
        }

        return () => {

        };
    }, [loaded]);

    return (
        <View style={styles.container}>
            <FlatList
                onEndReached={() => dispatch(loadSomePokemons())}
                contentContainerStyle={styles.list}
                data={pokemons}
                renderItem={({ item, index }) => <CatalogListItem name={item.name} index={index} />} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,

    },
    list: {
        paddingVertical: 18
    }
})

