import { Link } from 'react-router-dom';

const DiaryCard = ({ entry }) => (
  <div className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition">
    <h2 className="text-xl font-semibold text-pink-700">{entry.title}</h2>
    <p className="text-sm text-pink-500 mb-2">{entry.date}</p>
    <p className="text-gray-700 line-clamp-3">{entry.content}</p>
    <Link to={`/diary/${entry.id}`} className="text-pink-600 hover:underline text-sm">Read more</Link>
  </div>
);

export default DiaryCard;