import React from 'react';

function EventList({ events }) {
  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.title}</strong> - {event.date}
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
