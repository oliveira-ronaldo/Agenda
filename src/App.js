import React, { useState } from 'react';
import Header from './components/Header';
import MyCalendar from './components/Calendar';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.toDateString() === selectedDate.toDateString();
  });

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="sidebar">
          <MyCalendar selectedDate={selectedDate} handleDateChange={handleDateChange} />
          <EventForm addEvent={addEvent} />
        </div>
        <div className="main-content">
          <EventList events={filteredEvents} />
        </div>
      </div>
    </div>
  );
}

export default App;
