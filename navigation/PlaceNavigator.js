/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import PlaceScreenDetails from '../screens/PlaceScreenDetails';
import PlaceListScreen from '../screens/PlaceListScreen';
import {COLORS} from '../constants/Color';
import Icon from 'react-native-ionicons';
const Stack = createNativeStackNavigator();
const PlaceNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewPlaceScreen"
        component={NewPlaceScreen}
        options={({navigation}) => ({
          title: 'All Products',
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? COLORS.primaryColor : COLORS.White,
          },
          headerTintColor:
            Platform.OS === 'android' ? COLORS.White : COLORS.primaryColor,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20,
          },

          headerRight: () => (
            <Icon
              name="ios-add-circle-sharp"
              size={35}
              color={Platform.OS === 'android' ? COLORS.Orange : COLORS.Red}
              onPress={() => navigation.navigate('PlaceListScreen')}
            />
          ),
        })}
      />

      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={({navigation}) => ({
          title: 'All Products',
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? COLORS.primaryColor : COLORS.White,
          },
          headerTintColor:
            Platform.OS === 'android' ? COLORS.White : COLORS.primaryColor,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20,
          },
        })}
      />

      <Stack.Screen
        name="PlaceScreenDetails"
        component={PlaceScreenDetails}
        options={({navigation}) => ({
          title: 'Add Place',
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? COLORS.primaryColor : COLORS.White,
          },
          headerTintColor:
            Platform.OS === 'android' ? COLORS.White : COLORS.primaryColor,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20,
          },
        })}
      />
      
      <Stack.Screen
        name="PlaceListScreen"
        component={PlaceListScreen}
        options={({navigation}) => ({
          title: 'All Products',
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? COLORS.primaryColor : COLORS.White,
          },
          headerTintColor:
            Platform.OS === 'android' ? COLORS.White : COLORS.primaryColor,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20,
          },
        })}
      />
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
