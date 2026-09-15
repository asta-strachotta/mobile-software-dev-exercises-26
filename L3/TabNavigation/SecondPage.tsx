import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet } from "react-native";


export default function SecondPage(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Text>This is the second screen</Text>
            <Pressable style={styles.button} onPress={navigation.goBack}>
              <Text>Go back</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        padding: 12,
        borderRadius: 16,
        backgroundColor: "cyan"
    }
})