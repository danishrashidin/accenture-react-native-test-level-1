import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { getPokemon } from '../services/PokeService';
import { SvgUri } from 'react-native-svg';

import About from '../components/pokemon/About';
import Stats from '../components/pokemon/Stats';
import { Text } from 'react-native-paper';

export default function PokemonDetails({ route, navigation }) {

    const { index } = route.params
    const [isLoading, setLoading] = useState(true)
    const [pokemonData, setPokemonData] = useState({})
    const { pokemons } = useSelector(state => state.pokemons)
    const Tabs = createMaterialTopTabNavigator()

    useEffect(() => {

        if (isLoading) {
            // Fetch pokemon data
            getPokemon(pokemons[index].url).then((data) => {
                setPokemonData(data)
                setLoading(false)
            })
        }

    }, [isLoading])

    return (
        <View style={styles.container}>
            {!isLoading && <View style={styles.container}>
                <View style={styles.coverContainer}>
                    <SvgUri width={150} uri={pokemonData.imgUri} />
                    <View style={styles.coverDetail}>
                        <Text style={styles.name}>{String(pokemonData.about.name)}</Text>
                    </View>

                </View>
                <Tabs.Navigator >
                    <Tabs.Screen name="About" component={About} initialParams={{ data: pokemonData.about }} />
                    <Tabs.Screen name="Stats" component={Stats} initialParams={{ data: pokemonData.stats }} />
                </Tabs.Navigator>
            </View>}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    },
    coverContainer: {
        backgroundColor: 'white',
        height: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    coverDetail: {
        marginStart: 24
    },
    name: {
        fontSize: 36,
        fontWeight: '600'
    }

})