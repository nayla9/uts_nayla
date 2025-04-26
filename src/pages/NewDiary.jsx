import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createDiary } from '../api/api';
import { useDiary } from '../context/DiaryContext';

const NewDiary = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { addEntry } = useDiary();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = await createDiary({ title, content, date: new Date().toISOString().split('T')[0] });
    addEntry(newEntry);
    navigate('/');
  };
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-pink-700 mb-4">New Diary Entry 📝</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Title" className="w-full p-2 border rounded" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Write your story..." className="w-full p-2 border rounded h-40" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
};

export default NewDiary;