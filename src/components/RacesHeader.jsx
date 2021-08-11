import moment from 'moment';
import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import './RacesHeader.scss';

export default function RacesHeader({ selectionRange, onChange }) {
  const [calendarClicked, setCalendarClicked] = useState(false);

  return (
    <div className="header">
      <span>Вылеты <span>&#62;</span> SVO - JFK</span>
      <div className="header__date-picker-icon">
        <span>{moment(selectionRange[0]['startDate']).format("YYYY-MM-DD")}</span>
        <img
          src={require('../images/calendar.png')}
          alt=""
          onClick={() => setCalendarClicked(!calendarClicked)}
        />
      </div>
      <div className={calendarClicked ? "header__pop-up-date-picker" : "hide"}>
        <div className="date-picker">
          <DateRangePicker
            onChange={onChange}
            ranges={selectionRange}
            minDate={new Date()}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            direction="horizontal"
          />
          <button className="date-picker-close-btn" onClick={() => setCalendarClicked(false)}>Close</button>
        </div>
      </div>
    </div>
  )
}
