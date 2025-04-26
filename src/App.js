import React, { useState, useEffect } from 'react';
import './App.css';
import DiaryForm from './components/DiaryForm';
import DiaryList from './components/DiaryList';

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('diaryEntries');
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    setEntries([entry, ...entries]);
  };

  const deleteEntry = (index) => {
    const newEntries = [...entries];
    newEntries.splice(index, 1);
    setEntries(newEntries);
  };

  return (
    <div className="App">
      <h1>My Girly Diary 💖</h1>
      <DiaryForm onAdd={addEntry} />
      <DiaryList entries={entries} onDelete={deleteEntry} />
      <footer>© 2025 My Diary — made with 💕</footer>
    </div>
  );
}

export default App;
