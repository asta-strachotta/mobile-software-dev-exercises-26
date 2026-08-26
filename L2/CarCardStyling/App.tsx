import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*
Create a .tsx file called CarRentalCard.
Define an interface for the props the CarRentalCard component will receive
(image (path/link), model and rental price).
Define how you want to display the car rental card with the props.
(Remember, the default flex-direction on mobile is column, try changing it to row).

Styling for images can be ~fun~ - if you link to an image from the web, you need to define dimensions.
If you download an image into the /assets folder, you can use the require() function. It
only takes static string paths (you cannot reference a variable inside the path).

In App.tsx:
Import the CarRentalCard component, display it with your chosen props
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
