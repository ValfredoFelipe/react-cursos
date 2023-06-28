import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Empresa from './components/Empresa';
import Contato from './components/Contato';
import NavBar from './components/navbar';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}>
          
        </Route>
        <Route path='/empresa' element={<Empresa/>}>
          
        </Route>
        <Route path='/contato' element={<Contato/>}>
          
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;
