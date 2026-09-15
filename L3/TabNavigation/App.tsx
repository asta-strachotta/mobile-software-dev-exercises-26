import { NavigationContainer } from '@react-navigation/native';

import Ionicons from '@react-native-vector-icons/ionicons';
import FirstScreen from './FirstTab';
import SecondScreen from './SecondTab';
import ThirdScreen from './ThirdTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';

const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{headerShown: false}}>
        <Tabs.Screen 
          name={"FirstTab"} 
          component={HomeStack} 
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


