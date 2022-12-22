import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';

import {authentication} from '../firebase/firebase-config';

const Profile = ({navigation}) => {
  const [isSignIn, setIsSignedIn] = useState(false);
  const SignOutUser = () => {
    signOut(authentication)
      .then(re => {
        setIsSignedIn(false);
        navigation.navigate('Login');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <View></View>
      <TouchableOpacity style={styles.button} onPress={SignOutUser}>
        <Text style={styles.buttonTextStyle}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'coral',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 20,
  },
});
