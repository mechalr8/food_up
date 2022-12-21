import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Card} from 'react-native-paper';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RestaurantsData from '../data/Restaurants.json';
import CountryCodes from '../data/CountryCode.json';

const HomeScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [restaurants, setRestaurants] = useState(RestaurantsData);

  const searchRestaurants = () => {
    CountryCodes.map(itemCountryCode => {
      if (searchText.toLowerCase() == itemCountryCode.Country.toLowerCase()) {
        console.log(searchText);
        setRestaurants(pastRestaurants => {
          return pastRestaurants.filter(
            item => item.Country_Code == itemCountryCode.Country_Code,
          );
        });
      } else if (searchText == '') {
        setRestaurants(RestaurantsData);
      }
    });
  };
  return (
    <View style={styles.homeContainer}>
      <View style={styles.topBar}>
        <Text style={styles.heading}>FOOD UP</Text>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={'#9a9a97'}
          onChangeText={text => setSearchText(text)}
          style={styles.searchInput}
        />
        <TouchableOpacity
          onPress={() => {
            searchRestaurants();
          }}
          style={styles.searchButton}>
          <Icon name="text-search" size={24} color={'coral'} />
        </TouchableOpacity>
      </View>
      <FlatList
        removeClippedSubviews
        data={restaurants}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.restaurantCard}
            onPress={() => navigation.navigate('Details', {item})}>
            <Card mode="elevated">
              <Card.Cover
                style={styles.cardCover}
                source={{uri: 'https://picsum.photos/700'}}
              />
              <Card.Content>
                <View style={styles.basicInfo}>
                  <Text style={styles.nameText}>{item.Restaurant_Name}</Text>
                  <View style={styles.rating}>
                    <Text style={styles.ratingText}>
                      {item.Aggregate_rating}
                    </Text>
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
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#EFEEEA',
  },
  topBar: {
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'coral',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
  },
  searchBar: {
    alignSelf: 'center',
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    borderWidth: 1,
    borderColor: 'coral',
    backgroundColor: '#F3F2EF',
    color: '#2B2B29',
    borderRadius: 25,
    paddingStart: 8,
  },
  searchInput: {
    borderRadius: 23,
    width: 305,
    backgroundColor: '#F3F2EF',
    color: '#2B2B29',
  },
  restaurantCard: {
    padding: 8,
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
});
