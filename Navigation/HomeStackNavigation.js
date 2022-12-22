import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import ResgisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetail from '../screens/RestaurantDetail';
import CartSummary from '../screens/CartSummary';
import OrderConfirm from '../screens/OrderConfirm';
import BottomTabNavigation from './BottomTabNavigation';
import TrackOrder from '../screens/TrackOrder';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={ResgisterScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Details"
          component={RestaurantDetail}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Cart"
          component={CartSummary}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TabNav"
          component={BottomTabNavigation}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OrderConfirm"
          component={OrderConfirm}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Track"
          component={TrackOrder}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
