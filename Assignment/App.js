import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";
import { View, Text } from 'react-native';

// App.js is already setup by wrapping NavigationContainer around Root Navigator
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    // <View style = {{backgroundColor : 'black', flex : 1, padding : 10, alignItems : 'center', justifyContent : 'center'}}>
    //   <Text style = {{color : 'white'}}>
    //     Start app
    //   </Text>
    // </View>
  );
}
