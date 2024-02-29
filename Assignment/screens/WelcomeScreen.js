import * as React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return <View style={styles.container}>
    <Image
      source={require("../img/little-lemon-logo.png")}
      style={styles.logo}
      resizeMode='contain'>
    </Image>

    <Text style = {styles.text} >
      Little Lemon, your local {'\n'}
      <Text>
        Mediterranean Bistro
      </Text>
    </Text>

    <Pressable
      style = {styles.button}
      onPress = {() => navigation.navigate('Subscribe')}>
      <Text style = {styles.textButton}> Newsletter </Text>
    </Pressable>

  </View>;
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
  },

  logo : {
    height : 250,
    width : 250,
    marginTop : 100,
    marginBottom : 50,
  },

  text : {
    fontSize : 20,
    textAlign : 'center',
    fontWeight : 'bold',
  },

  button: {
    backgroundColor : '#355E3B',
    height : 50,
    marginTop : 150,
    width : 250,
    justifyContent : 'center',
    borderRadius : 12
  },

  textButton: {
    fontSize : 20,
    color : 'white',
    textAlign : 'center',
  }

})

export default WelcomeScreen;
