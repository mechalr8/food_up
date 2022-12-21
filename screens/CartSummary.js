import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import {Card} from 'react-native-paper';

const CartSummary = ({navigation, route}) => {
  const [count, setCount] = useState(0);
  const {item} = route.params;
  const price = count * item.Average_Cost_for_two;
  console.log('CartSummary: ', item);
  const menu = item.Cuisines.split(', ');
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count == 0) setCount(0);
    else setCount(count - 1);
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.cart}>
          <Text style={styles.heading}>CART</Text>
        </View>
        <View style={styles.orderContent}>
          <Text style={styles.order}>Order Summary:</Text>
          <FlatList
            data={menu}
            renderItem={({item, index}) => (
              <Card
                mode="elevated"
                style={{
                  marginBottom: 10,
                  marginHorizontal: 10,
                }}>
                <Card.Content
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#2B2B29',
                      width: 200,
                    }}>
                    {item}
                  </Text>
                  <View style={styles.cartCount}>
                    <TouchableOpacity
                      style={{marginRight: 36}}
                      onPress={() => decreaseCount()}>
                      <Icon1 name="minus-square-o" size={20} color="coral" />
                    </TouchableOpacity>
                    <Text style={{marginRight: 36, color: '#2B2B29'}}>
                      {count}
                    </Text>
                    <TouchableOpacity onPress={() => increaseCount()}>
                      <Icon1 name="plus-square-o" size={20} color="coral" />
                    </TouchableOpacity>
                  </View>
                </Card.Content>
              </Card>
            )}
          />
        </View>
        <View style={styles.orderContent}>
          <Text style={styles.order}>Delivering To:</Text>
          <Text style={styles.toAddress}>Harsit Agrawal</Text>
          <Text style={styles.toAddress}>
            Building No.: #56, 402-C, Stay Grand Apartments, Green Glen Layout,
            Bellandur, Bengalore, 560103
          </Text>
        </View>
        <View style={styles.orderContent}>
          <Text style={styles.order}>Delivering From:</Text>
          <Text style={styles.toAddress}>{item.Restaurant_Name}</Text>
          <Text style={styles.toAddress}>{item.Address}</Text>
        </View>
        <View style={styles.orderContent}>
          <Text style={styles.order}>Payment Summary:</Text>
          <Text style={styles.paymentDetails}>
            {count}
            {'       '}X{'       '}
            {item.Average_Cost_for_two}
            {'       '}={'       '}
            {price}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.payView}
        onPress={() => {
          navigation.navigate('Pay');
        }}>
        <Text style={styles.payText}>Proceed To Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEEEA',
    justifyContent: 'space-between',
  },
  cart: {
    backgroundColor: 'coral',
    alignItems: 'center',
    padding: 12,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
  },
  orderContent: {
    margin: 8,
  },
  order: {
    fontWeight: 'bold',
    color: 'coral',
    fontSize: 20,
    marginBottom: 8,
  },
  toAddress: {
    color: '#2B2B29',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  cartCount: {
    width: 110,
    flexDirection: 'row',
  },
  paymentDetails: {
    color: '#2B2B29',
    marginBottom: 10,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  payView: {
    backgroundColor: 'coral',
    alignItems: 'center',
    padding: 12,
    margin: 10,
  },
  payText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 20,
  },
});
