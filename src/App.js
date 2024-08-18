import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import EventDetails from './pages/EventDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalendarPage />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
