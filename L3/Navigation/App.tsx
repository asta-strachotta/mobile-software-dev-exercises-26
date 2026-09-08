import {NavigationContainer} from "@react-navigation/native";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from "./navigation/types";

export default function App() {

    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Screen1">
                <Stack.Screen name={"Screen1"} component={Screen1}/>
                <Stack.Screen name={"Screen2"} component={Screen2}/>
                <Stack.Screen name={"Screen3"} component={Screen3}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
