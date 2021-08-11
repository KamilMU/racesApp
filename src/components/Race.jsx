import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToFavourites, removeFavouriteRace } from '../redux/actions';
import moment from 'moment';

export default function Race({ race }) {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="list__item">
      <div className="list__left">
        <div className="list__img">
          <img src={require('../images/plane.png')} alt="" />
        </div>
        <div className="list__main-content">
          <div className="list__race">
            Moscow (SVO) <img src={require('../images/arrow.png')} alt="" /> New York City (JFK)
          </div>
          <div className="list__date">
            {moment(race.OutboundLeg.DepartureDate).format('YYYY-MM-DD')}
          </div>
          <div className="list__company">Aeroflot</div>
        </div>
      </div>
      <div className="list__right">
        <div className="fav">
          <img
            src={require(!clicked && race ? '../images/heart.png' : '../images/fav.png')}
            alt=""
            onClick={() => {
              setClicked(!clicked);
              if (!clicked) {
                dispatch(addToFavourites(race));
              } else {
                dispatch(removeFavouriteRace(race))
              }
            }}
          />
        </div>
        <div className="list__price">Price: <span>{race.MinPrice} Р</span></div>
      </div>
    </div>
  )
}
