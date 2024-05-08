import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import Nav  from '../Components/Nav';
function PlaintextExample() {
  return (
    <div>
        <Nav/><br/>
    
    <div className='user'>
        <h1>Add an User</h1> <br/> 
    <Form style={{marginLeft:'620px'}}>
      <Form.Group controlId="formPlaintextEmail">
        <Form.Label>
          Name:
        </Form.Label>
          <Form.Control type='text' placeholder='Enter The Name' style={{width:'300px'}}/>
      
      </Form.Group>

      <Form.Group  controlId="formPlaintextEmail">
        <Form.Label>
          Email:
        </Form.Label>
       
          <Form.Control type='email' placeholder='Enter an Email' style={{width:'300px'}}/>
     
      </Form.Group><br/>
      <Button variant="warning">Add an User</Button>{' '}
    </Form>
    </div>
    </div>

  );
}

export default PlaintextExample;
