import React from 'react';
import '../styles/ListSelector.css';

const ListSelector = ({ lists, selectedList, onSelectList }) => {
  return (
    <div className="list-selector">
      <label htmlFor="list-select">Select a list:</label>
      <select id="list-select" value={selectedList} onChange={onSelectList}>
        {lists.map((list) => (
          <option key={list.id} value={list.id}>
            {list.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListSelector;
