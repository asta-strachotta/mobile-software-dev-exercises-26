import {StatusBar} from 'expo-status-bar';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [clickCount, setClickCount] = useState(0);

    function click() {
        setClickCount(clickCount + 1);
    }

    function resetClickCount() {
        setClickCount(0);
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={click} style={styles.button}>
                <Text style={styles.buttonText}>Click me!</Text>
            </Pressable>
            <Text style={styles.text}>Clicked: {clickCount}</Text>
            <Pressable style={styles.resetButton} onPress={resetClickCount}>
                <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#5ea4f6',
        padding: 10,
        borderRadius: 10,
    },
    resetButton: {
        backgroundColor: '#f65e5e',
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    text: {
        paddingTop: 10,
        fontSize: 16,
    }
});
