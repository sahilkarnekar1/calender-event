import React, { useState, useContext } from 'react';
import { EventContext } from '../context/EventContext';
import './AddEventForm.css';

const AddEventForm = ({ onClose }) => {
  const { addEvent } = useContext(EventContext);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Work');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now().toString(),
      title,
      date,
      category
    };
    addEvent(newEvent);
    onClose(); // Close the form after adding the event
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h3>Add New Event</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Date:</label>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Category:</label>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
            </select>
          </div>
          <div className="form-actions">
            <button type="submit">Add Event</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventForm;
