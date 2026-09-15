import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FirstScreen from './FirstTab';
import SecondScreen from './SecondTab';
import ThirdScreen from './ThirdTab'
import Ionicons from '@react-native-vector-icons/ionicons';


export default function App() {
  const Tabs = createBottomTabNavigator()
  
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen 
          name={"FirstTab"} 
          component={FirstScreen} 
          options={{tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name = {focused ? "home" : "home-outline"}
              size = {size}
              color = {color}
            />
          )}}
        />
        <Tabs.Screen 
          name={"SecondTab"} 
          component={SecondScreen} 
          options={{tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name = {focused ? "american-football" : "american-football-outline"}
              size = {size}
              color = {color}
            />
          )}}
        />
        <Tabs.Screen 
          name={"ThirdTab"} 
          component={ThirdScreen} 
          options={{tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name = {focused ? "airplane" : "airplane-outline"}
              size = {size}
              color = {color}
            />
          )}}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

