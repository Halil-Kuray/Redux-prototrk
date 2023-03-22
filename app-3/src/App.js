import { Route, Routes, Link, NavLink} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Categories from './categories/Categories';
import Item from './categories/Item'

function App() {
  return (
    <main>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 mb-2">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <NavLink to='/' className="flex items-center text-white">
              Home
            </NavLink>
            <div className=" w-full md:block md:w-auto" id="navbar-default">
                <ul 
                    className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <NavLink 
                          to='/about' 
                          className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                          About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                          to='/contact' 
                          className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                          Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/home/categories' element={<Categories/>} ></Route>
        <Route path='//home/categories/:id' element={<Item />}></Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>

  );
}

export default App;
