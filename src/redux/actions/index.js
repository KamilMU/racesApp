import axios from 'axios';

export const GET_RACES_REQUEST = "GET_RACES_REQUEST";
export const GET_RACES_SUCCESS = "GET_RACES_SUCCESS";
export const FAVOURITE_RACES = "FAVOURITE_RACES";
export const FIND_RACES = "FIND_RACES";
export const REMOVE_FAVOURITE_RACE = "REMOVE_FAVOURITE_RACE";
export const SHOW_RACES_BY_DATE = "SHOW_RACES_BY_DATE";

export const getRacesRequest = () => ({
  type: GET_RACES_REQUEST
});

export const getRacesSuccess = items => ({
  type: GET_RACES_SUCCESS,
  payload: { items }
});


export const addToFavourites = (id) => {
  return {
    type: FAVOURITE_RACES,
    id
  }
}

export const showRacesByDate = (date) => {
  return {
    type: SHOW_RACES_BY_DATE,
    date
  }
}

export const removeFavouriteRace = (id) => {
  return {
    type: REMOVE_FAVOURITE_RACE,
    id
  }
}