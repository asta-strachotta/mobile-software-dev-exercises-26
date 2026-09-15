import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "./StackList";

export default function FirstPage(){
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 48}}>1</Text>
            <Text>This is the first tab</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('SecondScreen')}>
                <Text style={{color: "white"}}>Go to second screen</Text>
            </Pressable>
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
  button: {
    padding: 16, 
    backgroundColor: "grey",
    borderRadius: 16
  }
});