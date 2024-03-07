import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Rental from "./Pages/Rental/Rental";
import About from "./Pages/About/About";
import Error from './Pages/Error/Error';
import "./utils/global.scss"
import "../src/utils/variables.scss"

function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rental/:logementId" element={<Rental />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


