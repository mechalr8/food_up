import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import CartSummary from '../screens/CartSummary';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Cart"
        component={CartSummary}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
