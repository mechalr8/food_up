import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useState} from 'react';
import {authentication} from '../firebase/firebase-config';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const ResgisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(re => {
        navigation.navigate('Login');
        // console.log(re);
      })
      .catch(re => {
        console.log(re);
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
        <TouchableOpacity onPress={registerUser} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginView}>
        <Text style={styles.accountCheckText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login...</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ResgisterScreen;

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
  loginView: {
    marginTop: 8,
    flexDirection: 'row',
  },
  accountCheckText: {
    color: '#2B2B29',
  },
  loginText: {
    color: '#0000ff',
    marginStart: 3,
  },
});
