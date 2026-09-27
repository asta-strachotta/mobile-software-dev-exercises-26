import {View, Text, Pressable, StyleSheet} from 'react-native';
import {useState} from "react";

export default function Counter ({initialCount} : {initialCount: number}) {
    const [clickCount, setClickCount] = useState(initialCount);

    function increment() {
        setClickCount(clickCount + 1);
    }

    function resetClickCount() {
        setClickCount(0);
    }

    function decrement() {
      setClickCount(clickCount - 1);
    }

    function switchSign() {
      setClickCount(clickCount * -1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Click count:</Text>
            <Text testID={"count"} style={styles.text}>{clickCount}</Text>
            <View>

            <Pressable onPress={increment} style={styles.button}>
                <Text style={styles.buttonText}>Increment</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={decrement}>
                <Text style={styles.buttonText}>Decrement</Text>
            </Pressable>
            <Pressable style={styles.resetButton} onPress={resetClickCount}>
                <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={switchSign}>
                <Text style={styles.buttonText}>Switch sign</Text>
            </Pressable>
            </View>
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
        marginVertical: 5
    },
    resetButton: {
        backgroundColor: '#f65e5e',
        padding: 10,
        borderRadius: 10,
        width: '100%',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    text: {
        paddingTop: 10,
        fontSize: 25,
        paddingBottom: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});