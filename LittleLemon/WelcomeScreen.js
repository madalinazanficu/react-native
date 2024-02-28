import * as React from 'react';
import {useState} from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform,
} from 'react-native';


export default function WelcomeScreen() {
  const [firstName, onChangedFirstName] = useState('');
  const [lastName, onChangedLastName] = useState('');
  const [message, onChangedMessage] = useState('');

  return (
    <KeyboardAvoidingView
      style = {styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <ScrollView 
        keyboardDismissMode='on-drag'>

        <Text style={styles.title}> Welcome to Little Lemon </Text>

        <Text style={styles.textVal}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would love
          to hear more about your experience with us!
        </Text>

        <TextInput
          style = {styles.inputBox}
          onChangeText = {onChangedFirstName}
          value = {firstName}
          placeholder="FirstName"
           />

        <TextInput
          style = {styles.inputBox}
          onChangeText = {onChangedMessage}
          value = {message}
          placeholder="Last name"/>

        <TextInput
          style = {styles.inputBox}
          onChangeText = {onChangedLastName}
          value = {lastName}
          placeholder="Please leave feedback"
          multiline={true} />

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    marginVertical : 20
  },
  title: {
    padding: 40,
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
  textVal: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },

  inputBox : {
    backgroundColor : 'white',
    height  : 40,
    margin : 20,
    fontSize : 16,

  },
});
