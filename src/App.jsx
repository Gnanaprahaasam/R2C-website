
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Robotics from './pages/Robotics/Robotics';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/robotics' element={<Robotics />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
