/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, TouchableOpacity, StyleSheet,View,Text} from 'react-native';
import {COLORS} from '../constants/Color';

const ItemPlace = props => {
  return (
    <TouchableOpacity onPress={props.select} style={styles.placeItem}>
      <Image style={styles.image} source={{Uri: props.image}} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.address}>{props.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  placeItem: {
    borderColor: '#ccc',
    borderWidth: 2,
    paddingVertical: 15,
    marginVertical:20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
    marginLeft:20,
    backgroundColor: '#ccc',
    borderColor: COLORS.primaryColor,
    borderWidth: 1,
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: 'center',
 
    alignItems: 'flex-start',
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    color: '#666',
    fontSize: 16,
  },
});

export default ItemPlace;
