/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ItemPlace from '../components/ItemPlace';
import * as PlaceAction from '../Redux/place-action';

const NewPlaceScreen = props => {
  

  const places = useSelector(state => state.places.places);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PlaceAction.loadPlace());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        // eslint-disable-next-line react/jsx-no-undef
        renderItem={itemData => (
          <ItemPlace
            image={itemData.item.url}
            title={itemData.item.title}
            address={null}
            select={() => {
              props.navigation.navigate('PlaceScreenDetails', {
                params: itemData.item.title,
              });
            }}
          />
        )}
        keyExtractor={item => item.id}
   
      />
    </View>
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

export default NewPlaceScreen;
