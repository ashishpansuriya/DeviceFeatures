/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import ItemPlace from '../components/ItemPlace';

const NewPlaceScreen = props => {

  
  const [selectedId, setSelectedId] = useState(null);
  const places = useSelector(state => state.places.places);

  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        // eslint-disable-next-line react/jsx-no-undef
        renderItem={itemData => (
          <ItemPlace
            image={null}
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
        extraData={selectedId}
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
