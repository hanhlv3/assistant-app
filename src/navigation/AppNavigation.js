import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='welcome' >
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})