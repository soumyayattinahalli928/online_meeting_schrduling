import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Password() {
  return (
    <div style={{ backgroundColor:'aliceblue', padding: '70px' }}>
    <h1 style={{ margin: '30px auto', textAlign: 'center', backgroundColor: '#fff', padding: '30px',fontStyle:'oblique'}}>Forgot Password</h1>
    <div className='forgot'>  
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="8">
          <Form.Control type='text' placeholder='Enter an Email'/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >
        <Form.Label column sm="2">
          Old Password
        </Form.Label>
        <Col sm="8">
          <Form.Control type='text' placeholder='Enter Password' />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
           New Password
        </Form.Label>
        <Col sm="8">
          <Form.Control type='text' placeholder='Enter New Password '/>
        </Col>
      </Form.Group>
    </Form>
    

    <div className='buttn'>
    
    <Button variant="warning">Reset Password</Button>{' '}
    </div>
    </div>
    </div>

  );
}

export default Password;