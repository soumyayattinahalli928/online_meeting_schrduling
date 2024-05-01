import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../src/Pages/adminlogin.css';
import Nav from 'react-bootstrap/Nav'

const AdminLogin = () => {
  return (
   <>
        <h1>Admin Login</h1>
       <div className='container'>
        <div>
            <img src="./admin.jpeg" alt="" />
        </div>
        <div>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control className='input' type="email" placeholder="name@example.com" />
        <Form.Label>Password</Form.Label>
        <Form.Control className='input' type="password" placeholder="name@example.com" />
        <a href="#">Forgot Password?</a><br/><br/><br/>
        <Button className="btn btn-primary">Login</Button>
        <p>Don't have account? <a href="">SignIn</a></p>
      </Form.Group>
      
      </Form>
        </div>
    </div>
   </>
  );
}
export default AdminLogin