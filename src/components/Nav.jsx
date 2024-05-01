import React from 'react'
import '../../src/Pages/hom.css';

const Nav = () => {
  return (
    <div>
            <div className='navbar'>
<Nav className="justify-content-end" style={{marginLeft:"60%", padding:"1.40%"}} activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/" style={{color:"white"}}>Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="about" style={{color:"white"}}>About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/adminlogin" style={{color:"white"}}>Admin Login</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/userlogin" style={{color:"white"}}>User Login</Nav.Link>
    </Nav.Item>
    </Nav>
</div>
    </div>
  )
}

export default Nav