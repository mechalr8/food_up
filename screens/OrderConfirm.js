import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OrderConfirm = () => {
  return (
    <View>
      <Image source={require('../assets/celebrations.png')} />
      <Text style={styles.congo}>Congratulations!!!</Text>
      <Text style={styles.orderConfirmation}>
        Your order has been confirmed.{'\n'}It will be delivered shortly.
      </Text>
    </View>
  );
};

export default OrderConfirm;

const styles = StyleSheet.create({
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
    margin: 20,
  },
});
