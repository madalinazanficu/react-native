import * as React from 'react';
import {useState} from 'react';
import { 
    ScrollView, 
    Text, 
    StyleSheet, 
    TextInput,
    TextInputEventData,   
    KeyboardAvoidingView, 
    Platform,
    Alert,
    Pressable,
} from 'react-native';

export default function LoginScreen( {navigation} ) {
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')

  // Stare pentru buton
  const [loggedIn, onLogin] = useState(false)

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>

      {/* Daca loggedIn == true, se afiseaza mesajul You are logged in */}
      {loggedIn && <Text style={styles.headerText}> You are logged in! </Text>}


      {/* Daca loggedIn == false, se afiseaza formularul de logare */}
      {!loggedIn && (
        <>
          <Text style={styles.regularText}>Login to continue </Text>

          <TextInput
            style = {styles.inputBox}
            placeholder = 'email'
            onChangeText = {onChangeEmail}
            value = {email}
            keyboardType={'email-address'}
            onFocus = {() => {Alert.alert("First name is focussed")}}
            onBlur = {() => Alert.alert("First name is now blurred")}
            clearButtonMode={"always"}/>
            
          <TextInput
            style = {styles.inputBox}
            placeholder = 'password'
            onChangeText = {onChangePassword}
            value = {password}
            keyboardType = 'default'
            secureTextEntry = {true}/>

          <Pressable
            style = {styles.loginButton}
            onPress = {() => navigation.navigate('Welcome')}>

            <Text style = {styles.textButton}> Log in </Text>

          </Pressable>
        </>
      )}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },

  inputBox : {
    backgroundColor : 'white',
    height  : 40,
    margin : 20,
    fontSize : 16,

  },

  loginButton : {
    height : 50,
    backgroundColor : '#EE9972',
    marginVertical : 8,
    marginHorizontal : 60,
    borderRadius : 12,
    borderColor : 'black',
    borderWidth : 2,
  },

  textButton : {
    fontSize : 20,
    textAlign : 'center',
    paddingVertical : 10,
  }

});

