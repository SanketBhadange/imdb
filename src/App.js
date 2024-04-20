import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <>
     <Navbar/>
     <Banner/>
     <Movies/>
     <Watchlist/>
    </>
  );
}

export default App;
