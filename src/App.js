import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';

import Footer from './components/Footer';
import Home from './page/Home';
import Blog from './page/Blog';
import About from './page/About';
import Product from './page/Product';
import User from './components/User';

function App() {
  return (
    <> 
      <Router>
        <Nav />
           <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Product />} />
        </Routes>
        <User/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
 