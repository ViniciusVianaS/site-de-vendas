import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Button from "./components/Button"
import Product from './pages/Product';
import { SearchForm } from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className='header'>
          <nav className='nav'>
            <h3>My Site</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Button />
              </li>
              <li>
                <SearchForm />
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
