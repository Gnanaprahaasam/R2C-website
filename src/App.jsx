
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Robotics from './pages/Robotics/Robotics';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {


  return (
    <HashRouter>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/robotics' element={<Robotics />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
