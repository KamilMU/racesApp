import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToFavourites, removeFavouriteRace } from '../redux/actions';
import moment from 'moment';
import './Race.scss';

export default function Race({ race }) {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="item">
      <div className="item__left">
        <div className="item__img">
          <img src={require('../images/plane.png')} alt="" />
        </div>
        <div className="item__main-content">
          <div className="item__race">
            Moscow (SVO) <img src={require('../images/arrow.png')} alt="" /> New York City (JFK)
          </div>
          <div className="item__date">
            {moment(race.OutboundLeg.DepartureDate).format('YYYY-MM-DD')}
          </div>
          <div className="item__company">Aeroflot</div>
        </div>
      </div>
      <div className="item__right">
        <div className="item__fav">
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
        <div className="item__price">Price: <span>{race.MinPrice} Р</span></div>
      </div>
    </div>
  )
}
