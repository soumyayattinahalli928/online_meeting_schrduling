import Nav from 'react-bootstrap/Nav';

function AlignmentExample() {
  return (
    <>
      <Nav  activeKey="/home" style={{height:"80px", width:"100%", position:"fixed", backgroundColor:"white"}}>
      <Nav.Item>
          <Nav.Link className="justify-content-start" style={{color:"black", fontSize:"30px", marginTop:"10px"}}>M .E E T I N G</Nav.Link>
        </Nav.Item>
        
      <Nav className="justify-content-end" style={{marginLeft:"850px", paddingTop:"20px"}} activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/" style={{color:"black"}}>Home</Nav.Link>
        </Nav.Item>
       
        <Nav.Item>
          <Nav.Link href="adminlogin" style={{color:"black"}}>Admin Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="userlogin" style={{color:"black"}}>User Login</Nav.Link>
        </Nav.Item>
        </Nav> 
      </Nav>
    </>
  );
}

export default AlignmentExample;