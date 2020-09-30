import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container className="py-3">
          <HomePage />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
