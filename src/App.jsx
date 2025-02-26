
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Robotics from './pages/Robotics/Robotics';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Training from './pages/Training/Training';
import Intership from './pages/Intership/Intership';
import Service from './pages/Service/Service';
import Industry from './pages/Project/Industry';
import Contact from './pages/Contact/Contact';

function App() {


  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/robotics' element={<Robotics />} />
        <Route path='/training' element={<Training />} />
        <Route path='/internship' element={<Intership />} />
        <Route path='/services' element={<Service />} />
        <Route path='/projects' element={<Industry />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
