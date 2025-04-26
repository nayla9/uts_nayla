import { useDiary } from '../context/DiaryContext';
import DiaryCard from '../components/DiaryCard';

const Home = () => {
  const { entries } = useDiary();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-700 mb-6">Welcome to My Diary 💕</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {entries.map((entry) => (
          <DiaryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default Home;