import * as React from 'react';
import { View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform}
from 'react-native';
import {useState} from 'react';

const SubscribeScreen = () => {
  
  const [email, onChangeEmail] = useState("")

  return (
    <KeyboardAvoidingView
      style = {styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View>
        <Image
          source={require("../img/little-lemon-logo-grey.png")}
          style={styles.logo}
          resizeMode='contain'>
        </Image>

        <Text
          style = {styles.text}>
          Subscribe for our newsletter for our {'\n'} latest delicious recipies!
        </Text>

        <TextInput
          value = {email}
          onChangeText={onChangeEmail}
          keyboardType={'email-address'}
          style = {styles.textInput}
          placeholder = "Type your email">
        </TextInput>

      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
  },

  logo : {
    height : 150,
    width : 150,
    alignSelf : 'center',
  },

  text : {
    fontSize : 20,
    textAlign : 'center',
    marginTop : 40,
  },

  textInput : {
    marginTop : 50,
    borderColor : 'black',
    fontSize : 16,
    borderWidth : 1.5,
    width : 350,
    height : 40,
    borderRadius : 8,
  }
})

export default SubscribeScreen;
