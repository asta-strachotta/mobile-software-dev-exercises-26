import { View, Text, StyleSheet } from "react-native";

export default function ThirdScreen(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 48}}>3</Text>
            <Text>This is the third tab</Text>
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
