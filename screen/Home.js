import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {

    const openForm = () => {
        navigation.navigate('Form')
    }

    const viewCatalog = () => {
        navigation.navigate('Catalog')
    }

    return (
        <View style={styles.container}>
            <Button title="Contact Us!" onPress={openForm} />
            <Button title="View Catalog" onPress={viewCatalog} />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});