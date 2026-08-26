import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*
Inside the view, display a Text component, and two buttons/pressables
 (one for clicks and one for resetting)
Use a hook to manage the click count state.
The text component should display the number of clicks.
The click-button should call a function that will update the click count state.
The reset-button should call a function that will reset the click count.
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
