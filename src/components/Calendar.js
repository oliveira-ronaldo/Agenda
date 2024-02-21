import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar({ selectedDate, handleDateChange }) {
  return (
    <div className="calendar">
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
      />
    </div>
  );
}

export default MyCalendar;
