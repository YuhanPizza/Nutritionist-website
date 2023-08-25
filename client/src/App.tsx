import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Recipes from './Recipes';
import Nutrition from './Nutrition';
import Services from './Services';
import BookOnline from './BookOnline';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/book-online" element={<BookOnline/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;