import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<Aboutus />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
