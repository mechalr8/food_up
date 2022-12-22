import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function TrackOrder() {
  const navigation = useNavigation();
  const [prepared, setPrepared] = useState(false);
  const [orderReady, setOrderReady] = useState(false);
  const [delivered, setDelivered] = useState(false);

  const trackOrder = () => {
    setPrepared(true);
    setOrderReady(false);
    setDelivered(false);

    setTimeout(() => {
      setOrderReady(true);
      setPrepared(false);
      setDelivered(false);
    }, 3000);

    setTimeout(() => {
      setDelivered(true);
      setPrepared(false);
      setOrderReady(false);
    }, 6000);
  };

  return (
    <View style={Styles.maincontainer}>
      <TouchableOpacity onPress={() => trackOrder()} style={Styles.button}>
        <Text style={Styles.buttonTextStyle}>Track Order Details</Text>
      </TouchableOpacity>
      {prepared && (
        <Text style={Styles.renderDetails}>
          Your Food Order is being Prepared...
        </Text>
      )}
      {orderReady && (
        <Text style={Styles.renderDetails}>
          Food is ready to be delivered.{'\n'}Waiting for Delivery agent...
        </Text>
      )}
      {delivered && (
        <Text style={Styles.renderDetails}>
          Your ordered has been delivered. Thank you !!!
        </Text>
      )}
      <TouchableOpacity
        style={Styles.button}
        onPress={() => navigation.navigate('TabNav')}>
        <Text style={Styles.buttonTextStyle}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}
const Styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#EFEEEA',
    display: 'flex',
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'coral',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 10,
    marginTop: 20,
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 20,
  },
  renderDetails: {
    fontSize: 16,
    marginHorizontal: 15,
    color: '#2B2B29',
    textAlign: 'center',
  },
});
