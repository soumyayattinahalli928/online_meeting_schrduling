import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

function ImageComponent() {
  return (
    <div>  
    <Navbar expand="lg" className="bg-warning" style={{margin:'20px',height:'60px'}}>
      <Container>    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Log In" id="basic-nav-dropdown">
              <NavDropdown.Item href="" style={{fontStyle:'italic',color:'blue'}}>As an admin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"style={{fontStyle:'italic',color:'blue'}}>
                As an user
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  <div style={{position:'relative',maxWidth:'100%'}}>
    
<div style={{backgroundImage:'url(image.png)',backgroundSize:'cover',height:'650px',position:'relative',margin:'36px',padding:'10px'}}>
  
    <div style={{position:'absolute',top:'30%',left:'50%',transform:'translate(-50%,-50%)',textAlign:'center',color:'black'}}>
<h1 style={{fontSize:'100px',fontStyle:'italic',color:'blueviolet'}}>WELCOME</h1>
<h1 style={{fontSize:'50px',fontStyle:'italic',color:'blueviolet',padding:'30px'}}>MeetupHub</h1>
    </div>
</div>

  </div>
    
    </div>
  );
}

export default ImageComponent;
