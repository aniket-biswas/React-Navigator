import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingsScreen"

const Tab = createBottomTabNavigator();

function Home({ navigation }) {
  return <Text>Home</Text>;
}

function Settings({ navigation }) {
  return <Text>Settings</Text>;
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          var iconName = '';

          if (route.name == 'Home') {
            iconName = focused ? 'planet' : 'planet';
          }
          else if(route.name=="Settings"){
            iconName = focused ? "cog" :"cog-sharp";
          }

          return <Ionicons name={iconName} size={size} color={color}/>
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'red',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
