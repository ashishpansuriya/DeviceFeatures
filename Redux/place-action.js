/* eslint-disable prettier/prettier */

export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (title, image) => {


  return async dispatch => {
    const filePath = FileSystemDirectoryEntry.name  

    dispatch({type: ADD_PLACE, placeData: {title: title, image: image}});
  };
};
