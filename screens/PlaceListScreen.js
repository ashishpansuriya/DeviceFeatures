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
import { useDispatch } from 'react-redux';
import ImgPicker from '../components/ImgPicker';
import {COLORS} from '../constants/Color';
import * as placeAction from '../Redux/place-action';

const PlaceListScreen = (props) => {
  const [titleValue, setTitleValue] = useState('');
  const dispatch = useDispatch();

  const titleChangeHandler = title => {
    setTitleValue(title);
  };
  const savePlaceHolder = () => {
    dispatch(placeAction.addPlace(titleValue));
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={styles.label}>Title</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter Place"
          onChangeText={titleChangeHandler}
          value={titleValue}
        />

        <ImgPicker />
        <View style={styles.buttonView}>
          <View style={styles.buttonStyle}>
            <Button
              title="Save Place"
              color={COLORS.Black}
              onPress={savePlaceHolder}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    flex: 1,
    justifyContent: 'flex-end',
  },
  label: {
    fontSize: 22,
    marginBottom: 15,
    alignSelf: 'center',
  },
  textInput: {
    borderColor: COLORS.Black,
    borderWidth: 1,
    height:40,
    padding: 10,
    borderRadius: 10,
  },

  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'relative',
    marginTop: 40,
  },
  buttonStyle: {
    borderColor: COLORS.Brown,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    color: COLORS.WHITE,
  },
});

export default PlaceListScreen;
