import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './page/Home';
import Blog from './page/Blog';
import About from './page/About';
import Product from './page/Product';

function App() {
  return (
    <> 
      <Router>
           <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
 