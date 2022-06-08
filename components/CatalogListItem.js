import { StyleSheet, View } from "react-native"
import { Button, Card } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"

export default function CatalogListItem(props) {

    const navigation = useNavigation()

    const openPokemonDetails = () => {
        navigation.navigate("Pokemon", {
            index: props.index
        })
    }

    return (
        <View style={styles.container}>
            <Card>
                <Card.Title title={props.name} />
                <Card.Actions>
                    <Button onPress={openPokemonDetails}>View</Button>
                </Card.Actions>

            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        paddingVertical: 8,
    }
})