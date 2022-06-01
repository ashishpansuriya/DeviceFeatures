/* eslint-disable prettier/prettier */

import {FileSystemSessionType} from 'expo-file-system';
import FileSystem from 'react-native-filesystem';
import RNFS from 'react-native-fs';

export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (title, image) => {
  return async dispatch => {
    const imagePath = image.split('/').pop();
    const filePath = RNFS.DocumentDirectoryPath + imagePath;

    console.log(">>>>>> path",filePath);
    await RNFS.moveFile(image, filePath);

    dispatch({type: ADD_PLACE, placeData: {title: title, image: filePath}});
  };
};
