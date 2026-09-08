import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import {useState} from "react";
import {useAuth} from "./AuthContext";

export default function LoginScreen() {
    /* TODO: Use useAuth hook here */
    const {user, login, logout} = useAuth();
    const [username, setUsername] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Authentication Exercise</Text>

            {/* TODO: Show login status: "Logged in as: [user]" or "Not logged in" */}
            <Text style={styles.status}>
                {user ? `Logged in as: ${user}` : "Not logged in"}
            </Text>

            {/* TODO: Add TextInput for username */}
            <TextInput
                style={styles.input}
                placeholder="Enter username"
                value={username}
                onChangeText={setUsername}
            />

            {/* TODO: Add login Button */}
            <Pressable
                style={styles.loginButton}
                onPress={() => login(username)}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            {/* TODO: Add logout Button */}
            <Pressable style={styles.logoutButton} onPress={() => {
                logout();
                setUsername("");
            }}>
                <Text style={styles.buttonText}>Logout</Text>
            </Pressable>
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