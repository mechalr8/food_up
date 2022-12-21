import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';

const RestaurantDetail = ({navigation, route}) => {
  const [count, setCount] = useState(0);
  const {item} = route.params;
  console.log('RestaurantDetail: ', item);
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
      <View style={styles.restaurantHeading}>
        <Text style={styles.restaurantName}>
          {item.Restaurant_Name.toUpperCase()}
        </Text>
      </View>
      <Card mode="elevated" style={{margin: 10}}>
        <Card.Cover
          style={styles.cardCover}
          source={{uri: 'https://picsum.photos/700'}}
        />
        <Card.Content>
          <View style={styles.basicInfo}>
            <Text style={styles.nameText}>{item.Restaurant_Name}</Text>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{item.Aggregate_rating}</Text>
              <Icon name="star" size={16} color={'#C09711'} />
            </View>
          </View>
          <Text style={styles.localityText}>
            {item.Locality}, {item.City}
          </Text>
          {item.Is_delivering_now == 'No' ? (
            <></>
          ) : (
            <Icon name="truck-delivery" size={20} color={'coral'} />
          )}
          {item.Has_Table_booking == 'No' ? (
            <></>
          ) : (
            <Icon name="food" size={20} color={'coral'} />
          )}
        </Card.Content>
      </Card>
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
                <Text style={{marginRight: 36, color: '#2B2B29'}}>{count}</Text>
                <TouchableOpacity onPress={() => increaseCount()}>
                  <Icon1 name="plus-square-o" size={20} color="coral" />
                </TouchableOpacity>
              </View>
            </Card.Content>
          </Card>
        )}
      />
      <TouchableOpacity
        style={styles.addToCartView}
        onPress={() => navigation.navigate('Cart', {item})}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEEEA',
  },
  restaurantHeading: {
    backgroundColor: 'coral',
    alignItems: 'center',
    padding: 12,
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
  },
  cardCover: {
    padding: 12,
    backgroundColor: '#F3F2EF',
  },
  basicInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    color: '#2B2B29',
    fontWeight: 'bold',
    fontSize: 16,
  },
  localityText: {
    color: '#2B2B29',
  },
  ratingText: {
    color: '#C09711',
    fontWeight: 'bold',
  },
  addToCartView: {
    backgroundColor: 'coral',
    alignItems: 'center',
    padding: 12,
    margin: 10,
  },
  addToCartText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
  },
  cartCount: {
    width: 110,
    flexDirection: 'row',
  },
});
