import "./App.css";
import NavBar from "./Pages/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/home/components/HomePage";
import Register from "./Pages/register/Register";
import Login from "./Pages/login/Login";
import Cinemas from "./Pages/cinemas/Cinemas";
import Footer from "./Pages/home/components/Footer";
import Contact from "./Pages/contact/Contact";
import Details from "./Pages/details/Details";
import Booking from "./Pages/booking/Booking";
import Checkout from "./Pages/checkout/Checkout";
import Soon from "./Pages/soon/Soon";
import { useState, useEffect } from "react";
import axios from "axios";
import CinemaDetails from "./Pages/cinemas/CinemaDetails";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://633c3a8474afaef16404d225.mockapi.io/cinema/Movies")
      .then((res) => setData(res.data));
  }, []);
  // console.log(data);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage movies={data} />} />
        <Route path="/cinemas" element={<Cinemas />} />
        <Route path="/cinemadetails" element={<CinemaDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/booking/:id" element={<Booking movies={data} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/soon" element={<Soon movies={data} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
