import React from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const CreateMeeting = () => {
  return (
    <div className='desc-container'>
        <h1 style={{textAlign:"center", color:"cornflowerblue", fontWeight:"bolder", textShadow:"inherit"}}>Meeting Details</h1><br/>
        <Form style={{marginLeft:'40%'}}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><h5>Description</h5></Form.Label>
        <Form.Control as="textarea" rows={3}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><h5>Meeting Start Time</h5></Form.Label>
        <Form.Control type="time"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><h5>Meeting Date</h5></Form.Label>
        <Form.Control type="date" />
      </Form.Group><br/>
      <Button variant="info"><Link to="/table" className='link' style={{color:'white', textDecoration:'none'}}>Back</Link></Button>{' '}<br/><br/>
      <Button variant="success">Join Meeting</Button>{' '}
      
        </Form>
    </div>
  )
}

export default CreateMeeting