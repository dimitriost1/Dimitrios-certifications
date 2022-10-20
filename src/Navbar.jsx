import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarComponent = ({ setSearchInput, searchInput }) => {
  function searchInputChange(e) {
    setSearchInput((prev) => e.target.value);
  }

  return (
    <Navbar bg="secondary" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <span>
            <img
              src="https://dimitrios.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1654543331194%2F8ihDZOUQ8.png%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=256&q=75"
              width={50}
            />
          </span>
          {"  "}
          Dimitri's certifications
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="https://www.sololearn.com/profile/1436759"
              target="_blank"
            >
              Sololearn Profile
            </Nav.Link>
            <Nav.Link
              href="https://github.com/dimitriost1/Dimitrios-certifications"
              target="_blank"
            >
              GitHub repo
            </Nav.Link>
            <Nav.Link href="https://dimitrios.hashnode.dev/" target="_blank">
              Blog
            </Nav.Link>
          </Nav>
          <div className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search by course"
              className="me-2"
              aria-label="Search"
              onChange={searchInputChange}
              value={searchInput}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
