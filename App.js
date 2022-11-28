import 'react-native-gesture-handler';
import React, { useState, useCallback, useEffect } from 'react';
import { View, Text } from 'react-native'
import Home from './src/Screens/EatsHome/Home';
import Swiper5 from './src/Screens/EatsHome/slider';
import FoodDetail from './src/Screens/FoodDetail/FoodDetail';
import MealPayment from './src/Screens/MealPayment/MealPayment';
import MealPreOrder from './src/Screens/MealPreOrder/MealPreOrder';
import MineTabBar from './src/Screens/mineTabBar';
import TabBar from './src/Screens/TopTab/TabBar';
import SwiperPagerButton from './src/Screens/UpperTab';
import YourMeal from './src/Screens/YourMeal/YourMeal';
import MainStack from './src/Navigator/navigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  requestUserPermission,NotificationListner  } from './src/utils/pushNnotification_helper';

const Stack = createStackNavigator();
const App = () => {
  useEffect(() => {
    requestUserPermission()
    NotificationListner()
  }, [])
  
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>  

  )
}

export default App
