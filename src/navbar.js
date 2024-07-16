import {
  Container,
  Navbar,
  Nav,
  Image
} from "react-bootstrap";
import Logo from "./logo.jpg"
export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" data-bs-theme="dark" style={{backgroundColor:'#000000'}}>
      <Container>
        <Navbar.Brand href="#home" >
          <Image src={Logo} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home" className="text-white">Home</Nav.Link>
            <Nav.Link href="/about" className="text-white">About</Nav.Link>
            <Nav.Link href="/experience" className="text-white">Experience</Nav.Link>
            <Nav.Link href="/contact" className="text-white">Contact</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
