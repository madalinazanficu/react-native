import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

// Navigation basics
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle : {backgroundColor : '#EE9972'}}}>

        <Stack.Screen
          name = "Login LL"
          component={LoginScreen}
          options = {{title : 'Login'}}/>

        <Stack.Screen name = "Welcome" component={WelcomeScreen} />


      </Stack.Navigator>
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
