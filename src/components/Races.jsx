import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react';
import { getRacesRequest } from '../redux/actions';
import Race from './Race.jsx';
import RacesHeader from './RacesHeader.jsx';
import LogOutButton from './LogOutButton.jsx';
import CarouselOfImages from './CarouselOfImages.jsx';
import Loader from 'react-loader-spinner';
import moment from 'moment';
import './Races.scss'

export default function Races({ history }) {
  const [selectionRange, setSelectionRange] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }]);
  const races = useSelector((state) => state.races)
  const favourites = useSelector((state) => state.favourites)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const startDate = moment(selectionRange[0]['startDate']).format("YYYY-MM-DD")
    const endDate = moment(selectionRange[0]['endDate']).format("YYYY-MM-DD")
    dispatch(getRacesRequest(startDate, endDate))
  }, [selectionRange])

  const handleOnChange = ranges => {
    const { selection } = ranges;
    setSelectionRange([selection]);
  };

  return (
    <div className="races">
      <LogOutButton history={history} />
      <div className="races__container">
        <RacesHeader selectionRange={selectionRange} onChange={handleOnChange} />
        <CarouselOfImages />
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
