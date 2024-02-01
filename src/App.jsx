import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Location from "./Pages/Location/Location";
import About from "./Pages/About/About";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Appartment from './components/Appartment/Appartment';
import Appart from './components/Appart/Appart';


function App() {
  return (
   
    <BrowserRouter>
      <Header />
      <Home />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Location" element={<Location/>} />
        <Route path="/About" element={<About/>} />
        
      </Routes>
      <Appartment />
      <Appart />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

    
  