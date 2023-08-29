import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import RecipeList from './Recipes';
import Nutrition from './Nutrition';
import Services from './Services';
import BookOnline from './BookOnline';
import Navigation from './Navigation';
import AddRecipe from './AddRecipe';
import Recipe from './Recipe';
import AddArticle from './AddArticle';
import Article from './Article';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/book-online" element={<BookOnline/>} />
        <Route path="/add-recipe" element={<AddRecipe/>}/>
        <Route path="/add-article" element={<AddArticle/>}/>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;