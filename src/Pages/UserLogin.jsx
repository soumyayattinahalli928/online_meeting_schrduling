import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UserLogin = () => {
  return (
    <div>
        <div>
          <img src="./user.jpeg" alt="" className='userimg'/>
          <div className='userform'>
                <h1>User Login</h1><br/>
                <Form >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>
      <a href="#" style={{color:"white"}}>Forgot Password?</a><br/><br/><br/>
        <Button className="btn btn-primary">Login</Button><br/>
        <p>Don't have account? <a href="#" style={{color:"white"}}>SignIn</a></p>
    </Form>
          </div>
        </div>
    </div>
  )
}
export default UserLogin