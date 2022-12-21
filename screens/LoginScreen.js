import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

import React, {useState} from 'react';
import {authentication} from '../firebase/firebase-config';
import {signInWithEmailAndPassword} from 'firebase/auth';

const LoginScreen = ({navigation}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(re => {
        navigation.navigate('TabNav');
        // console.log(re);
      })
      .catch(re => {
        Alert.alert(
          'Login Error:',
          'Please enter correct login credentials...',
        );
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor={'#9a9a97'}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          placeholderTextColor={'#9a9a97'}
          style={styles.textInput}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={loginUser} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerView}>
        <Text style={styles.accountCheckText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Register...</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEEEA',
  },
  textInput: {
    width: 325,
    borderWidth: 1,
    borderColor: 'coral',
    backgroundColor: '#F3F2EF',
    color: '#2B2B29',
    borderRadius: 10,
    paddingStart: 8,
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
    backgroundColor: 'coral',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  registerView: {
    marginTop: 8,
    flexDirection: 'row',
  },
  accountCheckText: {
    color: '#2B2B29',
  },
  registerText: {
    color: '#0000ff',
    marginStart: 3,
  },
});
