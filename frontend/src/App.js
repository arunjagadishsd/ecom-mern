import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container className="py-3">
          <h1>Welcome To Ecom</h1>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
