import React from 'react';
import "./App.css";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Header from "./components/Header";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cartscreen from "./screens/Cartscreen";
import Productdetails from "./screens/Productdetails";
function App() {
  return (
    <Router>
      <main>
        {/* <Container> */}
        <Header />
        {/* <h1>Amazon app</h1> */}
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/cart" element={<Cartscreen />} />
          <Route path="/product/:id" element={<Productdetails/>} />
        </Routes>
        <Footer />
        {/* </Container> */}
      </main>
    </Router>
  );
}

export default App;
