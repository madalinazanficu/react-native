import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

// Navigation basics
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';
import MenuScreen from './MenuScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>

      {/* Stack navigation for Login and Welcome */}
      {/* <Stack.Navigator
        screenOptions={{ headerStyle : {backgroundColor : '#EE9972'}}}>

        <Stack.Screen
          name = "Login LL"
          component={LoginScreen}
          options = {{title : 'Login'}}/>

        <Stack.Screen name = "Welcome" component={WelcomeScreen} />

      </Stack.Navigator> */}

      {/* Drawer navigation */}
      <Drawer.Navigator>

        <Drawer.Screen
          name = "Login"
          component={LoginScreen} />

        <Drawer.Screen
          name = "Welcome"
          component={WelcomeScreen} />

      </Drawer.Navigator>
        

      


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});
