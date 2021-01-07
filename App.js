import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen  from './src/screens/SearchScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Search">
        <Stack.Screen 
          name = "Search" 
          component = {SearchScreen}
          options={{
            title: 'Restaurent Search',
            // headerTransparent: true,
            // headerBackground: () => (
            //   <View tint="light" intensity={100} style={StyleSheet.absoluteFill} />
            // ),
          }}
        />

        <Stack.Screen 
          name = "Detail" 
          component = {DetailScreen}
          options={{
            title: 'Restaurent Detail',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>    
  )
}

export default App

const styles = StyleSheet.create({})
