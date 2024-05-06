import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function PlaintextExample() {
  return (
    <div style={{ backgroundColor:'cornsilk', padding: '20px' }}>
    <h1 style={{ margin: '30px auto', textAlign: 'center', backgroundColor: '#fff', padding: '30px',fontStyle:'oblique'}}>ADD AN USER</h1>
    <div className='user'>  
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="1">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text' placeholder='Enter The Name'/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="1">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text' placeholder='Enter an Email' />
        </Col>
      </Form.Group>
    </Form>
    <div className='butn'>
    
    <Button variant="warning">Add an User</Button>{' '}
    </div>
    </div>
    </div>

  );
}

export default PlaintextExample;
