import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className="py-3">
          <Route path="/login" exact component={LoginPage} />
          <Route path="/product/:id" exact component={ProductPage} />
          <Route path="/cart/:id?" exact component={CartPage} />
          <Route path="/" exact component={HomePage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
