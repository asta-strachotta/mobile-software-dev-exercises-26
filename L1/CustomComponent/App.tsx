import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from './MyComponent';
import PropsComponent from './PropsComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MyComponent/>
      <PropsComponent descriptor1="cool" descriptor2="useful"></PropsComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
});
