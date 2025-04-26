import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NewDiary from './pages/NewDiary';
import Detail from './pages/Detail';
import { DiaryProvider } from './context/DiaryContext';

function App() {
    return (
      <DiaryProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-pink-50 font-sans">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/new" element={<NewDiary />} />
                <Route path="/diary/:id" element={<Detail />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </DiaryProvider>
    );
  }
  
  export default App;