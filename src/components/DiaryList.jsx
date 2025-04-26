import React from 'react';

function DiaryList({ entries, onDelete }) {
  return (
    <div className="diary-list">
      {entries.length === 0 ? (
        <p>No diary entries yet.</p>
      ) : (
        entries.map((entry, index) => (
          <div key={index} className="entry">
            <p className="date">{entry.date}</p>
            <p>{entry.text}</p>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default DiaryList;
