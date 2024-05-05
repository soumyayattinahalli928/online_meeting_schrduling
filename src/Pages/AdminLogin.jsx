import Form from 'react-bootstrap/Form';
import React from 'react'
import Button from 'react-bootstrap/Button';
import '../../src/Style/adminlogin.css';
import Nav from '../Components/Nav'
import { Link } from 'react-router-dom';
const AdminLogin = () => {
  return (
   <>
     <Nav/> <br/>
        <h1>Admin Login</h1>
       <div className='container'>
        <div>
            <img src="./adminlogin.jpeg" alt="" />
        </div>
        <div>
        <Form>
  
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control className='input' type="email" placeholder="name@example.com" style={{backgroundColor:'white', borderColor:'white'}}/>
        <Form.Label>Password</Form.Label>
        <Form.Control className='input' type="password" placeholder="password" />
        <a href="forgotpassword">Forgot Password?</a><br/>
        <Button className="btn btn-primary"><Link to = '/table' className='link'  style={{color:'white', textDecoration:'none'}}>Login</Link></Button>
        <p>Don't have account?
          <a href="adminreg">SignIn</a>
        </p>
      </Form.Group>
      
      </Form>
        </div>
     
    </div>
   </>
  )
}
export default AdminLogin