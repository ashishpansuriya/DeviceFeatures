/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  // Button,
  // TouchableOpacity,
} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';
import ItemPlace from '../components/ItemPlace';
// import * as PlaceAction from '../Redux/place-action';
import {openDatabase} from 'react-native-sqlite-storage';

const NewPlaceScreen = props => {
  var db = openDatabase({name: 'places.db'});
  
  // const places = useSelector(state => state.places.places);
  // const dispatch = useDispatch();
  let [flatListItems, setFlatListItems] = useState([]);
  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM places', [], (tx, results) => {
        var total = results.rows.raw().length;
        var temp = [];

        for (let i = 0; i < total; ++i)
          // eslint-disable-next-line curly
          temp.push(results.rows.raw()[i]);
          setFlatListItems(temp);
      });
    });
  }, [db]);

  return (
    <View style={styles.container}>
      <FlatList
        data={flatListItems}
        // eslint-disable-next-line react/jsx-no-undef
        renderItem={itemData => (
          <ItemPlace
            image={itemData.item.uri}
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
