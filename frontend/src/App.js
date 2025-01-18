import React from 'react';
import "./App.css";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Header from "./components/Header";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cartscreen from "./screens/Cartscreen";
import Productdetails from "./screens/Productdetails";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
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
          {/* <Route path="/login" element={<LoginScreen/>} /> */}
          <Route path="/register" element={<RegisterScreen/>} />
          <Route path="/profile" element={<ProfileScreen/>} />
          <Route path="/login" element={<LoginScreen/>} />
        </Routes>
        <Footer />
        {/* </Container> */}
      </main>
    </Router>
  );
}

export default App;
