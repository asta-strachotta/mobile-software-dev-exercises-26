import SecondPage from './SecondPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './FirstTab';

const Stack = createNativeStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={FirstPage} options={{headerShown: false}}/>
        <Stack.Screen name="SecondScreen" component={SecondPage}/>
    </Stack.Navigator>
  );
}


