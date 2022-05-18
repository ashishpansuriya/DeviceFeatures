/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import PlaceScreenDetails from '../screens/PlaceScreenDetails';
import PlaceListScreen from '../screens/PlaceListScreen';

const Stack = createNativeStackNavigator();
const PlaceNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewPlaceScreen" component={NewPlaceScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="PlaceScreenDetails" component={PlaceScreenDetails} />
      <Stack.Screen name="PlaceListScreen" component={PlaceListScreen} />

    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlaceNavigator;
