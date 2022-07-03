import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import Home from "./Components/Home";
import Loginmodel from "./Modal/Loginmodel";
import Register from "./Modal/Register";
import TVUNITS from "./Projects/TVUNITS";
import Room from "./Projects/Room";
import POP from "./Projects/POP";
import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
} from "./Projects/ProjectInfo";
import BuyCommercial from "./SellBuyModal/BuyCommercial";
import BuyProperty from "./SellBuyModal/BuyProperty";
import LeaseCommercial from "./SellBuyModal/LeaseCommercial";
import RentingHome from "./SellBuyModal/RentingHome";
import SellPropert from "./SellBuyModal/SellPropert";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home/*" />} />
        <Route exact path="/home/*" element={<Home />} />

        <Route exact path="/card1" element={<Card1 />} />
        <Route exact path="/card2" element={<Card2 />} />
        <Route exact path="/card3" element={<Card3 />} />
        <Route exact path="/card4" element={<Card4 />} />
        <Route exact path="/card5" element={<Card5 />} />
        <Route exact path="/card6" element={<Card6 />} />

        <Route exact path="/buyCommmercial" element={<BuyCommercial />} />
        <Route exact path="/buyProperty" element={<BuyProperty />} />
        <Route exact path="/leaseCommercial" element={<LeaseCommercial />} />
        <Route exact path="/rentingHome" element={<RentingHome />} />
        <Route exact path="/sellProperty" element={<SellPropert />} />

        <Route exact path="/about" element={<Aboutus />} />
        <Route exact path="/contact" element={<Contactus />} />
        <Route exact path="/Loginmodel" element={<Loginmodel />} />
        <Route exact path="/registration" element={<Register />} />
        <Route exact path="/interiorcard2" element={<TVUNITS />} />
        <Route exact path="/interiorcard1" element={<Room />} />
        <Route exact path="/interiorcard3" element={<POP />} />
      </Routes>
    </BrowserRouter>

    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
