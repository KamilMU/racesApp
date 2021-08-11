import moment from 'moment';
import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range';

export default function RacesHeader({ selectionRange, onChange }) {
  const [calendarClicked, setCalendarClicked] = useState(false);

  return (
    <div className="races__header">
      <span>Вылеты <span>&#62;</span> SVO - JFK</span>
      <div className="races__calendar-icon">
        <span>{selectionRange.startDate ? selectionRange.startDate?.toLocaleDateString() : ''}</span>
        <img
          src={require('../images/calendar.png')}
          alt=""
          onClick={() => setCalendarClicked(!calendarClicked)}
        />
      </div>
      <div className={calendarClicked ? "races__pop-up-date-picker" : "hide"}>
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
