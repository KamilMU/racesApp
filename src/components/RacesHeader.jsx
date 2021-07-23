import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import { showRacesByDate } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function RacesHeader() {
  const [calendarClicked, setCalendarClicked] = useState(false);
  const [value, onChange] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showRacesByDate(new Date(value).toLocaleDateString()));
  }, [value])

  return (
    <div className="races__header">
      <span>Вылеты <span>&#62;</span> SVO - JFK</span>
      <div className="races__calendar-icon">
        <span>{value ? value?.toLocaleDateString() : ''}</span>
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
  )
}
