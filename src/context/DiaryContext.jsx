import { createContext, useContext, useEffect, useState } from 'react';
import { fetchAllDiaries } from '../api/api';

const DiaryContext = createContext();

export const DiaryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchAllDiaries().then(setEntries);
  }, []);

  const addEntry = (entry) => {
    setEntries(prev => [entry, ...prev]);
  };

  return (
    <DiaryContext.Provider value={{ entries, addEntry }}>
      {children}
    </DiaryContext.Provider>
  );
};

export const useDiary = () => useContext(DiaryContext);