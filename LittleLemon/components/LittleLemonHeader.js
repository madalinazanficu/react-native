import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>
           Little
        <Text style={headerStyles.innerText}> Lemon</Text>
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop :30,
  
  },
  innerText: {
    fontWeight: 'bold',
  },
});
