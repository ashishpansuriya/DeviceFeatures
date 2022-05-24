/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {COLORS} from '../constants/Color';

const PlaceListScreen = () => {
  const [titleValue, setTitleValue] = useState('');

  const titleChangeHandler = title => {
    setTitleValue(title);
  };
  const savePlaceHolder = () => {};

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Title</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter Place"
          onChangeText={titleChangeHandler}
          value={titleValue}
        />

        <Button
          title="Save Place"
          color={COLORS.WHITE}
          onPress={savePlaceHolder}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {},
});

export default PlaceListScreen;
