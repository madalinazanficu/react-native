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
  Image,
  useColorScheme,
} from 'react-native';


export default function WelcomeScreen() {
  const [firstName, onChangedFirstName] = useState('');
  const [lastName, onChangedLastName] = useState('');
  const [message, onChangedMessage] = useState('');

  const colorScheme = useColorScheme('');

  return (
      <ScrollView
        style = {[styles.container,
                  colorScheme == 'light' ? {backgroundColor : 'white'} : {backgroundColor : '#333333'}]}
        keyboardDismissMode='on-drag'>
        
        <View style = {styles.headerContainer}>
          <Image
            source = {require("./img/LittleLemonLogo.png")}
            style = {styles.image}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'}>

          </Image>
          <Text style={styles.title}> Little Lemon </Text>
        </View>

      

        <Text style={[styles.textVal,
                     colorScheme == 'light' ? {color : 'black'} : {color : '#EDEFEE',}]}>

          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would love
          to hear more about your experience with us!
        </Text>

      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#333333',
    marginVertical : 20,
  },

  headerContainer : {
    flexDirection : 'row',
    justifyContent : 'center',
    margin : 10,
  },

  title: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: 'green',
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

  image : {
    height : 100,
    width: 100,
  }

});
