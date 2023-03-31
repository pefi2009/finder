import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Gamal } from './Context/github/GithubContext';

const App = () => {
  return (
    <Gamal>
     <Router>
     <div>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
          
        <Route path='/*' element={<NotFound></NotFound>}/>
        <Route path='/notfound' element={<NotFound></NotFound>}/>
          
         
        <Route path='/about' element={<About></About>}/>
      </Routes>
     </div>
    </Router>
    </Gamal>
  )
}

export default App
