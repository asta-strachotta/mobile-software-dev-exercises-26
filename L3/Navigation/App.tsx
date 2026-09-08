import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*
Create a types.ts file, and define your RootStackParamList. Export it
Create three different screens no navigate between.

In each screen:
Use the useNavigation hook, and define the type to be <NativeStackNavigationProp<RootStackParamList>>
Create two buttons, that navigate to the other two screens by using the useNavigation hook.

In App.tsx:
Replace the contents of the return statement with the
NavigationContainer.
The navigation container should contain the screens.
 */

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
});
