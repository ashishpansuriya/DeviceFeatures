/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const NewPlaceScreen = (props) => {
  return (
    <View style={styles.container}>
      

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
