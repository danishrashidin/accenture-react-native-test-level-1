import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"

export default function About({ route }) {

    const { data } = route.params
    const arr = Object.entries(data)

    return (
        <View style={styles.container}>
            {arr.map((value, index) => {
                return (
                    <View style={styles.dataContainer}>
                        <Text style={styles.key}>{String(value[0]).toUpperCase()}</Text>
                        {Array.isArray(value[1]) ?
                            <View>
                                {value[1].map((subdata) =>
                                    <Text style={{ marginBottom: 8 }}>{String(subdata).toUpperCase()}</Text>)}
                            </View> :
                            <Text style={styles.value}>{value[1]}</Text>}

                    </View>
                )
            })}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        padding: 18
    },
    dataContainer: {
        flexDirection: 'row',
        marginVertical: 12,
        flexWrap: 'wrap'
    },
    key: {
        fontWeight: '700',
        width: "25%"
    },
    value: {
        width: "75%"
    }
})