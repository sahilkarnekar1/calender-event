import React, { useState } from 'react';
import './Calendar.css';

const Calendar = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Get the current month and year
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Calculate the first day and the number of days in the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Generate an array to represent each day in the calendar
  const daysArray = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysArray.push(null); // Fill empty days before the first day of the month
  }
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  // Get events for a specific date
  const getEventsForDate = (date) => {
    return events.filter(event => new Date(event.date).getDate() === date);
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentYear}</h2>
      </div>
      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}
        {daysArray.map((day, index) => {
          const dayEvents = day ? getEventsForDate(day) : [];
          return (
            <div key={index} className="calendar-day">
              <div className="calendar-date">{day}</div>
              {dayEvents.length > 0 && (
                <div className="calendar-events">
                  {dayEvents.slice(0, 2).map(event => (
                    <div key={event.id} className="calendar-event">
                      {event.title}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <button 
                      className="more-events-button" 
                      onClick={() => setSelectedDate(day)}>
                      +{dayEvents.length - 2} more
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div className="modal" onClick={() => setSelectedDate(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Events on {selectedDate} {currentDate.toLocaleString('default', { month: 'long' })}</h3>
            <ul>
              {getEventsForDate(selectedDate).map(event => (
                <li key={event.id}>{event.title}</li>
              ))}
            </ul>
            <button onClick={() => setSelectedDate(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
