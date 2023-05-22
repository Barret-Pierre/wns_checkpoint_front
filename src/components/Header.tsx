import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Acceuil
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
