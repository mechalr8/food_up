import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const OrderConfirm = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/celebrations.png')} />
      <View>
        <Text style={styles.congo}>Congratulations!!!</Text>
        <Text style={styles.orderConfirmation}>
          Your order has been confirmed.{'\n'}It will be delivered shortly.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Track')}>
          <Text style={styles.buttonText}>Track Your Order</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../assets/celebrationsInverted.png')} />
    </View>
  );
};

export default OrderConfirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#EFEEEA',
  },
  congo: {
    color: 'coral',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  orderConfirmation: {
    color: '#2B2B29',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 30,
  },
  button: {
    backgroundColor: 'coral',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 10,
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 20,
  },
});
