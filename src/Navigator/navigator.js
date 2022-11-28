import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Home from '../Screens/EatsHome/Home';
import DetailElement from '../Screens/EatsHome/DetailElement';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';

const Stack = createSharedElementStackNavigator();
enableScreens()

const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={DetailElement} />
        </Stack.Navigator>
    )
}

export default MainStack
