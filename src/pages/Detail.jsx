import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDiaryById } from '../api/api';

const Detail = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    fetchDiaryById(id).then(setEntry);
  }, [id]);

  if (!entry) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-700 mb-2">{entry.title}</h1>
      <p className="text-sm text-pink-500 mb-4">{entry.date}</p>
      <p className="text-gray-700 whitespace-pre-wrap">{entry.content}</p>
    </div>
  );
};

export default Detail;