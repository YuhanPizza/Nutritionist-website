import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import RecipeList from "./components/Recipes";
import Nutrition from "./components/Nutrition";
import Services from "./components/Services";
import Navigation from "./components/Navigation";
import AddRecipe from "./components/AddRecipe";
import Recipe from "./components/Recipe";
import AddArticle from "./components/AddArticle";
import Article from "./components/Article";
import LoginPage from "./components/AdminLogin";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/services" element={<Services />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/admin-login" element={<LoginPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </HashRouter>
  );
}
export default App;
