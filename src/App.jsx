import "./App.css";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import CardList from "./CardList";
import { Container, Row, Col } from "react-bootstrap";
import certificates from "./certificates";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const filteredCertificates = certificates.filter((cert) =>
    cert.course.toUpperCase().includes(searchInput.trim().toUpperCase())
  );

  return (
    <>
      <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Container className="mt-4">
        <Row className="g-3 justify-content-center">
          <CardList certificates={filteredCertificates} />
        </Row>
        {/* Scroll Back to top button */}
        <ScrollToTop />
      </Container>
    </>
  );
}

export default App;
