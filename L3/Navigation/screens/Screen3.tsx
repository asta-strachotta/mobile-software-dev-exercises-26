import {Pressable, View, Text, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../navigation/types";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useState} from "react";

export default function Screen3() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [s3pressed, setS3Pressed] = useState<boolean>(false);
    const [s2pressed, setS2Pressed] = useState<boolean>(false);

    return(
        <View style={styles.container}>
            <Pressable
                style={s2pressed ? styles.in : styles.out}
                onPress={() => navigation.navigate('Screen2')}
                onPressIn={() => setS2Pressed(true)}
                onPressOut={() => setS2Pressed(false)}
            >
                <Text style={styles.text}>Screen 2</Text>
            </Pressable>
            <Pressable
                style={s3pressed ? styles.in : styles.out}
                onPress={() => navigation.navigate('Screen1')}
                onPressIn={() => setS3Pressed(true)}
                onPressOut={() => setS3Pressed(false)}
            >
                <Text style={styles.text}>Screen 1</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    out: {
        backgroundColor: "#13a2ae",
        borderRadius: 10,
        padding: 5,
        marginVertical: 5,
    },
     in: {
        backgroundColor: "#6aced6",
        borderRadius: 10,
        padding: 5,
        marginVertical: 5,
    },
    text: {
        fontWeight: "bold",
        color: "white",
        padding: 5,
        alignSelf: "center",
    }
});