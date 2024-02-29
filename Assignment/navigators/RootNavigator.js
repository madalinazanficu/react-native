import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from 'react-native';
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Set up stack navigation to move between welcome screen and subscribe screen here */}
      <Stack.Screen
        component={WelcomeScreen}
        name = "Welcome" />

      <Stack.Screen
        component={SubscribeScreen}
        name = "Subscribe" />
    </Stack.Navigator>
  );
};

export default RootNavigator;
