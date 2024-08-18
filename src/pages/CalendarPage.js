import React, { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';
import Calendar from '../components/Calendar';
import EventList from '../components/EventList';
import FilterOptions from '../components/FilterOptions';
import AddEventForm from '../components/AddEventForm';

const CalendarPage = () => {
  const { events } = useContext(EventContext);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [showAddEventForm, setShowAddEventForm] = useState(false);

  const filterEvents = (category) => {
    setFilteredEvents(events.filter(event => event.category === category));
  };

  return (
    <div className="calendar-page">
      <button className="add-event-button" onClick={() => setShowAddEventForm(true)}>Add Event</button>
      <Calendar events={events} />
      <FilterOptions onFilter={filterEvents} />
      <EventList events={filteredEvents.length > 0 ? filteredEvents : events} />

      {showAddEventForm && (
        <AddEventForm onClose={() => setShowAddEventForm(false)} />
      )}
    </div>
  );
};

export default CalendarPage;
