/* eslint-disable prettier/prettier */
import React, {useState} from 'react';

import {StyleSheet, View, Text, Button, ImageBackground,PermissionsAndroid} from 'react-native';
import {COLORS} from '../constants/Color';
import * as ImagePicker from 'react-native-image-picker';

const ImgPicker = props => {
  const [imagePicker, setPickImage] = useState();

  const launchImageLibrary = async () => {
    const image = await ImagePicker.launchImageLibrary();

    console.log('image>>>', image.assets[0].uri);
    setPickImage(image.assets[0].uri);
    props.onImageTaken(image.assets[0].uri);
    console.log(">>>>" , imagePicker);
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "App Camera Permission",
          message:"App needs access to your camera ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera permission given");
        launchImageLibrary();
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagePreview}>
        <ImageBackground style={styles.image} source={{uri: imagePicker}} />
      </View>

      <View style={styles.buttonView}>
        <View style={styles.buttonStyle}>
          <Button
            title="Choose Image"
            color={COLORS.Black}
            onPress={requestCameraPermission}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {width: '100%', height: '100%'},
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  container: {marginTop: 50, flex: 1, flexDirection: 'column'},

  buttonView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonStyle: {
    height: 37,
    borderColor: COLORS.Brown,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    color: COLORS.WHITE,
  },
});

export default ImgPicker;
