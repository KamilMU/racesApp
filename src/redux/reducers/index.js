import { GET_RACES_SUCCESS, FAVOURITE_RACES, REMOVE_FAVOURITE_RACE, SHOW_RACES_BY_DATE } from '../actions';

const initialState = {
  races: [],
  favourites: [],
  images: [
    require('../../images/1.png'),
    require('../../images/2.png'),
    require('../../images/3.png'),
    require('../../images/1.png')
  ]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RACES_SUCCESS:
      return {
        ...state,
        races: action.payload.items,
      }

    case FAVOURITE_RACES:
      return {
        ...state,
        favourites: [...state.favourites, action.id],
      }

    case REMOVE_FAVOURITE_RACE:
      return {
        ...state,
        favourites: state.favourites.filter(fav => fav !== action.id)
      }

    case SHOW_RACES_BY_DATE:
      return {
        ...state,
        races: action.payload.items
      }

    default:
      return state;
  }
}