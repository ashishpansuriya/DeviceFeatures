/* eslint-disable prettier/prettier */
import place from '../model/place';
import {ADD_PLACE, SET_PLACE} from './place-action';

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACE:
      return {
        place: action.places.map(
          pl => new place(pl.id.toString(), pl.title, pl.image),
        ),
      };

    case ADD_PLACE:
      const newPlace = new place(
        action.placeData.id,
        action.placeData.title,
        action.placeData.image,
      );
      return {
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
};
