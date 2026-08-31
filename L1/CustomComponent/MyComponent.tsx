import { StyleSheet, Text, View } from "react-native";

export default function MyComponent() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is a custom component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#868686",
        padding: 10,
        borderRadius: 16,
    },
    text: {
        color: "#fff",
        fontSize: 18
    }
})