import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function SecondScreen(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 48}}>2</Text>
            <Text>This is the second tab</Text>
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
