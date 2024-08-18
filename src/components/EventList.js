import React, { useContext, useEffect } from 'react';
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom';
import './EventList.css';

const EventList = ({ events }) => {
  const { deleteEvent } = useContext(EventContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger re-render if events change
  }, [events]);

  const handleEdit = (id) => navigate(`/event/${id}`);
  const handleDelete = (id) => deleteEvent(id);

  return (
    <ul className="event-list">
      {events.map(event => (
        <li key={event.id}>
          <span>{event.date}: {event.title}</span>
          <button onClick={() => handleEdit(event.id)}>Edit</button>
          <button onClick={() => handleDelete(event.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default EventList;
