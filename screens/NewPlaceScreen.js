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

const NewPlaceScreen = props => {
  const [selectedId, setSelectedId] = useState(null);
  const places = useSelector(state => state.places.places);

  const renderItem = ({item}) => {
    return <TouchableOpacity onPress={item.onSelect}>



    </TouchableOpacity>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />

      <Button
        title="Click"
        onPress={() => {
          props.navigation.navigate('MapScreen');
        }}
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
