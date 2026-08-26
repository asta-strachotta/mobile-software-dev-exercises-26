import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*
TODO:
Create a file named CarItem.tsx.
Define an interface for the props the CarItem component will receive.
Create a minimal view that displays the information from the props.

In App.tsx:
Create a list of data of cars, that will be displayed by the list, e.g.
  const cars = [{id: 1, type:"Mercedes", mileage:1000, price: 5000}, {...},{...}];
Use a list of your choice, eg. FlatList, and provide it with data (list defined)
and a renderItems function. Render the list as CarItem components.
 */

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is a list of cars:</Text>
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
