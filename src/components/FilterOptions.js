import React from 'react';

const FilterOptions = ({ onFilter }) => (
  <div className="filter-options">
    <button onClick={() => onFilter('Work')}>Work</button>
    <button onClick={() => onFilter('Personal')}>Personal</button>
  </div>
);

export default FilterOptions;
