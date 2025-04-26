import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-pink-200 text-pink-900 p-4 shadow-md">
    <div className="max-w-4xl mx-auto flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">My Diary 💖</Link>
      <div className="space-x-4">
        <Link to="/new">New</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;