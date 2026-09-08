import {useState} from "react";
import {View, StyleSheet, Text, TextInput, Pressable} from "react-native";


export default function LoginScreen() {
    //TODO: use useAuth hook here

    const [userName, setUserName] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Authentication exercise</Text>

            {/*TODO: show the login status: "Logged in as: [user]" or "Not logged in"
                hint: use the ternary operator for conditional rendering
                [condition] ? [option a] : [fallback option] */}

            {/*TODO: add a TextInput for username. Update the state using the onChangeText prop*/}

            {/*TODO: add login button.*/}
            {/*TODO: add logout button.*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 30,
        textAlign: "center",
    },
    status: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    loginButton: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    logoutButton: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#007BFF",
    },
});