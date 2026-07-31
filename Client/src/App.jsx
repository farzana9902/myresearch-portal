import {useLocation } from "react-router-dom";
import Navbar from "./Common/Navbar";
import Experts from "./Pages/Experts";
import Features from "./Common/Features";
import Statistics from "./Common/Statistics";
import Footer from "./Common/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Research from "./Pages/Research";
import Workshops from "./Pages/Workshops";
import Institution from "./Pages/Institution";
import Participant from "./Pages/Participant";
import Feedback from "./Pages/Feedback";
import About from "./Pages/About";
import Contact from "./Pages/ContactUs";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const location = useLocation();

  const hideLayout = ["/login", "/register"].includes(location.pathname);
  return (
    <>
      {!hideLayout && <Navbar />}
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/research" element={<Research />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/experts" element={<Experts />} />
      <Route path="/institution" element={<Institution />} />
      <Route path="/participant" element={<Participant />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
     </Routes>
      
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;