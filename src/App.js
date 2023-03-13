import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Registation from './Components/Registation/Registation';
import About from './Pages/About/About.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login';
import Privacy from './Pages/Privacy/Privacy.jsx';
import RequireAuth from './RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<RequireAuth><Blog /></RequireAuth>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reg' element={<Registation />} />
          <Route path='/privacy' element={<Privacy />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
