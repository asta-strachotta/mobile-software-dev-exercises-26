import { StyleSheet, View } from 'react-native';
import CarCard from "./src/components/CarCard";


export default function App() {
  return (
    <View style={styles.container}>
      <CarCard/>
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
