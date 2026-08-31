import { StyleSheet, Text, View } from "react-native";

interface props {
    descriptor1: string,
    descriptor2: string
}

export default function PropsComponent({descriptor1, descriptor2}: props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is a <Text style={{color: "yellow", fontWeight: "bold"}}>{descriptor1}</Text> component</Text>
            <Text style={styles.text}>And it is very <Text style={{color: "yellow", fontWeight: "bold"}}>{descriptor2}</Text></Text>
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