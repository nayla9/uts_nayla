import React, { useState } from 'react';

function DiaryForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;

    const newEntry = {
      text,
      date: new Date().toLocaleString()
    };

    onAdd(newEntry);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <textarea
        placeholder="Write your feelings here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Save Entry 💌</button>
    </form>
  );
}

export default DiaryForm;
