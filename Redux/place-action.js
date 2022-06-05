/* eslint-disable prettier/prettier */

import RNFS from 'react-native-fs';
import {insertPlace, fetchPlace} from '../helper/Db';

export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACE = 'SET_PLACE';

export const addPlace = (title, image) => {
  return async dispatch => {
    const imagePath = image.split('/').pop();
    const filePath = RNFS.ExternalDirectoryPath + imagePath;
    filePath.startsWith('file://');

    try {
      console.log('>>>>>> path', filePath);
      await RNFS.moveFile(image, filePath);

      const dbResult = await insertPlace(
        title,
        imagePath,
        'Dummy',
        15.6,
        12,
        4,
      );

      console.log(dbResult);
      dispatch({
        type: ADD_PLACE,
        placeData: {id: dbResult.insertId, title: title, image: filePath},
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const loadPlace = () => {
  return async dispatch => {
    try {
      const dbResult = await fetchPlace();
      console.log(dbResult);
      dispatch({type: SET_PLACE, places: []});
    } catch (err) {
      console.log(err);
    }
  };
};
