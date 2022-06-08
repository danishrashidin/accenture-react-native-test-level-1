import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"

export default function Stats({ route }) {

    const { data } = route.params

    return (
        <View style={styles.container}>
            {[...data].map((stat) => (
                <View style={styles.dataContainer}>
                    <Text style={styles.key}>{String(stat.name).toUpperCase()}</Text>
                    <Text style={styles.value}>{stat.base_stat}</Text>
                </View>
            ))}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        padding: 18
    },
    dataContainer: {
        flexDirection: 'column',
        width: "100%",
        marginVertical: 12,
        flexWrap: 'wrap'
    },
    key: {
        fontWeight: '700',
        marginBottom: 4,
    },
    value: {
    }
})