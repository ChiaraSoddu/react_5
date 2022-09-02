import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='Navbar'>
      <Container>
        <Navbar.Brand href="#home">
        <img src="../../public/assets/images/netflix-82871.png" alt="" />    
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='Navbar.Link text-white' >Home</Nav.Link>
            <Nav.Link className='Navbar.Link text-white'>TV Shows</Nav.Link>
            <Nav.Link className='Navbar.Link text-white'>Movies</Nav.Link>
            <Nav.Link className='Navbar.Link text-white'>Recently Added</Nav.Link>
            <Nav.Link className='Navbar.Link text-white'>My List</Nav.Link>
          </Nav>
          <Nav>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='text-white'>
              KIDS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;