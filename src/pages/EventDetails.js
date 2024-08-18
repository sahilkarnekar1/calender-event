import React, { useContext, useState, useEffect } from 'react';
import { EventContext } from '../context/EventContext';
import { useNavigate, useParams } from 'react-router-dom';

const EditEventForm = () => {
  const { events, addEvent, deleteEvent } = useContext(EventContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const eventToEdit = events.find(event => event.id === id);

  const [title, setTitle] = useState(eventToEdit?.title || '');
  const [date, setDate] = useState(eventToEdit?.date || '');
  const [category, setCategory] = useState(eventToEdit?.category || '');

  useEffect(() => {
    if (!eventToEdit) {
      navigate('/');
    }
  }, [eventToEdit, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the updated event object
    const updatedEvent = { id, title, date, category };

    // Remove the old event and add the updated event
    deleteEvent(id);
    addEvent(updatedEvent);

    // Redirect to home page or calendar
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="edit-event-form">
      <h2>Edit Event</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditEventForm;
