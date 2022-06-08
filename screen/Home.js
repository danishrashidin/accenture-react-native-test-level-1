import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {

    const openForm = () => {
        navigation.navigate('Form')
    }

    return (
        <View style={styles.container}>
            <Button title="Contact Us!" onPress={openForm} />
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