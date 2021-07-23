import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { getRacesRequest, showRacesByDate } from '../redux/actions';
import { auth } from '../auth/auth';
import Race from './Race.jsx';
import Calendar from 'react-calendar';
import 'react-calendar';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const images = [
  require('../images/1.jpg'),
  require('../images/2.jpg'),
  require('../images/3.jpg'),
  require('../images/1.jpg'),
]

export default function Races({ history }) {
  const [value, onChange] = useState("");
  const [calendarClicked, setCalendarClicked] = useState(false);
  const races = useSelector((state) => state.races)
  const favourites = useSelector((state) => state.favourites)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRacesRequest())
  }, [dispatch])

  useEffect(() => {
    dispatch(showRacesByDate(new Date(value).toLocaleDateString()));
  }, [value])

  console.log(favourites, 'favourites')
  return (
    <div className="races">
      <div
        className="log-out"
        onClick={() => {
          auth.logOut();
          history.push('/');
        }}>
        <div>Выйти</div>
        <img src={require('../images/log out.png')} alt="" />
      </div>
      <div className="races__container">
        <div className="races__header">
          <div>Вылеты - SVO - JFK</div>
          <div className="races__calendar-icon">
            {value ? value?.toLocaleDateString() : ''}
            <img
              src={require('../images/calendar.png')}
              alt=""
              onClick={() => setCalendarClicked(!calendarClicked)}
            />
          </div>
          <div className={calendarClicked ? "races__pop-up-calendar" : "hide"}>
            <Calendar
              onChange={onChange}
              value={value}
            />
          </div>
        </div>
        <Carousel
          ssr
          containerClass="carousel-container"
          itemClass="carousel-item"
          partialVisbile
          direction="horizontal"
          itemClass="image-item"
          responsive={responsive}
        >
          {images.slice(0, 5).map((image, index) => {
            return (
              <img
                draggable={false}
                style={{ width: "100%", height: "100%" }}
                src={image}
                key={index}
              />
            );
          })}
        </Carousel>
        <p>Добавлено в избранное: {favourites?.length}</p>
        <div className="list">
          {races?.map((race, index) => (
            <Race key={index} race={race} />
          ))}
        </div>
      </div>
    </div>
  )
}
