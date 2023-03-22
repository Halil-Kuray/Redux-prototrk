import { Route, Routes, Link, NavLink} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Home';


function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>

  );
}

export default App;
