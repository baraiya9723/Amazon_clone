import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cartscreen from "./screens/Cartscreen";
import Productdetails from "./screens/Productdetails";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NotFoundscreen from "./screens/NotFoundscreen";
function App() {
  return (
    <Router>
      <main>
        {/* <Container> */}
        <Header />
        {/* <h1>Amazon app</h1> */}
        <Routes>
          <Route exact path="/" element={<Homescreen />} />
          <Route exact path="/cart" element={<Cartscreen />} />
          <Route exact path="/product/:id" element={<Productdetails />} />
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />

          {/* Protected Routes */}
          <Route exact path="/profile" element={<ProtectedRoute element={ProfileScreen} />} />

          <Route path="*" element={<NotFoundscreen />} />
        </Routes>
        <Footer />
        {/* </Container> */}
      </main>
    </Router>
  );
}

export default App;
