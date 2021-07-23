import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react';
import { getRacesRequest } from '../redux/actions';
import Race from './Race.jsx';
import RacesHeader from './RacesHeader.jsx';
import LogOutButton from './LogOutButton.jsx';
import Images from './Images.jsx';
import Loader from 'react-loader-spinner';

export default function Races({ history }) {
  const races = useSelector((state) => state.races)
  const favourites = useSelector((state) => state.favourites)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRacesRequest())
  }, [dispatch])

  return (
    <div className="races">
      <LogOutButton history={history} />
      <div className="races__container">
        <RacesHeader />
        <Images />
        <p className="races__fav-count">
          Добавлено в Избранное: <span>{favourites?.length}</span> рейсов
        </p>
        <div className="races__main">
          {races.length ? (
            <div className="list">
              {races.map((race, index) => (
                <Race key={index} race={race} />
              ))}
            </div>) : (
            <div className="loader">
              <Loader
                type="Oval"
                color="#1157A7"
                height={300}
                width={300}
                timeout={1000}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
