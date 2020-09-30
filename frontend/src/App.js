import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className="py-3">
          <Route path="/" exact component={HomePage} />
          <Route path="/product/:id" exact component={ProductPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
